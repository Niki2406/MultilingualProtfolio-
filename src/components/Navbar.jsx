
import React from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import LanguageSelector from './languageselector';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ darkMode, setDarkMode }) => {
  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 800,
      smooth: 'easeInOutQuart',
      offset: -50,
    });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full flex justify-between items-center p-4 ${darkMode ? 'bg-indigo-950' : 'bg-slate-200'} transition-colors duration-300 z-50`}>
      <div className="flex items-center">
        <Link to="/">
          <div className="text-pink-500 font-bold text-5xl ml-4 hover:text-pink-500 transition-colors duration-300">
            Niki
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center flex-grow space-x-10">
        <Link
          to="/"
          onClick={() => scrollToSection('header')}
          className={`${darkMode ? 'text-white' : 'text-black'} text-lg hover:text-pink-400 transition-colors duration-300 cursor-pointer`}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => scrollToSection('about')}
          className={`${darkMode ? 'text-white' : 'text-black'} text-lg hover:text-pink-400 transition-colors duration-300 cursor-pointer`}
        >
          About
        </Link>
        <Link
          to="/skills"
          onClick={() => scrollToSection('skills')}
          className={`${darkMode ? 'text-white' : 'text-black'} text-lg hover:text-pink-400 transition-colors duration-300 cursor-pointer`}
        >
          Skills
        </Link>
        <Link
          to="/work"
          onClick={() => scrollToSection('work')}
          className={`${darkMode ? 'text-white' : 'text-black'} text-lg hover:text-pink-400 transition-colors duration-300 cursor-pointer`}
        >
          Work
        </Link>
        <Link
          to="/contact"
          onClick={() => scrollToSection('contact')}
          className={`${darkMode ? 'text-white' : 'text-black'} text-lg hover:text-pink-600 transition-colors duration-300 cursor-pointer`}
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center">
        <LanguageSelector />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ml-4 flex items-center justify-center ${darkMode ? 'bg-indigo-950' : 'bg-sky-slate-200'}`}
        >
          <div className="border-4 border-pink-500 rounded-full p-1">
            {darkMode ? (
              <FiSun size={20} className="text-pink-500" />
            ) : (
              <FiMoon size={20} className="text-pink-500" />
            )}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
