import React from "react";
import Footer from "./Footer";
import Heading from "./Heading";

const EmailSignUp = () => {
    return(
        <div className="row text-center">
            <Heading />
            <div className="col-sm-12">
                <form>
                    <div>
                       <label htmlFor="username"></label>
                       <input type="text" name="username"className="username" placeholder="John Doe" /> 
                    </div>
                    <div>
                       <label htmlFor="email"></label>
                       <input type="email" name="email" className="email2" placeholder="johndoe@example.com" /> 
                    </div>
                    <div>
                       <label htmlFor="password1"></label>
                       <input type="password" name="password1" className="pswd" placeholder="" /> 
                    </div>
                    <div>
                       <label htmlFor="password2"></label>
                       <input type="password" name="password2" className="pswd" placeholder="" /> 
                    </div>
                    <button className="btn btn-primary">Register</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default EmailSignUp;