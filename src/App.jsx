import React from "react";
import Nav from "./Components/Nav";
import { Home } from "./Pages/Home";
import  Skills  from "./Pages/Skills";
import  Toolbox  from "./Pages/Toolbox";
import { Projects } from "./Pages/Projects";
import Contact from "./Pages/Contact"; 

function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <Skills />
        <Toolbox />
        <Projects />
        <Contact /> 
      </main>
    </>
  );
}

export default App;