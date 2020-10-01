import React from 'react';
import { Link } from "react-router-dom";
import EdamamBadge from "../images/badge.png";


const Footer = () => {
    return (
    <div className="footer mt-4">
        <div className="row">
            <div className="col-sm-12">
                <ul className="terms">
                    <li className="m-3">
                        <Link to="/terms">Terms</Link>
                    </li>
                    <li className="m-3">
                        <Link to="/privacy">Privacy</Link>
                    </li>
                    <li className="copyright m-3">
                        &copy;2020 <span className="chow">choW</span>
                    </li>
                </ul>
                <div className="col-sm-12">
                    <a href="https://www.edamam.com" data-tip="Powered by Edamam" target="_blank" rel="noopener noreferrer">
                        <img alt="Powered by Edamam" src={ EdamamBadge } className="edamam" />
                    </a>
                </div>
                
            </div>
        </div>
    </div>
    );
};

export default Footer;
