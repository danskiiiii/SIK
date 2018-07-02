import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  text : PropTypes.string,
  onClickProp : PropTypes.func
}

const defaultProps = {
text : 'You forgot to set the text on this button!',
}

class OptionButton extends Component { 


    render() {
        const { text , onClickProp } = this.props;

      return (      
            <button className='btn btn-info' onClick={onClickProp}> {text} </button>     
          );
  }
}

OptionButton.propTypes = propTypes;
OptionButton.defaultProps = defaultProps;
  
export default OptionButton;