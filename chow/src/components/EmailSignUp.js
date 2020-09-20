import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Footer from "./Footer";
import Heading from "./Heading";

const EmailSignUp = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return(
        <div className="row text-center">
            <Heading />
            <div className="col-sm-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                       <label htmlFor="username"></label>
                       <input
                         type="text"
                         name="username"
                         className="username pl-5"
                         placeholder="John Doe"
                         ref={register({ required: true })}
                         /> 
                       { errors.username && <p className="errors" >Username field is required</p> }
                    </div>
                    <div>
                       <label htmlFor="email"></label>
                       <input
                         type="email"
                         name="email"
                         className="email2 pl-5"
                         placeholder="johndoe@example.com"
                         ref={register({ required: true })}
                         />
                       { errors.email && <p className="errors" >Email field is required</p> } 
                    </div>
                    <div>
                       <label htmlFor="password1"></label>
                       <input
                         type="password"
                         name="password1"
                         className="pswd pl-5"
                         placeholder="password (min 8)"
                         ref={register({ required: true })}
                         />
                       { errors.password1 && <p className="errors" >Password field is required</p> }
                    </div>
                    <div>
                       <label htmlFor="password2"></label>
                       <input
                         type="password"
                         name="password2"
                         className="pswd pl-5"
                         placeholder="confirm password"
                         ref={register({ required: true })}
                         />
                       { errors.password2 && <p>Password field is required</p> }
                    </div>
                    <button className="btn btn-primary" type="submit" >Register</button>
                    <Link to="/signin">
                        <p className="sign-in">Sign in</p>
                    </Link>
                    <Link to="/signup">
                        <p>Go Back</p>
                    </Link>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default EmailSignUp;