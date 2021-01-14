import React from "react";

const ContactContent=(props)=>{
    return(<>
             <div className="col-lg-3 col-md-6 col-sm-5 col-10 mx-auto">
              <div className="card contact-card text-center shadow mb-4" >
              <div className="card-body ">
                  <h4 className="card-title extra-small-heading"><i className={props.icon}></i></h4>
                  <h2 className="card-text medium-heading">
                   {props.head}
                </h2>
                <p className="contact-content-para">{props.info}</p> 
                 
                </div>
                </div>
                </div>


    </>)
}

export default ContactContent;