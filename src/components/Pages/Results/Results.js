import React, { Component } from 'react';
import classes from './Results.css';
import Navigation from './Navigation/Navigation'
import Profile from './Profile/Profile'
import Title from '../../UI/Title/Title'
import UserPhoto from '../../UI/UserPhoto/UserPhoto'

class UsersPage extends Component {
    

    render() {
        return (
            <div className={classes.users}>
                <Navigation serfPage={this.props.serf} />
                <div className={classes.profiles}>
                    <Profile / >
                    <Profile / >
                    <Profile / >
                    <Profile / >
                    <Profile / >
                    <Profile / >
                </div>
                <div className={classes.without}>
                    <Title name ="People without Moniic account" />
                    <div className={classes.withoutUsers}>
                        <UserPhoto />
                        <UserPhoto />
                        <UserPhoto />
                        <UserPhoto />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default UsersPage;