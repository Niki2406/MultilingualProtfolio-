
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Work from './pages/Work';
import Info from './pages/Info';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="App">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Main darkMode={darkMode} />} />
           <Route path="/work" element={<Work darkMode={darkMode} />} />
          <Route path="/about" element={<Info darkMode={darkMode} />} />
          <Route path="/skills" element={<Skills darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
