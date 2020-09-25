import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login/";
import Footer from "./Footer";
import Heading from "./Heading";


const SignUp = () => {

    const responseFacebook = (response) => {
        console.log(response);
    }

    const componentClicked = () => {
        console.log( "Clicked!" );
    };

    const onSuccess = (response) => {
        console.log("[Login Success] currentuser", response.profileObj);
    };

    const onFailure = (response) => {
        console.log("[Login failed] response:", response);
    };

    return(
        <div className="row text-center">
            <div className="col-sm-12 signUp">
            <Heading />
                <ul className="connect">
                    <li>
                    <FacebookLogin 
                      appId="240858893885753"
                      autoLoad={false}
                      cookie={true}
                      version="8.0"
                      status={true}
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
                      <GoogleLogin 
                        clientId="619240812460-jbjbp3rditc3e3kp54fgqb3l2nrnd2u3.apps.googleusercontent.com"
                        buttonText="Connect with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={ "single_host_origin" }
                        isSignedIn={true}
                        redirectUri="/dashboard"
                        render={
                            renderProps => (
                                <button  onClick={renderProps.onClick} className="google m-2">Connect with Google</button>
                            )
                        }
                      />
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