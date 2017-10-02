import React, { Component } from "react";
import "./GraphCard.css";

class GraphCard extends Component {
  render() {
    return (
      <article className="graph-card" style={this.props.style}>
        <div className="header">{this.props.header}</div>
        <div className="body">{this.props.children}</div>
        <div className="footer" />
      </article>
    );
  }
}

export default GraphCard;
