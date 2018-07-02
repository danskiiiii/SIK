import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  text : PropTypes.string,
  color  : PropTypes.string
}
const defaultProps = {
  text : 'You forgot to attach a question!'
}  

class Question extends Component {

    render() {
        const { text } = this.props;

      return (
      <div className="option-col-2"> 
        <p className='alert alert-info' style={{ color:'black' }} > {text} </p> 
      </div>
      );
    }
  }

Question.propTypes = propTypes;
Question.defaultProps = defaultProps;

export default Question;