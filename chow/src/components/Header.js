import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  
  const isLoggedIn = () => {
    let userData = sessionStorage.getItem("userData") || localStorage.getItem("userData");
    let loggedInUser = JSON.parse(userData);
    // console.log(loggedInUser.profileObj.imageUrl);
    return loggedInUser !== null;
  };
  const signOut = () => {
    sessionStorage.removeItem("userData");
    localStorage.removeItem("userData");
    return history.push("/");
  };
    return(
        <div className="row">
            <Navbar bg="dark" expand="lg">
              <Navbar.Brand>
                <Link to="/" className="navbar-brand">choW</Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto text-center">
                { isLoggedIn() ? (
                  <Nav>
                    <Nav.Link>
                      <Link
                        className="signOut mx-2 px-3 py-1"
                        to="/dashboard">
                          My Dashboard
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link
                        to="/"
                        className="signOut mx-2 px-3 py-1"
                        onClick={() => signOut()}
                      >Sign Out
                      </Link>
                    </Nav.Link>
                  </Nav>
                ) : (
                <Nav>
                  <Nav.Link>
                     <Link to="/" className="homePg mx-5 activeHome">Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/signup" className="mealPlanner mx-2 px-3 py-1">Meal Planner</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/signup" className="orderFood mx-2 px-4 py-1">Order Food</Link>
                  </Nav.Link>
                </Nav>
                ) }
              </Nav>
             </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
        

export default Header;
