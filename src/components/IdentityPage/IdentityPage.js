import React, { Component } from 'react';
import './IdentityPage.css';
import Attachment from './Attachment/Attachment'
import Button from '../UI/Button/Button'
import Title from '../UI/Title/Title';
import ReactDropzone from 'react-dropzone';
import fileImage from "../../assets/images/file.svg"
import axios from 'axios';


class IdentityPage extends Component {

    state = {
        name: 'Identity verification',
        files: [],
    }

      closeAttachmentHandler = (name) => {
       let files = [...this.state.files];

       let filtered = files.filter(file => {
            if(file.name !== name){
                return file;
            }
            return false;
        })
      
       this.setState({
           files: [...filtered]
       })
       
          
      }
      serfPage = (bool) => {
          if(this.state.files.length){
            this.props.serf(bool)
            this.fileUploadHandler()
          } else {
              return
          }
        
      }
        onPreviewDrop = (files) => {
            this.setState({
                files: this.state.files.concat(files),
            });
        }
          fileUploadHandler = () => {
              let count = Object.keys(this.state.files).length;
              let fd = new FormData();

              for (var i = 0; i < count; i++) {
                  fd.append("files[]", this.state.files[i]);
              }

            //   for (var value of fd.values()) {
            //       console.log(value);
            //   }
              axios.post('/endpoint', fd, {
                  onUploadProgress: progressEvent => {
                      console.log('Upload progress : ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
                  }
              }).then(res => {

              })
          }
    render() {

            let files = this.state.files.map((file, index) => {
                return <Attachment 
                name = {
                    file.name
                }
                key = {
                    index
                }
                size = {
                    Math.round(file.size / 1000)
                }
                closeHandler = {
                    this.closeAttachmentHandler
                }
                />
            })
        return (
            <div className="identity-container">
                <Title name={this.state.name} />
                <ReactDropzone
                    accept = "image/jpeg,image/jpg"
                    onDrop={this.onPreviewDrop}
                    className="upload-container"
                    >
                       <div className="upload-title">
                        <img src={fileImage} alt="file"  />
                        <span>Drag photos here or click to upload</span>    
                    </div>
                </ReactDropzone>
                 <div className="attachment-list">
                    <div>Attachments</div>
                    <div className="attachments">
                       {files}
                    </div>
                 </div>
                <div className="btn-container">
                    <Button serfPage={this.serfPage} />
                </div>
            </div>
        )
    }
}

export default IdentityPage;