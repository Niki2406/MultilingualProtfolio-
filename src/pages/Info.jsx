
// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const Info = ({ darkMode }) => {
//   const { t } = useTranslation('info');

//   const handleDownloadClick = () => {
//     const resumeUrl = '/Niki Resume FinalB1.pdf';
//     const anchorElement = document.createElement('a');
//     anchorElement.href = resumeUrl;
//     anchorElement.download = 'Niki Resume FinalB1.pdf';
//     anchorElement.target = '_blank';
//     document.body.appendChild(anchorElement);
//     anchorElement.click();
//     document.body.removeChild(anchorElement);
//   };

//   return (
//     <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-indigo-950 text-white' : 'bg-slate-200 text-black'}`}>
//       <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
//         {/* <h2 className={`text-5xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
//           {t('infotitle')}
//         </h2> */}
//         <h3 className="text-4xl font-bold text-pink-500 mb-4">Niki</h3>
//         <p className="text-lg mb-4">
//           Passionate about creating websites with beautiful interfaces. I have experience in web development with several projects completed.
//         </p>
//         <p className="text-lg mb-4">
//           Master's in Computer Application (2024) <br />
//           B.Sc. Physical Science with Computer (2020) <br />
//         </p>
//         <button
//           onClick={handleDownloadClick}
//           className={`bg-pink-500 hover:bg-pink-600  text-white py-2 px-4 rounded-full mb-16 ${darkMode ? 'bg-gray-900' : 'bg-pink-500'} transition-colors duration-300`}
//         >
//           Download CV
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Info;
import React from 'react';
import { useTranslation } from 'react-i18next';

const Info = ({ darkMode }) => {
  const { t } = useTranslation('info');

  const handleDownloadClick = () => {
    const resumeUrl = '/Niki Resume FinalB1.pdf';
    const anchorElement = document.createElement('a');
    anchorElement.href = resumeUrl;
    anchorElement.download = 'Niki Resume FinalB1.pdf';
    anchorElement.target = '_blank';
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  };

  return (
    <div className={`flex items-center justify-center ${darkMode ? 'bg-indigo-950 text-white' : 'bg-slate-200 text-black'} py-12`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h3 className="text-5xl font-bold text-pink-500 mb-9  text-center">About</h3>
        <p className="text-xl mb-4 text-center">
          Passionate about creating websites with beautiful interfaces. I have experience in web development with several projects completed.
        </p>
        <p className="text-xl mb-9 text-center">
          Master's in Computer Application (2024) <br />
          B.Sc. Physical Science with Computer (2020) <br />
        </p>
        <div className="text-center">
          <button
            onClick={handleDownloadClick}
            className={`bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full mb-16 transition-colors duration-300`}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
