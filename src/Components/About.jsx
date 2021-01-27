import React from "react";
import Self from "../Images/self.jpg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container-fluid ">
          <div className="row about-row">
            <div className="col-10 mx-auto d-block">
            
              <div className="row">
                <div className="col-lg-5  col-md-4  d-flex align-items-center justify-content-center about-left-part order-md-1 order-2 ">
                
                  <div className="img-col mb-4 ">
                  <img
                    src={Self}
                    alt="self-pic"
                    className="img-fluid self-img"
                  />
                  
                 </div>
                </div>
                <div className="col-lg-7 col-md-8  mx-auto about-right-part">
                <div className="personal-info d-flex flex-column align-items-center">
                <h1 className="large-heading text-center about-head">
                    About <span>Me</span>
                  </h1>
                  <p className="text-center">
                 Innovative front end developer passionate about building and maintaining responsive websites, keeping user experience in mind. Proficient in HTML, CSS, JavaScript plus modern libraries and frameworks.
                  </p>
                  </div>
                  <div className="personal-detail">
                    <h4 className="extra-small-heading">
                      Name<span>: Bushra Nikhat</span>
                    </h4>
                    <h4 className="extra-small-heading">
                      Age<span>: 27</span>
                    </h4>
                    <h4 className="extra-small-heading">
                      Address<span>: Ranchi,Jharkhand</span>
                    </h4>
                    <h4 className="extra-small-heading">
                      Phone Number<span>: +918709725708</span>
                    </h4>
                    <h4 className="extra-small-heading">
                      Email<span>: bushranik6@gmail.com</span>
                    </h4>
                  </div>
                  <button className="btn  button mx-auto d-block"><a href="https://drive.google.com/uc?export=download&id=16WBXBWheBBATy1nKYSFJfOZyTlqTUohr" className="">Download CV</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
