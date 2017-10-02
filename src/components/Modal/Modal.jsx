import React, { Component } from "react";
import "./Modal.css";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.escListener = this.escListener.bind(this);
  }
  escListener(event) {
    if (event.keyCode === 27) {
      this.props.hide();
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.escListener, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escListener, false);
  }
  render() {
    return (
      <div
        onKeyDown={e => {
          if (e.keyCode === 27) {
            this.props.hide();
          }
        }}
        ref={modal => {
          this.focusDiv = modal;
        }}
        className={`modal-wrapper ${this.props.visible ? "visible" : ""}`}
      >
        <div
          className={`overlay ${this.props.visible ? "fade" : ""}`}
          onClick={this.props.hide}
        />
        <div className="modal">
          <button className="close" onClick={this.props.hide}>
            <i className="fa fa-times" aria-hidden="true" />
          </button>
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
