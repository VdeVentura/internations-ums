import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

import StatsCard from "../../components/StatsCard/StatsCard";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import GraphCard from "../../components/GraphCard/GraphCard";

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.renderGroups = this.renderGroups.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
    this.renderGenderGraph = this.renderGenderGraph.bind(this);
  }

  renderUsers() {
    if (!this.props.groups || !this.props.users) {
      return null;
    }
    const latestUsers = this.props.users.slice(this.props.users.length - 3);
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

  renderAgeGraph() {
    if (!this.props.groups || !this.props.users) {
      return null;
    }

    const data = _.map(this.props.groups, (group, groupIndex) => {
      return _.reduce(
        this.props.users,
        (count, user) => {
          if (user.groups.includes(groupIndex)) {
            count.qty++;
          }
          return count;
        },
        {
          name: `${_.capitalize(group.name)}`,
          qty: 0,
          fullMark: this.props.users.length
        }
      );
    });

    return (
      <ResponsiveContainer width="100%" aspect={1.7}>
        <RadarChart outerRadius={80} data={data}>
          <Radar
            dataKey="qty"
            stroke="#8884d8"
            fill="#7b1fa2"
            fillOpacity={0.6}
          />
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
        </RadarChart>
      </ResponsiveContainer>
    );
  }

  renderGenderGraph() {
    if (!this.props.groups || !this.props.users) {
      return null;
    }

    const data = _.map(this.props.groups, (group, groupIndex) => {
      return _.reduce(
        this.props.users,
        (count, user) => {
          if (user.groups.includes(groupIndex)) {
            if (user.gender === "girl") {
              count.Girls++;
              return count;
            }
            count.Boys++;
          }
          return count;
        },
        { name: `${_.capitalize(group.name)}`, Girls: 0, Boys: 0 }
      );
    });

    return (
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Boys" fill="#7b1fa2" />
          <Bar dataKey="Girls" fill="#ff4081" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  renderGroups() {
    if (!this.props.groups || !this.props.users) {
      return null;
    }
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

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <hr />
        <h2>Groups Stats</h2>
        {/* Some stats about the groups, maybe some cool graphs */}
        <div className="card-container">
          <GraphCard header="Gender by Group">
            {this.renderGenderGraph()}
          </GraphCard>
          <GraphCard>{this.renderAgeGraph()}</GraphCard>
        </div>
        <div className="card-container">{this.renderGroups()}</div>
        <br />
        <hr />
        <h2>Recent Users</h2>
        {/* maybe the 3 latest users? */}
        <div className="card-container">{this.renderUsers()}</div>
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
