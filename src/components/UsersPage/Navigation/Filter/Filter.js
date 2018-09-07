import React from 'react'
import './Filter.css';
import filterImg from '../../../../assets/images/filter.svg'

const filter = (props) => (
    <div className="filter" >
        <span>Filter</span>
        <img src={ filterImg } alt="arrow right" />
    </div>
)

export default filter;