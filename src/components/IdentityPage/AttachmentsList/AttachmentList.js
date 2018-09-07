import React, { Component } from 'react';
import './AttachmentList.css'
import Attachment from './Attachment/Attachment';

class AttachmentList extends Component {

    render() {
        return (
            <div className="attachment-list">
                <div>Attachments</div>
                <div className="attachments">
                    <Attachment />
                    <Attachment />
                </div>
            </div>
        )
    }
}


export default AttachmentList;