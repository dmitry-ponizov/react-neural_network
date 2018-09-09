import React from 'react'
import people from '../../../assets/images/bitmap.jpg'
import './UserPhoto.css'

const userPhoto = (props) => (
        <div className="user-photo">
            <div className="image-container" >
                <div className="img" >
                    <img src={people} alt="" />
                </div>
            </div>
            <span>1 match on 2 photos</span>
        </div>
)

export default userPhoto;