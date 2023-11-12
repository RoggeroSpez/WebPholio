import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/navBar';
import Home from './Components/home';
import Education from './Components/education';
import Projects from './Components/projects';
import Work from './Components/work';
import Refrences from './Components/refrences';



function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <body>
      <div className="content-container">
          <Routes>
            <Route path="/" element={<  Home />} />
            <Route path="/Education" element={  <Education/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Work" element={<Work/>} />
            <Route path="/Refrences" element={<Refrences/>} />
          </Routes>
        </div>
      </body>
    </div>
  );
}

export default App;
