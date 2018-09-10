import React from 'react'
import classes from './Profile.css'
import UserPhoto from '../../../UI/UserPhoto/UserPhoto'
import Card from '../../../UI/Card/Card'

const card = (props) => (
    <div className={classes.profile} >
      <UserPhoto />
      <Card />
    </div>
)

export default card;