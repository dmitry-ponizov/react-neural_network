import React, { Component } from 'react';
import './Upload.css'
import file from "../../../assets/images/file.svg"

class Upload extends Component {

    render() {
        return (
            <div className="upload-container">
                <label className="upload-label">
                    <div className="upload-title">
                        <img src={file} />
                        <span>Drag photos here or click to upload</span>    
                    </div>
                    <input type="file" id="upload" />
                </label>
            </div>
        )
    }
}

export default Upload;