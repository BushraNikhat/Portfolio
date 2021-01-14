import React from "react";
import ContactContent from "./ContactContent.jsx";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto d-block">
              <h1 className="text-center  large-heading">Contact Me</h1>
              <div className="row">
                <ContactContent
                  icon="fas fa-home fa-2x"
                  head="Location"
                  info="Ranchi,Jharkhand"
                />
                <ContactContent
                  icon="fas fa-phone fa-2x"
                  head="Phone"
                  info="+91 8709-725-708"
                />
                <ContactContent
                  icon="fas fa-envelope fa-2x"
                  head="Gmail"
                  info="bushranik@gmail.com"
                />
                <ContactContent
                  icon="fab fa-whatsapp-square fa-2x "
                  head="Whatsapp"
                  info="+91 8709-725-708"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Contact;
