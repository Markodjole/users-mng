import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '../actButton/Button';
import './Menu.css';

const Menu = () => {


    return ( 
        <React.Fragment>
            <div className="title"><h3>User Management App</h3></div>
            <div className="menu">
              <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              </ul>
            </div>
        </React.Fragment>
     );
}
 
export default Menu;