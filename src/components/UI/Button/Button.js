import React from 'react';
import classes from './Button.css';
import arrow from '../../../assets/images/arrow.svg'

const button = (props) => (
  <div
     onClick = {() => props.serfPage('results')}
     className={ props.active > 0 ? classes.btnOrange +  ' ' + classes.btn  : classes.btnGrey  +  ' ' + classes.btn }>
     <img src={ arrow } alt="arrow" />
   </div>
);

export default button
