import React from "react";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact/Contact.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Footer from "./Components/Footer.jsx";
import Portfrolio from "./Components/Portfolio/Portfolio";





const App=()=> {
  return (
   <>
      <Banner/>
      <Navbar/>
      <About/>
      <Skills/>
      <Portfrolio/>
      <Contact/>
      <Footer/>
   </>
  );
}

export default App;
