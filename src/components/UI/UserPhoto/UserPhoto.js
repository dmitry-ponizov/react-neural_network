import React from 'react'
import classes from './UserPhoto.css'

const userPhoto = (props) => (
        <div className={classes.UserPhoto}>
            <div className={classes.ImageContainer} >
                <div className={classes.Img}>
                    <img src={props.photo} alt="" />
                </div>
            </div>
            <span>1 match on 2 photos</span>
        </div>
)

export default userPhoto;