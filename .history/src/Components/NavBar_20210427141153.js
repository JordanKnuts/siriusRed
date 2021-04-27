import React from 'react';
import avatar from '../img/avatar'

function NavBar(props) {
    return (
        <div className="NavBar">
            <div className="profiles">
                <img src={avatar} alt=""/>
            </div>
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item">

                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;