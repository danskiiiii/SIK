import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  questNo :PropTypes.number,
  points : PropTypes.number  
}

const defaultProps = {
  questNo : 1,
  points : 0
}

class Status extends Component {  

    render() {
        const { questNo, points } = this.props;
        
      return ( 
          <div className='card bg-light text-dark' >    
            <div className='alert alert-warning' style={{ color:'black' }}> 
                  Blok {questNo} z 20. Poprawnych odpowiedzi: {points}               
           </div>    
          </div>             
      );
    }
  }

Status.propTypes = propTypes;
Status.defaultProps = defaultProps;

export default Status;
  