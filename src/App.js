import React from "react";
import {useState} from "react"
import Navbar from "./Header/Navbar/navbar"
import Home from "./Components/Home"
import AboutMe from "./Components/Aboutme"
import Skills from "./Components/Skills";
import Projects from "./Components/Project";
import ContactMe from "./Components/Contactme";
import Count from "./Components/Count"


function App() {
  const [submitval,setSubmitval]=useState("")
  return (
    <div>
          {/* <Navbar/>
          <Home/>
          <AboutMe/>
           <Skills/>
           <Projects/>
           <ContactMe/> */}
           <Count/>
    </div>
  );
}

export default App;

