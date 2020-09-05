import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import Footer from "./Footer";

const SignIn = () => {
    return (
        <div className="row text-center">
            <Heading />
            <div className="col-sm-12">
                <form>
                    <div>
                       <label htmlFor="email"></label>
                       <input type="email" name="email" className="email2 pl-5" placeholder="johndoe@example.com" /> 
                    </div>
                    <div>
                       <label htmlFor="password1"></label>
                       <input type="password" name="password1" className="pswd pl-5" placeholder="password" /> 
                    </div>
                    <button className="btn btn-primary">Sign In</button>
                    <Link to="/email-signup">
                        <p className="signin">Sign Up</p>
                    </Link>
                    <Link to="/email-signup">
                        <p>Go Back</p>
                    </Link>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default SignIn;
