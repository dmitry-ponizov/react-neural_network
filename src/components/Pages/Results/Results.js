import React, { Component } from 'react';
import './Results.css';
import Navigation from './Navigation/Navigation'
import Profile from './Profile/Profile'
import Title from '../../UI/Title/Title'
import UserPhoto from '../../UI/UserPhoto/UserPhoto'

class UsersPage extends Component {
    

    render() {
        return (
            <div className="users">
                <Navigation serfPage={this.props.serf} />
                <div className="profiles">
                    <Profile / >
                    <Profile / >
                    <Profile / >
                    <Profile / >
                    <Profile / >
                    <Profile / >
                </div>
                <div className="without">
                    <Title name ="People without Moniic account" />
                    <div className="without-users">
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