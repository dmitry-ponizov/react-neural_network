import React from 'react';
import './BackButton.css'
import arrowLeft from '../../../assets/images/arrow_left.svg'

const backButton = (props) => (
    <div className="backBtn" >
        <img  src={ arrowLeft } alt="arrow left" />
        <span>{ props.title }</span>
    </div>
)

export default backButton;