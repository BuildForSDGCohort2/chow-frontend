import React, { useState } from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login/";
import TwitterLogin from "react-twitter-login";
import Footer from "./Footer";
import Heading from "./Heading";


const SignUp = () => {
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState(" ");

    /**Facebook */
    const responseFacebook = (response) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }
    const componentClicked = () => {
        console.log( "Clicked!" );
    };

    /**Google */
    const onSuccess = (response) => {
        console.log("[Login Success] currentuser", response.profileObj);
    };
    const onFailure = (response) => {
        console.log("[Login failed] response:", response);
    };

    const authHandler = (err, data) => {
        console.log(err, data);
    };

    return(
        <div className="row text-center">
            <div className="col-sm-12 signUp">
            <Heading />
                <ul className="connect">
                    <li>
                        {!login &&
                    <FacebookLogin 
                      appId="240858893885753"
                      cookie={true}
                      version="8.0"
                      status={true}
                      scope="public_profile,email"
                      redirectUri="https://localhost:3000/dashboard"
                      fields="name,email,picture"
                      onClick={componentClicked}
                      callback={responseFacebook}
                      render={
                           renderProps => (
                               <button onClick={renderProps.onClick} className="facebook m-2" title="Connect with Facebook">Connect with Facebook</button>
                           )
                      }
                    />}
                    { login && 
                      <div>
                          <div className="pix">
                            <img  src={picture} className="img-fluid picture" alt={data.name} />
                          </div>
                        <h3>{data.name}</h3>
                        <p>{data.email}</p>
                      </div>
                    }
                    </li>
                    <li>
                      <GoogleLogin 
                        clientId="619240812460-jbjbp3rditc3e3kp54fgqb3l2nrnd2u3.apps.googleusercontent.com"
                        buttonText="Connect with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={ "single_host_origin" }
                        isSignedIn={true}
                        redirectUri="https://localhost:3000/dashbaord"
                        render={
                            renderProps => (
                                <button  onClick={renderProps.onClick} className="google m-2">Connect with Google</button>
                            )
                        }
                      />
                    </li>
                    <li>
                        <TwitterLogin 
                          authCallback={authHandler}
                          buttonTheme="dark"
                          consumerkey="PyHxgJuyORZqhDiuKAne8LcxT"
                          consumerSecret="RBqOgWJfflgk2GLGmKtHFnHituqvf3vROPfAqzOPpfKficIrI9"
                          redirectUri="/dashboard"
                          children={
                              <button  className="twitter m-2">Connect with Twitter</button>
                          }
                        />
                    </li>
                    <Link to="/email-signup">
                      <button className="email m-2" title="Connect with Email">
                          <span>Connect with Email</span>
                      </button>
                    </Link>
                </ul>
                <Link to="/" className="my-5">
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