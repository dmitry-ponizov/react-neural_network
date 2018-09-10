import React from 'react'
import people from '../../../assets/images/bitmap.jpg'
import classes from './UserPhoto.css'

const userPhoto = (props) => (
        <div className={classes.userPhoto}>
            <div className={classes.imageContainer} >
                <div className={classes.img}>
                    <img src={people} alt="" />
                </div>
            </div>
            <span>1 match on 2 photos</span>
        </div>
)

export default userPhoto;