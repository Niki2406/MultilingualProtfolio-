import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-pink-500">
      <div className="container mx-auto flex flex-col items-center py-6">
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/niki-r2406/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-600"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://x.com/NikiRanga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-600"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://github.com/Niki2406"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-600"
          >
            <FaGithub size={30} />
          </a>
        </div>
        <p className="text-white text-lg">Made by Niki</p>
      </div>
    </div>
  );
};

export default Footer;
