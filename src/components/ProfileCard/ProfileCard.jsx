import React, { Component } from "react";
import _ from "lodash";
import "./ProfileCard.css";
import avatarDefault from "./avatar.default.png";
class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.renderActions = this.renderActions.bind(this);
  }
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
      <article className="profile-card">
        <img
          src={this.props.avatar ? this.props.avatar : avatarDefault}
          alt=""
          className="avatar"
        />
        <h3 className="name">{this.props.name}</h3>
        <div className="description">
          {_.map(this.props.description, group => {
            return (
              <span key={group} className="badge">
                {_.capitalize(group)}
              </span>
            );
          })}
        </div>
        <hr />
        <div className="footer">{this.props.footer}</div>
        {this.renderActions()}
      </article>
    );
  }
}

export default ProfileCard;
