// Most of the code in this file as well as UsersPage could be refactored
// to make it more reusable and avoid repetition

import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import moment from "moment";
import "./GroupsPage.css";

import {
  createGroup,
  deleteGroup,
  editingGroup,
  editGroup
} from "../../actions/index";
import GroupForm from "../GroupForm/GroupForm";
import StatsCard from "../../components/StatsCard/StatsCard";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

class GroupsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.renderGroups = this.renderGroups.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.submit = this.submit.bind(this);
  }

  renderGroups() {
    if (!this.props.groups || !this.props.users) {
      return null;
    }

    return _.map(this.props.groups, (group, index) => {
      return (
        <StatsCard
          key={index}
          logo={group.image}
          title={`${_.capitalize(group.name)}`}
          data={_.reduce(
            this.props.users,
            (count, user) => {
              if (_.includes(user.groups, index)) {
                count++;
              }
              return count;
            },
            0
          )}
          description={group.description}
          actions
          delete={() => {
            this.props.deleteGroup(group.key);
          }}
          edit={() => {
            this.props.editingGroup(group);
            this.showModal();
          }}
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
  submit(group) {
    group.createdAt = group.createdAt ? group.createdAt : moment().unix();

    if (group.key) {
      this.props.editGroup(group);
    } else {
      this.props.createGroup(group);
    }
    this.closeModal();
  }
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="title">List of Groups</h1>
          <Button
            className="action"
            icon="fa-plus-circle"
            onClick={() => {
              this.props.editingGroup(null);
              this.showModal();
            }}
          >
            Add
          </Button>
        </div>
        <div className="card-container">{this.renderGroups()}</div>
        <Modal
          visible={this.state.showModal}
          hide={this.closeModal}
          header="New Group"
        >
          {this.state.showModal && <GroupForm onSubmit={this.submit} />}
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
export default connect(mapStateToProps, {
  createGroup,
  deleteGroup,
  editingGroup,
  editGroup
})(GroupsPage);
