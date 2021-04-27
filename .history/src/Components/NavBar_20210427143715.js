import React from "react";
import avatar from "../img/avatar.jpg";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Photo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Make-Up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Video
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              About
            </NavLink>
          </li>
        </ul>
        <footer>@ 2021 JOD@MN</footer>
      </nav>
    </div>
  );
}

export default NavBar;
