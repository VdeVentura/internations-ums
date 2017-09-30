import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import StatsCard from "../../components/StatsCard/StatsCard";

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.renderGroups = this.renderGroups.bind(this);
  }

  renderGroups() {
    if (!this.props.groups || !this.props.users) {
      return null;
    } else {
      return _.map(this.props.groups, (group, index) => {
        // getting qty of users that are in this group
        const qty = _.reduce(
          this.props.users,
          (amount, user) => {
            if (user.groups.includes(index)) {
              return amount + 1;
            } else {
              return amount;
            }
          },
          0
        );

        return (
          <StatsCard
            key={group.name}
            data={qty}
            title={group.name}
            logo={group.image}
          />
        );
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <hr />
        <h2>Groups Stats</h2>
        <div className="card-container">{this.renderGroups()}</div>
        #of users per group
        <br />
        #maybe a graphic ?
        <hr />
        <h2>Recent Users</h2>
        #Latest 3 users in the platform
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
export default connect(mapStateToProps)(DashboardPage);
