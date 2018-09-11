import React from 'react'
import people from '../../../assets/images/bitmap.jpg'
import classes from './UserPhoto.css'

const userPhoto = (props) => (
        <div className={classes.UserPhoto}>
            <div className={classes.ImageContainer} >
                <div className={classes.Img}>
                    <img src={people} alt="" />
                </div>
            </div>
            <span>1 match on 2 photos</span>
        </div>
)

export default userPhoto;