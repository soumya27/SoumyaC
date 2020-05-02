import React from 'react';
import Navbar from "./components/Navbar";
import Contactme from "./components/Contactme";
import Projects from "./components/Projects";
import Aboutme from "./components/AboutMe";
import Experience from "./components/Experience";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Aboutme />
      <Experience/>
      <Projects />
      <Contactme/>
    </div>
  );
}

export default App;
