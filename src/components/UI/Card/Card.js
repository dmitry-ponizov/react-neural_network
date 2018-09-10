import React from 'react';
import classes from './Card.css';
import avatar from '../../../assets/images/man.jpg'
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

const card = () => (
    <div className={classes.card} >
        <div className={classes.leftBlock} >
            <div className={classes.image}>
                <img src={ avatar } alt="avatar" />
            </div>
            <div className={classes.qr}>
                <img src={qrCode}  alt="code" />
            </div>
        </div>
        <div className={classes.centerBlock} >
            <div className={classes.cardLogo} >
                <img src={logo}  alt="monic logotip" />
            </div>
            <div className={classes.userData}>
                <div className={classes.name} >John Doe</div>
                <div className={classes.fields}>
                    <ul className={classes.userFields}>
                        <li>Nationality:</li>
                        <li>Expiration:</li>
                        <li>ID:</li>
                    </ul>
                    <ul className={classes.fieldsValues}>
                        <li>USA</li>
                        <li>2022-10-04</li>
                        <li>28135456-3c11-4d6c-bebb-51ee22ce</li>
                     </ul>
                </div>
            </div>
            <div className={classes.verified}>
                <div className={classes.title}>
                    Verified accounts
                </div>
                <ul className={classes.icons}>
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
        <div className={classes.rightBlock}>
            <img src={barСode} alt="barcode" />
        </div>
    </div>
)

export default card;