import React from 'react';
import './css/uploadimage.css';
import axios from 'axios';
class UploadImage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedFile: null,
      err: null
    }
  }
  changeFile = e => {
    console.log(e.target.files[0]);
    this.setState({
      selectedFile: e.target.files[0]
    })
  }
  uploadImage = e => {
      e.preventDefault();
      if(!this.state.selectedFile)
            this.setState({
                err: 'Not File Selected'
            })
      else{
      const formData = new FormData();
      formData.append('myImage',this.state.selectedFile);
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      };
      axios.post("/api/image/upload",formData,config)
          .then((response) => {
              console.log(response);
              this.props.imageUploaded(response.data.images)
          }).catch((err) => {
              console.log(err.response);
                if(err.response.data.image)
                    this.setState({
                        err: err.response.data.image
                    })
                else
                    console.log(err);
            });
      }
  }
  render(){
    return (
        <React.Fragment>
            {this.props.upload?(
            // <div style={{
            //     position: 'fixed',
            //     top: 0,
            //     left: 0,
            //     width: '100%',
            //     height: '100%',
            //     background: 'rgba(0, 0, 0, .7)'
            // }}>
                <div style={{
              position: 'fixed',
              left: '300px',
              top: '250px',
              width: '400px',
              height: '250px',
              borderRadius: '10px',
              background: 'white',
              border: '1px solid black',
              zIndex: '9999999999'
            }}>
                <form
                onSubmit={this.uploadImage}>
                <div className="form-group text-center">
                    <h2 className='text-center text-primary'>Upload Image</h2>
                    <input 
                    type='file' 
                    className='form-control-file'
                    onChange={this.changeFile} 
                    />
                </div>
                {this.state.err?(
                    <p className="alert alert-danger text-center">
                        {this.state.err}
                    </p>
                ):null}
                  <button 
                  className='btn btn-primary mx-auto d-block w-50'
                  type='submit'>Upload</button>
                </form>
                <button
                id='close_id'
                onClick={this.props.uploadImage}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'transparent',
                    color: '#EEE',
                    border: 'none',
                    fontSize: '40px',
                    transition: 'all .4s ease-in-out'
                }}
                >
                    <i className="far fa-times-circle"></i>
                </button>
            </div>
            // </div>
            ):null}
        </React.Fragment>
    )
    
  }
}

export default UploadImage;
