import React from 'react'
import classes from './Spinner.css'
import scan from '../../../assets/images/scan.gif'

const spinner = (props) => (
    <div>
        <img src={scan} alt="loading"/>
    </div>
    // <div className={classes.Loader} >Loading...</div>
)


export default spinner;