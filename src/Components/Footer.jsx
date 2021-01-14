import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="footer "
        id="footer"
      >
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-10 mx-auto d-block  text-center ">
            <h3 className="small-heading text-white">Bushra Nikhat</h3>
            <p className="text-white ">
           
              I am Bushra Nikhat and this is my personal portfolio website
            </p>
            <div className=" mx-auto">
              <a
                href="https://www.linkedin.com/in/bushra-nikhat-009a35121"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
               
                <i className="fab fa-linkedin-in footer-icon"></i>
              </a>
              <a href="https://github.com/BushraNikhat" target="_blank"
                rel="noreferrer" className="text-white">
                <i className="fab fa-github footer-icon"></i>
              </a>

              <a href="#header" className="text-white shadow header-up-btn">
                <i className="fas fa-caret-square-up "></i>
              </a>
            </div>

            
          </div>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
