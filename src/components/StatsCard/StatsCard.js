import React, { Component } from "react";
import "./StatsCard.css";

class StatsCard extends Component {
  render() {
    return (
      <article className="stat-card">
        <div className="header">
          <h1 className="title">{this.props.title}</h1>
        </div>
        <div className="body">
          <img src={this.props.logo} alt="" className="logo" />
          <div className="data">{this.props.data} Users</div>
        </div>
        {this.props.footer && (
          <div className="footer">
            <hr />
            {this.props.footer}
          </div>
        )}
      </article>
    );
  }
}

export default StatsCard;
