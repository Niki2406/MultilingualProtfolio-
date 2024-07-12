
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import profilepic from '../assets/profilepic.png';

const Header = ({ darkMode }) => {
  const { t } = useTranslation('home');

  return (
    <div className={`min-h-screen flex items-center ${darkMode ? 'bg-indigo-950 text-white' : 'bg-slate-200 text-gray-800'}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-left mb-8 md:mb-0 md:mr-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Hi, I am <span className="text-pink-500">{t('name')}</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              {t('description')}
            </p>
            <Link to="/contact" className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded-full mb-8 md:mb-12 inline-block">
              {t('HireMe')}
            </Link>
            <div className="flex items-center space-x-6 mt-8 md:mt-12">
              <a href="https://www.linkedin.com/in/niki-r2406/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                <FaLinkedin size={80} />
              </a>
              <a href="https://x.com/NikiRanga" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                <FaTwitter size={70} />
              </a>
              <a href="https://github.com/Niki2406" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                <FaGithub size={60} />
              </a>
            </div>
          </div>
          <div className={`flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-full ${darkMode ? 'bg-indigo-950' : 'bg-slate-200'} flex items-center justify-center`}>
            <img
              src={profilepic}
              alt="Profile"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
