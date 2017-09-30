import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.renderIcon = this.renderIcon.bind(this);
  }

  renderIcon() {
    if (this.props.icon) {
      return <i class={`icon fa ${this.props.icon}`} aria-hidden="true" />;
    }
    return null;
  }

  render() {
    return (
      <button className={`button ${this.props.className}`}>
        {this.props.children}
        {this.renderIcon()}
      </button>
    );
  }
}

export default Button;
