import React, { Component } from 'react';
import './App.css';
import quiz_data from './data/quiz_data.json';

import SetOrder from './components/SetOrder';
import Category from './components/Category';
import Question from './components/Question';
import OptionButton from './components/OptionButton';
import Status from './components/Status';
import Result from './components/Result';

let questionsOrder = SetOrder(quiz_data.length);

class App extends Component {

 state = {  
    answeredBlocks : 0,
    totalPoints : 0,
    currentQuestion: questionsOrder[0],
    isResultShown : false,
    percentResult: undefined,
  }

  nextQuestion = () => {
    if (this.state.answeredBlocks <19)   // next
    {   
      this.setState( prevState => ({ 
          answeredBlocks: prevState.answeredBlocks + 1,
          currentQuestion : questionsOrder[prevState.answeredBlocks+1],
          isResultShown : false  }))
    }
    else                        // end 
    {  questionsOrder = SetOrder(quiz_data.length);
       this.setState( { 
          answeredBlocks : 0,
          totalPoints : 0,
          currentQuestion : questionsOrder[0],
          isResultShown : true,
          percentResult: (this.state.totalPoints/((this.state.answeredBlocks+1)*3)*100).toFixed(2) })
    }
    const elementsList = document.querySelectorAll("#first, #second, #third");   
    const elementsArray = [...elementsList];   
    elementsArray.forEach( element => { element.childNodes[0].childNodes[2].disabled=false ; 
                                        element.childNodes[0].childNodes[0].disabled=false ;
                                        element.childNodes[1].firstElementChild.className='alert alert-info' }); 
  }   

  checkAnswer(tag, correct, row) {
      if (tag === quiz_data[this.state.currentQuestion][correct]){
        document.getElementById(row).childNodes[1].firstElementChild.className='alert alert-success';
        this.setState((prevState, props) => ({ totalPoints : prevState.totalPoints +1 }));       
      }   
      else 
      { 
        document.getElementById(row).childNodes[1].firstElementChild.className='alert alert-danger';
      }               
      document.getElementById(row).childNodes[0].childNodes[2].disabled=true;
      document.getElementById(row).childNodes[0].childNodes[0].disabled=true;
    }

  renderButton(tag, correct, row) {
    return <OptionButton text={tag} 
            onClickProp={() => {this.checkAnswer(tag, correct, row );}}  />;}  

  render(){    
    return (
    <div>  
     <Result isVisible={this.state.isResultShown} finalScore={this.state.percentResult} />      
     <Status questNo={this.state.answeredBlocks+1}  points={this.state.totalPoints}  />

     <div className='card bg-light text-dark' >
        <Category onClickProp= {this.nextQuestion} text={quiz_data[this.state.currentQuestion][0]} />
        
        <div id='first' className="flex-row" >  
        <div className='option-col-1'>
        {this.renderButton('TAK', 2, 'first')} &nbsp;
        {this.renderButton('NIE', 2, 'first')}  </div>          
        <Question text={quiz_data[this.state.currentQuestion][1]} /> </div>

        <div id='second' className="flex-row" >  
        <div className="option-col-1"> 
        {this.renderButton('TAK', 4, 'second')} &nbsp;
        {this.renderButton('NIE', 4, 'second')}  </div>
        <Question text={quiz_data[this.state.currentQuestion][3]} /> </div>

        <div id='third' className="flex-row" >  
        <div className="option-col-1"> 
        {this.renderButton('TAK', 6, 'third')} &nbsp;
        {this.renderButton('NIE', 6, 'third')}  </div>
        <Question text={quiz_data[this.state.currentQuestion][5]} /> </div> 
      </div>       
    </div>
    );
  }
}
export default App;