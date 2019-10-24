import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Splash.css';

const Splash = () => {

    const [items, setItems] = useState('')
    return (
        <div className="wrapper wrap">
            <div className="jumbotron splash">
            <h1 className="display-4">User Management</h1>
            <p className="lead">This is a simple user management app where you can create, delete and list users.</p>
            <p>It uses node.js with express framework and mongodb with mongoose for schemas. On the front it users react with redux for state management.
                It's styled with regular css and bootstrap.
            </p>
           
            <Link className="btn btn-light btn-lg" to="/users" role="button">List Users</Link>
            </div>
        </div>
     )
}

 
export default Splash;