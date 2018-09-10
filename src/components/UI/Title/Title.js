import React from 'react'
import classes from './Title.css';

const title = (props) => (
    <div className={classes.title}>
        { props.name }
    </div>
);

export default title;
