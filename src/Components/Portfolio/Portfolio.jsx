import React from "react";
import Pdata from "./Pdata.jsx";
import PortfrolioContent from "./PortfolioContent.jsx";


const Portfrolio = () => {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto d-block">
              <h1 className="text-center large-heading">My Recent Projects</h1>
              <div className="row gy-5">

              
                {Pdata.map((val, index) => {
                  return <PortfrolioContent
                    key={index}
                    image={val.image}
                    title={val.title}
                    tech={val.tech}
                    link={val.link}
                  />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfrolio;
