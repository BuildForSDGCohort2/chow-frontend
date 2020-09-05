import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Heading from "./Heading";


const SignUp = () => {
    return(
        <div className="row text-center">
            <Heading />
            <div className="col-sm-12">
                <ul className="connect">
                    <li>
                        <button className="facebook m-2" title="Connect with Facebook">
                            <span>Connect with Facebook</span>
                        </button>
                    </li>
                    <li>
                        <button className="google m-2" title="Connect with Google">
                            <span>Connect with Google</span>
                        </button>
                    </li>
                    <Link to="/email-signup">
                        <button className="email m-2" title="Connect with Email">
                            <span>Connect with Email</span>
                        </button>
                    </Link>
                </ul>
                <Link to="/">
                    <p>Go Back</p>
                </Link>
            </div>
            <div className="col-sm-12">
                <small className="text center">By connecting, you agree to our Terms of Use and Privacy Notice</small>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;