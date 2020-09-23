import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="row">
            <Navbar bg="dark" expand="lg">
              <Navbar.Brand>
                <Link to="/" className="navbar-brand">choW</Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto text-center">
                <Nav.Link>
                   <Link to="/" className="homePg mx-5 active">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/signup" className="mealPlanner mx-2 px-3 py-1">Meal Planner</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/signup" className="orderFood mx-2 px-4 py-1">Order Food</Link>
                </Nav.Link>
              </Nav>
             </Navbar.Collapse>
            </Navbar>
        </div>
    );
} 
        

export default Header;
