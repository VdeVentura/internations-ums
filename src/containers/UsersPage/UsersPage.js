import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import "./UsersPage.css";

import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Button from "../../components/Button/Button";

class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
  }

  renderUsers() {
    if (!this.props.groups || !this.props.users) {
      return null;
    }
    const latestUsers = this.props.users;
    return _.map(latestUsers, user => {
      return (
        <ProfileCard
          key={user.username}
          avatar={user.avatar}
          name={`${_.capitalize(user.firstName)} ${_.capitalize(
            user.lastName
          )}`}
          description={_.map(user.groups, group => {
            return this.props.groups[group].name;
          })}
          footer={user.description}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1 className="title">List of Users</h1>
          <Button className="action" icon="fa-plus-circle">
            Add
          </Button>
        </div>
        <div className="card-container">
          {this.renderUsers(this.state.filter)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    groups: state.groups.array,
    users: state.users.array
  };
}
export default connect(mapStateToProps)(UsersPage);
