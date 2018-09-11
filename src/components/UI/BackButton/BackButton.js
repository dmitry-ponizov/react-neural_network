import React from 'react';
import classes from './BackButton.css'
import arrowLeft from '../../../assets/images/arrow_left.svg'

const backButton = (props) => (
    <div className={classes.BackBtn} onClick={() => props.serfPage(false)} >
        <img  src={ arrowLeft } alt="arrow left" />
        <span>{ props.title }</span>
    </div>
)

export default backButton;