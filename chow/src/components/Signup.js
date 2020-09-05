import React from "react";
import Footer from "./Footer";


const SignUp = () => {
    return(
        <div className="row text-center">
            <div className="col-sm-12">
                <h1 className="pl-4 pb-3">choW</h1>
            </div>
            <div className="col-sm-12">
                <ul className="connect">
                    <li>
                        <button className="facebook m-2">
                            <span>Connect with Facebook</span>
                        </button>
                    </li>
                    <li>
                        <button className="google m-2">
                            <span>Connect with Google</span>
                        </button>
                    </li>
                    <li>
                        <button className="email m-2">
                            <span>Connect with Email</span>
                        </button>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;