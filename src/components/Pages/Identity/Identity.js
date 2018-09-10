import React, { Component } from 'react';
import classes from './Identity.css';
import Attachment from './Attachment/Attachment'
import Button from '../../UI/Button/Button'
import Title from '../../UI/Title/Title';
import ReactDropzone from 'react-dropzone';
import fileImage from "../../../assets/images/file.svg"
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
      serfPage = (page) => {
          if(this.state.files.length){
            this.props.serf(page)
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
                  fd.append("file[]", this.state.files[i]);
              }

            //   for (var value of fd.values()) {
            //       console.log(value);
            //   }
              axios.post('/endpoint', fd, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => {
                    console.log(res)
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
            <div className={classes.identityContainer}>
                <Title name={this.state.name} />
                <ReactDropzone
                    accept = "image/jpeg,image/jpg"
                    onDrop={this.onPreviewDrop}
                    className={classes.uploadContainer}
                    >   
                       <div className={classes.uploadTitle}>
                        <img src={fileImage} alt="file"  />
                        <span>Drag photos here or click to upload</span>    
                    </div>
                </ReactDropzone>
                 <div className={classes.attachmentList}>
                    <div>Attachments</div>
                    <div className={classes.attachments}>
                       {files}
                    </div>
                 </div>
                 <div className={classes.btnContainer}>
                          <Button serfPage={this.serfPage} />
                 </div>
            </div>
        )
    }
}

export default IdentityPage;