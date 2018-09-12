import React, { Component } from 'react'
import classes from './Profile.css'
import UserPhoto from '../../../UI/UserPhoto/UserPhoto'
import Card from '../../../UI/Card/Card'
import WOW  from "wowjs";

class Profile extends Component {

    componentDidMount() {
      new WOW.WOW({
          live: false
      }).init();
    }

    render() {
      let animate = 'wow pulse';

      return(
        <div className={classes.Profile + ' ' + animate} >
          <UserPhoto photo={this.props.found.img}/>
          <Card userData={this.props.user} />
        </div>
      )
    }
}


export default Profile;