import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Dashboard = () => {
  return (
      <div className="container-fluid text-center">
          <Header />
          <div className="row">
              <div className="col-sm-12">
                <h2>Dashboard</h2>
              </div>
          </div>
          <Footer />
      </div>
  );
}

export default Dashboard;