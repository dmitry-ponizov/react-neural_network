import React from 'react'
import './Profile.css'
import UserPhoto from '../../../UI/UserPhoto/UserPhoto'
import Card from '../../../UI/Card/Card'

const card = (props) => (
    <div className="profile" >
      <UserPhoto />
      <Card />
    </div>
)

export default card;