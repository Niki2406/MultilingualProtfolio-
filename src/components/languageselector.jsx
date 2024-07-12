
import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const LanguageSelector = ({ darkMode }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="text-lg"
      >
        <FaGlobe size={24} className="text-pink-500" />
      </button>
      {dropdownOpen && (
        <div className={`absolute right-0 mt-2 bg-pink-500 rounded shadow-lg py-2`}>
          <button
            onClick={() => handleLanguageChange('en')}
            className={`block px-4 py-2 ${darkMode ? 'text-white' : 'text-black'} hover:bg-pink-600`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange('hi')}
            className={`block px-4 py-2 ${darkMode ? 'text-white' : 'text-black'} hover:bg-pink-600`}
          >
            Hindi
          </button>
          <button
            onClick={() => handleLanguageChange('ar')}
            className={`block px-4 py-2 ${darkMode ? 'text-white' : 'text-black'} hover:bg-pink-600`}
          >
            Arabic
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

