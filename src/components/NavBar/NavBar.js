import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <img src={logo} alt="" className="logo" />
        <div className="brand">Users Management System</div>
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
