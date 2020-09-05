import React from "react";
import Footer from "./Footer";


const SignUp = () => {
    return(
        <div className="row text-center">
            <div className="col-sm-12">
                <h1 className="heading">choW</h1>
            </div>
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
                    <li>
                        <button className="email m-2" title="Connect with Email">
                            <span>Connect with Email</span>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="col-sm-12">
                <small className="text center">By connecting, you agree to our Terms of Use and Privacy Notice</small>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;