import React, { Component } from 'react';
import './UsersPage.css';
import Navigation from './Navigation/Navigation'
import Card from './Card/Card'


class UsersPage extends Component {
    

    render() {
        return (
            <div className="users">
                <Navigation />
                <div className="users-cards" >
                    <Card />
                </div>
            </div>
        )
    }
}

export default UsersPage;