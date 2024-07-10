

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import Info  from './pages/Info';
import Contact from './pages/Contact.jsx';
import './i18n';

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
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className='comtent'>
      <Routes>
        <Route path='/' element={<Home darkMode={darkMode} />} />
        <Route path='/work' element={<Work darkMode={darkMode} />} />
         <Route path='/info' element={<Info darkMode={darkMode} />} />
        <Route path='/contact' element={<Contact darkMode={darkMode} />} /> 
      </Routes>
      </div>
    </Router>
  );
}

export default App;
