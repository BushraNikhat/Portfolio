import React from "react";

const Skills = (props) => {
  return <>
  <div className="col-md-6 col-12 mx-auto d-block">
        <div className="card shadow  skill-card mb-4">
         <div className="card-body">
         
                      <h4 className="card-title extra-small-heading">
                        <i className={props.icon}> </i>{props.sub}
                      </h4>
                      <div className="progress">
                        <div
                          className="progress-bar  progress-bar-striped bg-danger"
                          role="progressbar"
                          style={props.width}
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    </div>
                    </div>
                  
   </>;
};

export default Skills;
