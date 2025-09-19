import React from "react";
import Nav from "./Components/Nav";
import { Home } from "./Pages/Home";
import { Skills } from "./Pages/Skills";
import { Projects } from "./Pages/Projects";
import Contact from "./Pages/Contact"; 

function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Contact /> 
      </main>
    </>
  );
}

export default App;
