import React from "react";

const PortfrolioContent=(props)=>{
    return(<>
        <div className="col-md-4 col-sm-6 col-11 mx-auto ">
                <div className="card portfolio-card  shadow">
                  <div className="overlay">
                    <img src={props.image} className="card-img-top" alt="ecomerce" />
                    <div className="overlay-content text-center d-flex flex-column justify-content-center">
                        <p className="mb-2 text-white">{props.title}</p>
                        <h4 className="extra-small-heading text-white">Technology Used</h4>
                        <p className="text-white">
                          {props.tech}
                        </p>
                      
                        
                    <a className="btn button text-white mx-auto d-block" href={props.link} target="_blank"
                rel="noreferrer">View Details</a>
                        
                    </div>

                  </div>
                 
                </div>
              </div>
    </>)
}

export default PortfrolioContent;