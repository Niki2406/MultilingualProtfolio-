import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Languageselector from './languageselector';

const Navbar = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className={`flex justify-between items-center p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
      <div className="flex items-center justify-center flex-grow space-x-10">
        <a href="#home" className={`${darkMode ? 'text-white' : 'text-black'} text-lg`}>{t('home')}</a>
        <a href="#work" className={`${darkMode ? 'text-white' : 'text-black'} text-lg`}>{t('work')}</a>
        <a href="#info" className={`${darkMode ? 'text-white' : 'text-black'} text-lg`}>{t('myinfo')}</a>
        <a href="#contact" className={`${darkMode ? 'text-white' : 'text-black'} text-lg`}>{t('contact')}</a>
      </div>

      <div className="flex items-center">
        <Languageselector />
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
