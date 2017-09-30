import React, { Component } from "react";
import _ from "lodash";
import "./ProfileCard.css";
import avatarDefault from "./avatar.default.png";
class ProfileCard extends Component {
  render() {
    return (
      <div className="profile-card">
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
      </div>
    );
  }
}

export default ProfileCard;
