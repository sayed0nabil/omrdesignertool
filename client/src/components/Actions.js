import React, { Component } from 'react';
class Actions extends Component {
  render() {
    return (
        <nav
        style={{
          width: '100%',
          color:'white',
          background:'#2E94B9'
        }}
        className="navbar-expand-lg action-a">
        <div className="collapse papernavactions navbar-collapse" id="navbarSupportedContent">
            <div 
            className="navbar-nav">
            <span 
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            className='text-white pl-4'>Just Drag &amp; Drop Component Item</span>
            <button
            draggable
            onDragStart={e =>
            e.dataTransfer.setData("text/plain", "componentId")
            }
            onDragEnd={e => console.log("drag end")}
            className="relative pr-2 pl-2 dragbtn"
          >
            <i className="fa fa-bullseye"></i>
          </button>
          <button
            className="btn d-inline-block"
            onClick = {this.props.uploadImage}
          >
            <i className='fa fa-upload'></i>
            Upload Image
            </button>
            <button
            className="btn d-inline-block"
            onClick = {this.props.saveChanges}
          >
            <i className='fa fa-thumbs-up'></i>
            Save Changes
          </button>
          <button
            className="btn d-inline-block screenshot"
            onClick = {this.props.takeScreenShot}
          >
            <i className="fa fa-camera"></i>
            Take Screen Shot
          </button>
          <a
            href='/'
            className="btn d-inline-block"
            onClick = {this.props.createJsonFile}
            download = {`${this.props.filename}.txt`}
          >
            <i className='fa fa-download'></i>
            Download Json File
          </a>
          <button
            className="btn d-inline-block"
            onClick = {this.props.delete}
          >
            <i className='fa fa-trash'></i>
            Delete Page
          </button>
            <div className="custom-control custom-switch modestyle">
                <input onClick={this.props.changeCorrectionMode} type="checkbox" className="custom-control-input" id="customSwitches"/>
                <label className="custom-control-label" htmlFor="customSwitches">Correction Mode</label>
            </div>
            <div className='' id='correctionMode'></div>
            </div>
            </div>
        </nav>
    )
  }
}
export default Actions;
