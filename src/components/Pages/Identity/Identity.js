import React, { Component } from 'react';
import classes from './Identity.css';
import Attachment from './Attachment/Attachment'
import Button from '../../UI/Button/Button'
import Title from '../../UI/Title/Title';
import ReactDropzone from 'react-dropzone';
import fileImage from "../../../assets/images/file.svg"
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner'

class Identity extends Component {

    state = {
        name: 'Identity verification',
        files: [],
        loading: false,
        page: ''
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
           this.filesUploadHandler()
           this.setState({page:page})
            
        } else {
              return
        }
        
    }

    onPreviewDrop = (files) => {
        this.setState({ files: this.state.files.concat(files) });
    }

    filesUploadHandler = () => {
        let count = Object.keys(this.state.files).length;

        let fd = new FormData();

        for (var i = 0; i < count; i++) {
            fd.append("files", this.state.files[i]);
        }

            //   for (var value of fd.values()) {
            //       console.log(value);
            //   }
        this.setState({loading:true})

        axios.post('http://165.227.171.102:3000/api/v1/recognize', fd, { headers: { 'Content-Type': 'multipart/form-data' } }).then(response => {
 
            this.getUsersDataHandler(response.data)
            // if(response.data.found){
            //     
            // }
        }).catch(error => {
            console.log(error)
        })

        }

        getUsersDataHandler = (data) => {
                let uuids = [];
                for(let found in data.found){
                    uuids.push(data.found[found].id)
                }
            
                axios.post('https://moniic.entenso.com/api/users-uuid', uuids, {headers: { 'Content-Type': 'application/json' }}).then(response => {
                console.log(response)
                    this.setState({loading:false})
                    this.props.serf(this.state.page)
                    this.props.getUsers(response.data.users, data)
                    // 
                }).catch(error => {
                    this.setState({loading:false})
                })
            }

    render() {
   
        let files = this.state.files.map((file, index) => {
            return <Attachment 
                    name = { file.name }
                    key = { index }
                    size = { Math.round(file.size / 1000)}
                    closeHandler = { this.closeAttachmentHandler }
                    />
        })
        
        return (
        
            <div className={classes.IdentityContainer}>
            {!this.state.loading ?
                <div>
                    <Title name={this.state.name} />
                    <ReactDropzone
                        accept = "image/jpeg,image/jpg"
                        onDrop={this.onPreviewDrop}
                        className={classes.UploadContainer}
                        >   
                        <div className={classes.UploadTitle}>
                            <img src={fileImage} alt="file"  />
                            <span>Drag photos here or click to upload</span>    
                        </div>
                    </ReactDropzone>
                    <div className={classes.AttachmentList}>
                        <div>Attachments</div>
                        <div className={classes.Attachments}>
                        {files}
                        </div>
                    </div>
                    <div className={classes.BtnContainer}>
                        <Button serfPage={this.serfPage} active={this.state.files.length} />
                    </div>
                    </div>
            : <Spinner />}
            </div>
        )
    }
}

export default Identity;