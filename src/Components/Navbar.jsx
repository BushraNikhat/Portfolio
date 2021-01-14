import React from "react";
import logo from "../Images/portfoliologo.png"

const Navbar = () => {
  return (
    <>
    <div className="navbar-head container-fluid">
       <div className="row">
              <div className="col-10 mx-auto d-block">
            <nav className="navbar navbar-expand-lg navbar-light">
          

           
            <a className="navbar-brand" href="#header">
            <img src={logo} className="img-fluid" alt="logo"/>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse text-right" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#header">
                    Home 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                   Portfolio
                   </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                   Contact
                   </a>
                </li>
                 
              </ul>
            </div>
          
          
          </nav>
          </div>
          </div>
          </div>
      
    </>
  );
};

export default Navbar;
