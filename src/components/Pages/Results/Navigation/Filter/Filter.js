import React from 'react'
import classes from './Filter.css';
import filterImg from '../../../../../assets/images/filter.svg'

const filter = (props) => (
    <div className={classes.filter} onClick={() => props.serfPage('filter')} >
        <span>Filter</span>
        <img src={ filterImg } alt="arrow right" />
    </div>
)

export default filter;