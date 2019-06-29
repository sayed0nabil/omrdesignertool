import React, { Component } from "react";
class Modal extends Component {
  state = {};
  render() {
    return (
      <div
        className=" none modal fade"
        id={this.props.id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div 
        className="modal-dialog modal-dialog-centered" role="document">
          <div 
          style={{minHeight: '440px'}}
          className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                {this.props.head}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{this.props.children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success btn-block text-center"
                onClick={this.props.handelClick}
              >
                ADD COMPONENT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
