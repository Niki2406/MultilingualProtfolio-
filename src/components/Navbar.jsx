
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelector from './languageselector.jsx';

const Navbar = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation('navbar');

  return (
    <nav className={`fixed top-0 left-0 w-full flex justify-between items-center p-4 shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
      <div className="flex items-center justify-center flex-grow space-x-10">
        <Link to="/" className={`${darkMode ? 'text-white' : 'text-black'} text-lg`}>{t('home')}</Link>
        <Link to="/work" className={`${darkMode ? 'text-white' : 'text-black'} text-lg`}>{t('work')}</Link>
        <Link to="/info" className={`${darkMode ? 'text-white' : 'text-black'} text-lg`}>{t('myinfo')}</Link>
        <Link to="/contact" className={`${darkMode ? 'text-white' : 'text-black'} text-lg`}>{t('contact')}</Link>
      </div>
      <div className="flex items-center">
        <LanguageSelector />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`${darkMode ? 'bg-white text-black' : 'bg-black text-white'} p-2 rounded-full ml-4`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

