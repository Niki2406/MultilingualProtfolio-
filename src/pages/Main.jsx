
import React from 'react';
import { useTranslation } from 'react-i18next';
import Contact from '../pages/Contact';
import Work from '../pages/Work';
import Info from '../pages/Info';
import Skills from '../pages/Skills';
import Header from '../pages/Header';
import Footer from './Footer';
const Main = ({ darkMode }) => {
  return (
    <div>
      
      <div id="header" >
          <Header darkMode={darkMode} />
        </div>
      
        <div id="info" >
          <Info darkMode={darkMode} />
        </div>
        <div id="skills" >
          <Skills darkMode={darkMode} />
        </div>
        <div id="work" >
          <Work darkMode={darkMode} />
        </div>
        <div id="contact" >
          <Contact darkMode={darkMode} />
        
      </div>
      <div id="footer" >
          <Footer darkMode={darkMode} />
        
      </div>
    </div>
  );
};

export default Main;
