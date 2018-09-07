import React, { Component } from 'react';
import './Attachment.css'
import close from '../../../../assets/images/close.svg'

class Attachment extends Component {

    render() {
        return (
            <div className="attachment">
                <div>
                    <span className="photo-name">Monic photo.jpg</span>
                    <div>
                        <img src={close} alt="close" />
                    </div>
                </div>
                <span className="photo-size">57KB</span>
            </div>
        )
    }
}

export default Attachment;