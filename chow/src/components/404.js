import React from "react";
import Header from "./Header";


const NotFound = () => {
    return (
        <div className="container-fluid">
            <Header />
            <div className="row text-center notFound">
                <div className="col-sm-12 not">
                    <h2>404 - Page Not Found</h2>
                    <b className="py-5">It seems the page you are looking for doesn't exist.</b>
                </div>
            </div>
        </div>
    );
}

export default NotFound;