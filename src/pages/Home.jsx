
import React from 'react';
import { useTranslation } from 'react-i18next';
import profilepic from '../assets/profilepic.png';

const Home = ({ darkMode }) => {
  const { t } = useTranslation('home');

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-700 text-white' : 'bg-fff9e6 text-gray-800'}`}>
      <div className="flex items-center justify-between w-full px-4">
        <div className="text-left ml-4">
          <h1 style={{ fontSize: '3rem', color: '#4B70F5' }}>
            {t('name')}
          </h1>
          <p style={{ fontSize: '1rem', color: '#3DC2EC' }}>
            {t('description')}
          </p>
        </div>
        <div className="ml-8 flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-full">
          <img
            src={profilepic}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
