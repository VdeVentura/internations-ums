import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <NavLink className="brand" exact to="/">
          <img src={logo} alt="" className="logo" />
          <div className="text">Users Management System</div>
        </NavLink>
        <NavLink className="item" exact to="/">
          Dashboard
        </NavLink>
        <NavLink className="item" to="/users">
          Users
        </NavLink>
        <NavLink className="item" to="/groups">
          Groups
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
