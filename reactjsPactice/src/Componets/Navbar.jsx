import React from "react";
import PropTypes from "prop-types";
import { NavLink, Outlet } from "react-router-dom";
import '../App.css'
let name = "Rahul";

export default function Navbar(props) {
  return (
    <div>
      <div className="App">
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
          <div className="container-fluid">
            <NavLink  className="nav-link ">
              {name}
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                 <NavLink  className="nav-link " to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  className="nav-link " to="/about">
                    {props.aboutText}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  className="nav-link " to="/textForm">TextForm</NavLink>             
                  
                </li>
                <li className="nav-item">
                  <NavLink  className="nav-link " to="/alert">Alert</NavLink>             
                  
                </li>
                <li className="nav-item">
                  <NavLink  className="nav-link " to="/State">State</NavLink>             
                  
                </li>
                <li className="nav-item">
                  <NavLink  className="nav-link " to="/ClassCom">ClassCom</NavLink>             
                  
                </li>
              </ul>
              <div className={`form-check form-switch text-${props.mode ==='light' ? 'dark':'light'}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  Enable dark mode
                </label>
              </div>

            </div>
          </div>
        </nav>
      </div>
      <Outlet/>
    </div>
    
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "set title here",
  aboutText: "About text here",
};
