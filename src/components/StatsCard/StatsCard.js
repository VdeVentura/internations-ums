import React, { Component } from "react";
import "./StatsCard.css";

class StatsCard extends Component {
  render() {
    return (
      <div className="stat-card">
        <img src={this.props.logo} alt="" className="logo" />
        <div className="info">
          <div className="title">{this.props.title}</div>
          <div className="data">{this.props.data} Users</div>
        </div>
      </div>
    );
  }
}

export default StatsCard;
