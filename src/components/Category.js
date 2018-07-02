import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text : PropTypes.string,
  onClickProp : PropTypes.func
}
const defaultProps = {
  text : 'You forgot to attach a category!'  
}

class Category extends Component {

    render() {
        const { text, onClickProp } = this.props;

      return (
        <div className='alert alert-warning'>
         <div className='flex-row'> 
          <div className='cat-col-1'>
           <button className='btn btn-warning' onClick={onClickProp}> NEXT </button> </div>
          <div className='cat-col-2'> {text} </div>
         </div>
        </div>
      );
    }
  }
Category.propTypes = propTypes;
Category.defaultProps = defaultProps;

export default Category;