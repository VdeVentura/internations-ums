import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import moment from "moment";
import "./UsersPage.css";

import { createUser } from "../../actions/index";
import UserForm from "../UserForm/UserForm";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      showModal: false
    };

    this.renderUsers = this.renderUsers.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.submit = this.submit.bind(this);
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

  showModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  submit(user) {
    const birthdate = moment(user.birthdate, "YY-MM-DD").unix();
    const groups = _.map(user.groups, group => {
      return group.value;
    });
    user.birthdate = birthdate;
    user.groups = groups;
    this.props.createUser(user);
    this.closeModal();
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1 className="title">List of Users</h1>
          <Button
            className="action"
            icon="fa-plus-circle"
            onClick={this.showModal}
          >
            Add
          </Button>
        </div>
        <div className="card-container">
          {this.renderUsers(this.state.filter)}
        </div>
        <Modal
          visible={this.state.showModal}
          hide={this.closeModal}
          header="New User"
        >
          <UserForm onSubmit={this.submit} />
        </Modal>
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
export default connect(mapStateToProps, { createUser })(UsersPage);
