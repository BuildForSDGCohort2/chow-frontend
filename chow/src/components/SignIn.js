import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Heading from "./Heading";
import Footer from "./Footer";

const SignIn = () => {
    const { register, handleSubmit, errors, formState: { isDirty, isSubmitting } } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        // console.log("Form Submitted", JSON.stringify(data));
    };

    return (
        <div className="row text-center">
            <div className="col-sm-12 signUp">
                <Heading />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                       <label htmlFor="email"></label>
                       <input
                         type="email"
                         name="email"
                         className="email2 pl-5"
                         placeholder="email"
                         ref={register({
                           required: "Email field is required",
                           pattern: {
                             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                             message: "Enter a valid e-mail address",
                           },
                          })}
                         style={{ borderColor: errors.email && "red" }}
                         />
                       { errors.email && <p className="errors" >{errors.email.message}</p> }  
                    </div>
                    <div>
                       <label htmlFor="password1"></label>
                       <input
                         type="password"
                         name="password1"
                         className="pswd pl-5"
                         placeholder="password (min 8)"
                         ref={register({
                           required: "Password field is required",
                           minLength: {
                             value: 8,
                             message: "Password must have at least 8 characters"
                           }
                         })}
                         style={{ borderColor: errors.password1 && "red" }}
                         />
                       { errors.password1 && <p className="errors" >{errors.password1.message}</p> } 
                    </div>
                    <button
                      className="btn btn-primary signBtn"
                      type="submit"
                      disabled={!isDirty || isSubmitting}>
                          Sign In
                    </button>
                    <Link to="/email-signup">
                        <p className="sign-in">Sign Up</p>
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
