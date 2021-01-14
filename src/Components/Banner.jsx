import React from "react";
// import Header from "../Images/banner.jpg";



const Banner=()=> {
  return (
   <>
       
    
            <div className="header" id="header">
                    <div className="container-fluid" >
                            <div className="row">
                                <div className="col-10 mx-auto d-block d-flex flex-column justify-content-center header-content-box">
                                       <h3 className="small-heading">Hello!</h3>
                                       <h1 className="large-heading">I am Bushra Nikhat,</h1>
                                       <h3 className="small-heading">frontend developer .</h3>
                                       <p className="text-white">A web development enthusiast, having all the key skill that makes me front end developer.</p>
                                       <button className="btn d-flex flex-column align-items-center button "><a href="#contact" className="">Contact Me</a></button>
                                       
                                </div>
                           </div>
                    </div>
            </div> 
    
   </>
  );
}

export default Banner;