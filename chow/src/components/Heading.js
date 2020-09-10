import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <h1 className="heading">
                    <Link to="/" className="heading">choW</Link>
                </h1>
            </div>
        </div>
    );
};

export default Heading;