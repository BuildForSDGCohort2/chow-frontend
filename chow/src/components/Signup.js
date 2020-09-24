import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Footer from "./Footer";
import Heading from "./Heading";


const SignUp = () => {

    const responseFacebook = (response) => {
        console.log(response);
    }

    const componentClicked = () => {
        console.log( "Clicked!" )
    }

    return(
        <div className="row text-center">
            <div className="col-sm-12 signUp">
            <Heading />
             
                <ul className="connect">
                    <li>
                    <FacebookLogin 
                      appId="240858893885753"
                      autoLoad={true}
                      cookie={true}
                      version="8.0"
                      scope="public_profile,email"
                      redirectUri="/dashboard"
                      fields="name,email,picture"
                      onClick={componentClicked}
                      callback={responseFacebook}
                      
                      render={
                           renderProps => (
                               <button onClick={renderProps.onClick} className="facebook m-2" title="Connect with Facebook">Connect with Facebook</button>
                           )
                      }
                    />
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
                <div className="col-sm-12">
                  <small className="text center">By connecting, you agree to our Terms of Use and Privacy Notice</small>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;