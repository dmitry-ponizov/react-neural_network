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
        let withOutUsers = this.props.notFound.map((item, index) => {
                return  <UserPhoto key={index} photo={item.img} />
        })
        return (
            <div className={classes.Without + ' ' + animate}>
                <Title name ="People without Moniic account" />
                <div className={classes.WithoutUsers}>
                    {withOutUsers}
                </div>
            </div>
        )
    }
}

export default WithOutUsers;