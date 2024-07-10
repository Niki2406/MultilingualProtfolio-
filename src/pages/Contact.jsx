
// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const Contact = ({ darkMode }) => {
//   const { t } = useTranslation('contact');

//   return (
//     <div className={`h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      
//           <h1 className={`font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl ${darkMode ? 'text-white' : 'text-black'}`}>
//             {t('contact')}
//           </h1>
        
      
//     </div>
//   );
// };

// export default Contact;
import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = ({ darkMode }) => {
  const { t } = useTranslation('contact');

  return (
    <div className={`h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start w-full md:w-3/4 lg:w-1/2">
        <div className="md:mr-8 mb-4 md:mb-0">
          <h1 className={`font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl ${darkMode ? 'text-white' : 'text-black'}`}>
            {t('contacttitle')}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
