import React from 'react';
import avatar from '../img/avatar.jpg'
import {NavLink} from 'react-router-dom';

function NavBar(props) {
    return (
        <div className="NavBar">
            <div className="profile">
                <img src={avatar} alt=""/>
            </div>
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink><NavLink to="/" exact activeClassName="active">
                            Make-Up
                        </NavLink><NavLink to="/" exact activeClassName="active">
                            Video
                        </NavLink><NavLink to="/" exact activeClassName="active">
                            Photo
                        </NavLink>
                        <NavLink to="/" exact activeClassName="active">
                            About
                        </NavLink>
                        <NavLink to="/" exact activeClassName="active">
                            Social
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <footer>
                @ 2021 JOD@MN
            </footer>
        </div>
    );
}

export default NavBar;