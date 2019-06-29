import React, { Component } from 'react';
import './creationfield.css';
export default class CreationField extends Component {
  render() {
    const classname = this.props.valid?'':'none';
    return (
      <div className={classname}>
        <button
            draggable
            onDragStart={e =>
            e.dataTransfer.setData("text/plain", "qusetionBLock")
            }
            onDragEnd={e => console.log("drag end")}
            className="d-block btn d-inline-block w-50 btn-primary mx-auto mt-3 relative"
          >
            Question&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='circle'></span>Block
          </button>
          <button
            onDragStart={e =>
              e.dataTransfer.setData("text/plain", "contentBlock")
            }
            draggable
            className="d-block btn d-inline-block w-50 btn-primary mx-auto mt-3"
          >
            Content Block
          </button>
          <button
            onDragStart={e => e.dataTransfer.setData("text/plain", "seatNum")}
            draggable
            className="d-block btn d-inline-block w-50 btn-primary mx-auto mt-3"
          >
            Seat Num
          </button>
          <button
            draggable
            onDragStart={e =>
            e.dataTransfer.setData("text/plain", "componentId")
            }
            onDragEnd={e => console.log("drag end")}
            className="d-block btn d-inline-block w-50 btn-primary mx-auto mt-3 relative"
          >
            Comp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='circle'></span>onent
          </button>
          <button
            className="d-block btn d-inline-block w-50 btn-success mx-auto mt-3"
            onClick = {this.props.saveChanges}
          >
            Save Changes
          </button>
          <button
            className="d-block btn d-inline-block w-50 btn-warning mx-auto mt-3"
            onClick = {this.props.takeScreenShot}
          >
            Take Screen Shot
          </button>
          <a
            className="d-block btn d-inline-block w-50 btn-info mx-auto mt-3"
            onClick = {this.props.createJsonFile}
            href=''
            download = {`${this.props.filename}.txt`}
          >
            Download Json File
          </a>
          <button
            className="d-block btn d-inline-block w-50 btn-danger mx-auto mt-3"
            onClick = {this.props.delete}
          >
            Delete Page
          </button>
      </div>
    )
  }
}
