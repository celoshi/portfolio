import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css'; // Importiere die globalen Stile
import Home from './Home';
import AboutMe from './AboutMe';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="navbar">
          <nav>
            <ul>
              <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Work</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About me</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
            </ul>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
