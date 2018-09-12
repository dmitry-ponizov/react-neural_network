import React, { Component } from 'react';
import classes from './Results.css';
import Navigation from './Navigation/Navigation'
import Profile from './Profile/Profile'
import WithOutUsers from './WithOutUsers/WithOutUsers'

class Results extends Component {
    

    render() {
        return (
            <div className={classes.Users}>
                <Navigation serfPage={this.props.serf} />
                <div className={classes.Profiles}>
                    <Profile / >
                    <Profile / >
                    <Profile / >
                    <Profile / >
                    <Profile / >
                    <Profile / >
                </div>
                <WithOutUsers />
            </div>
        )
    }
}

export default Results;