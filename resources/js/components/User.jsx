import React from 'react';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';

function User() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header"><h2>React Component in Laravel</h2></div>
                        <div className="card-body">I'm tiny React component in Laravel app!</div>
                    </div>
                </div>
            </div>
            <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        </ul>
        </div>
    );
}
export default User;
// DOM element
if (document.getElementById('user')) {
    ReactDOM.render(<User />, document.getElementById('user'));
}