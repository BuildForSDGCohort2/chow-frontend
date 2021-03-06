import React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Footer from "./Footer";
import Heading from "./Heading";

const EmailSignUp = (props) => {

    const history = useHistory();
    const { register, handleSubmit, errors, getValues, formState : { isDirty, isSubmitting }} = useForm({
      mode: "onChange",
      });
    
    const onSubmit = async(data, e) => {
      e.preventDefault();
      // console.log("Form submitted", data);
      await axios
        //.post("http://localhost:4000/api/v1/user/signup", data, headers)
      .post("https://chow-kuic.herokuapp.com/api/v1/user/signup", data)
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        if(res.data.status === true ){
          history.push("/signin");
          // console.log(res.data.message)
        } else {
          // console.log("Error");
        }
      })
      .catch((error) => {
        //alert(error);
        console.log(error);
      });
    };

    return(
        <div className="row text-center">
            <div className="col-sm-12 signup">
                <Heading />
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <div>
                       <label htmlFor="username"></label>
                       <input
                         type="text"
                         name="username"
                         className="username pl-5"
                         placeholder="username"
                         ref={register({
                           required: "Username field is required",
                           maxLength: {
                             value: 20,
                             message: "Username should be maximum length of 20"
                           },
                           minLength: {
                             value: 4,
                             message: "Username should be minimum length of 4"
                           },
                           pattern: {
                             value: /^[A-Za-z]+$/i,
                             message: "Username should contain only uppercase or lower case letters"
                            },
                          })}
                         style={{ borderColor: errors.username && "red" }}
                         /> 
                       { errors.username && <p className="errors" >{errors.username.message}</p> }
                    </div>
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
                         name="password"
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
                       { errors.password && <p className="errors" >{errors.password.message}</p> }
                    </div>
                    <div>
                       <label htmlFor="password2"></label>
                       <input
                         type="password"
                         name="confirm_password"
                         className="pswd pl-5"
                         placeholder="confirm password"
                         ref={register({
                           required: "Confirm Password field is required",
                           validate: (value) => value === getValues().password || "Passwords donot match",
                          })}
                         style={{ borderColor: errors.confirm_password && "red" }}
                         />
                       { errors.confirm_password && <p className="errors" >{errors.confirm_password.message}</p> }
                    </div>
                    <button
                      className="btn btn-primary signBtn"
                      type="submit"
                      disabled={ !isDirty || isSubmitting }>
                        Register
                    </button>
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