import React, { Component } from "react";
import "./Modal.css";
class Modal extends Component {
  render() {
    return (
      <div className={`modal-wrapper ${this.props.visible ? "visible" : ""}`}>
        <div
          className={`overlay ${this.props.visible ? "fade" : ""}`}
          onClick={this.props.hide}
        />
        <div className="modal">
          <div className="close" onClick={this.props.hide}>
            <i className="fa fa-times" aria-hidden="true" />
          </div>
          <div className="header">
            <h1>{this.props.header}</h1>
          </div>
          <div className="body">{this.props.children}</div>
          <div className="footer">{this.props.fotter}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
