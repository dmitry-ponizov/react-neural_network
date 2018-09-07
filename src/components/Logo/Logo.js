import React from 'react'
import logoImg from "../../assets/images/logo.svg"
import './Logo.css';

const logo = (props) => (
   <div className="logo">
     <img src={logoImg} alt="Logo" />
   </div>
);

export default logo;
