import React, { Component } from 'react'
import classes from './WithOutUsers.css'
import Title from '../../../UI/Title/Title'
import UserPhoto from '../../../UI/UserPhoto/UserPhoto'
import WOW  from "wowjs";

class WithOutUsers extends Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
      }

    render () {
        let animate = 'wow bounceInUp';
        return (
            <div className={classes.Without + ' ' + animate}>
                <Title name ="People without Moniic account" />
                <div className={classes.WithoutUsers}>
                    <UserPhoto />
                    <UserPhoto />
                    <UserPhoto />
                    <UserPhoto />
                </div>
            </div>
        )
    }
}

export default WithOutUsers;