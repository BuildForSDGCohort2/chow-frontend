import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="container-fluid">
            <Header />
            <div className="row text-center notFound">
                <div className="col-sm-12 not">
                    <h2>404 - Page Not Found</h2>
                    <b className="py-5">It seems the page you are looking for doesn't exist.</b>
                    <div className="m-2">
                        <button className="add">
                            <Link to="/" className="add">Go Home</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;