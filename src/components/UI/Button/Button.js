import React from 'react';
import './Button.css';
import arrow from '../../../assets/images/arrow.svg'

const button = (props) => (
  <div
     onClick={props.clicked}
     className="btn btn-orange">
     <img src={ arrow } alt="arrow" />
   </div>
);

export default button
