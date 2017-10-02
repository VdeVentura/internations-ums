import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "./firebase.js";
import _ from "lodash";
import { setGroups, setUsers } from "./actions";
import NavBar from "./components/NavBar/NavBar";
import DashboardPage from "./containers/DashboardPage/DashboardPage";
import UsersPage from "./containers/UsersPage/UsersPage";
import "./App.css";

class App extends Component {
  componentDidMount() {
    // Requesting groups
    const groupsRef = firebase.database().ref("groups");
    groupsRef.on("value", snapshot => {
      const groups = _.toArray(snapshot.val());
      this.props.setGroups(groups);
    });
    // Requesting Users
    const usersRef = firebase.database().ref("users");
    usersRef.on("value", snapshot => {
      const users = _.map(snapshot.val(), (user, key) => {
        return { ...user, key };
      });
      const sortedUsers = _.sortBy(users, ["createdAt"]);
      this.props.setUsers(sortedUsers);
    });
  }
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="content">
            <Route exact path="/" render={() => <DashboardPage />} />
            <Route path="/users" component={UsersPage} />
            {/* <Route path="/groups" component={GroupsPage} /> */}
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    groups: state.groups.array,
    users: state.users.array
  };
}
export default connect(mapStateToProps, { setGroups, setUsers })(App);
