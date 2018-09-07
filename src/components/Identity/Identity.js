import React, { Component } from 'react';
import './Identity.css';
import Upload from './Upload/Upload'

class Identity extends Component {

    render() {
        return (
            <div className="identity-container">
                <div className="identity-title" >Identity verification</div>
                <Upload />
            </div>
        )
    }
}

export default Identity;