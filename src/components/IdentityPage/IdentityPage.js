import React, { Component } from 'react';
import './IdentityPage.css';
import Upload from './Upload/Upload'
import AttachmentList from './AttachmentsList/AttachmentList'
import Button from '../UI/Button/Button'
import Title from '../UI/Title/Title';


class IdentityPage extends Component {

    state = {
        name: 'Identity verification'
    }

    render() {
        return (
            <div className="identity-container">
                <Title name={this.state.name} />
                <Upload />
                <AttachmentList />
                <div className="btn-container">
                    <Button />
                </div>
            </div>
        )
    }
}

export default IdentityPage;