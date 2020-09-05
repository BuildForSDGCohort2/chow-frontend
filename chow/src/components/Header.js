import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light  header">
                <Link to="/" className="navbar-brand">choW</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link px-5 mx-5 signin">Sign Up/Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );

} 
        

export default Header;
