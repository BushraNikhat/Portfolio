import React from "react";
import SkillContent from "./SkillContent";

const Skills = () => {
  return (
    <>
      <section className="skills" id="skills">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto d-block">
            <h1 className="text-center large-heading">Technical Skills</h1>
            <div className="row">
            
                <SkillContent icon="fab fa-html5 mr-3"
                   sub="HTML5"
                   width={{ width: '85%' }}
                   />
                   <SkillContent icon="fab fa-css3-alt mr-3"
                   sub="CSS3"
                   width={{ width: '80%' }}
                   />
                   <SkillContent icon="fab fa-js-square mr-3"
                   sub="JavaScript"
                   width={{ width: '65%' }}
                   />
                 
                <SkillContent icon="fab fa-bootstrap mr-3"
                   sub="Bootstrap"
                   width={{ width: '75%' }}
                   />
                   <SkillContent icon="fas fa-laptop-code mr-3"
                   sub="React JS"
                   width={{ width: '70%' }}
                   />
                   <SkillContent icon="fab fa-python mr-3"
                   sub="Python"
                   width={{ width: '65%' }}
                   />   
                  
                  
                </div>
                </div>
                </div>
                </div>

       
        
      </section>
    </>
  );
};

export default Skills;
