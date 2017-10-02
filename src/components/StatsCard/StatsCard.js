import React, { Component } from "react";
import "./StatsCard.css";

class StatsCard extends Component {
  renderActions() {
    if (this.props.actions) {
      return (
        <div className="actions-holder">
          {this.props.delete && (
            <div className="action delete" onClick={this.props.delete}>
              <i className="fa fa-minus" aria-hidden="true" />
            </div>
          )}
          {this.props.edit && (
            <div className="action edit" onClick={this.props.edit}>
              <i className="fa fa-pencil" aria-hidden="true" />
            </div>
          )}
        </div>
      );
    }
  }
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
        {this.renderActions()}
      </article>
    );
  }
}

export default StatsCard;
