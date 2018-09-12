import React from 'react';
import classes from './Card.css';
import qrCode from '../../../assets/images/qrcode.png'
import logo from '../../../assets/images/logo-card.svg'
import barСode from '../../../assets/images/code.svg'
import icon1 from '../../../assets/images/icons/1.png'
import icon2 from '../../../assets/images/icons/2.png'
import icon3 from '../../../assets/images/icons/3.png'
import icon4 from '../../../assets/images/icons/4.svg'
import icon5 from '../../../assets/images/icons/5.png'
import icon6 from '../../../assets/images/icons/6.svg'
import icon7 from '../../../assets/images/icons/7.svg'

const card = (props) => (
    <div className={classes.Card} >
        <div className={classes.LeftBlock} >
            <div className={classes.Image}>
                <img src={ props.userData.selfie } alt="avatar" />
            </div>
            <div className={classes.Qr}>
                <img src={qrCode}  alt="code" />
            </div>
        </div>
        <div className={classes.CenterBlock} >
            <div className={classes.CardLogo} >
                <img src={logo}  alt="monic logotip" />
            </div>
            <div className={classes.UserData}>
                <div className={classes.Name}> {props.userData.passport.firstName} {props.userData.passport.lastName}</div>
                <div className={classes.Fields}>
                    <ul className={classes.UserFields}>
                        <li>Nationality:</li>
                        <li>Expiration:</li>
                        <li>ID:</li>
                    </ul>
                    <ul className={classes.FieldsValues}>
                        <li>{props.userData.passport.nationality}</li>
                        <li>{props.userData.passport.expireIn}</li>
                        <li>{props.userData.uuid}</li>
                     </ul>
                </div>
            </div>
            <div className={classes.Verified}>
                <div className={classes.Title}>
                    Verified accounts
                </div>
                <ul className={classes.Icons}>
                    <li><img src={icon1} alt="" /></li>
                    <li><img src={icon2} alt="" /></li>
                    <li><img src={icon3} alt="" /></li>
                    <li><img src={icon4} alt="" /></li>
                    <li><img src={icon5} alt="" /></li>
                    <li><img src={icon6} alt="" /></li>
                    <li><img src={icon7} alt="" /></li>
                </ul>
            </div>
        </div>
        <div className={classes.RightBlock}>
            <img src={barСode} alt="barcode" />
        </div>
    </div>
)

export default card;