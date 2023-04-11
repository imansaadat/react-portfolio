import React from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import { skillData,workData } from "./data/data";
const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills skillData={skillData} />
      <Work workData={workData} />
      <Contact />
    </>
  );
};

export default App;
