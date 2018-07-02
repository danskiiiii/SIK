import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  finalScore : PropTypes.string,  // .toFixed(2) used
  isVisible : PropTypes.bool 
}

const defaultProps = {
    finalScore : undefined,
    isVisible : false
}

class Result extends Component {  

    render() {
    const { finalScore } = this.props;

    if(!this.props.isVisible)  {return null;}
    else {
        return (      
        <div className='alert alert-primary' style={{ color:'black' }} >
              Końcowy wynik: {finalScore}% 
        </div>                        
      );}
    }
  }

Result.propTypes = propTypes;
Result.defaultProps = defaultProps;

export default Result;