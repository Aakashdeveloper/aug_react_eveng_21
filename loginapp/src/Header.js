import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    console.log(props)
    return (
        <div>
           <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Developer Login</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="/"><span className="glyphicon glyphicon-log-in"></span> Log In</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;