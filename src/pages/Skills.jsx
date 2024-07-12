// import React from 'react';

// const Skills = ({ darkMode }) => {
//   return (
//     <div className={`${darkMode ? 'bg-indigo-950 text-white' : 'bg-slate-200 text-gray-800'} p-4 md:p-8 lg:p-12`}>
//       <div className="container mx-auto px-4 md:px-0 lg:px-20">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
//           <div className={`relative rounded-lg text-center transform transition-transform hover:scale-105 border-8 border-pink-500 ${darkMode ? 'bg-blue-950' : 'bg-slate-300'} transition-colors duration-300`} style={{ width: '300px', height: '300px' }}>
//             <div className="flex flex-col justify-center h-full">
              
//               <h4 className="text-3xl font-bold mb-2">Front-End</h4>
//               <p className='text-xl'>HTML, CSS, TailwindCSS, JavaScript, ReactJS, C++, JSON, Redux Toolkit</p>
//             </div>
//           </div>
//           <div className={`relative rounded-lg text-center transform transition-transform hover:scale-105 border-8 border-pink-500 ${darkMode ? 'bg-blue-950' : 'bg-slate-300'} transition-colors duration-300`} style={{ width: '300px', height: '300px' }}>
//             <div className="flex flex-col justify-center h-full">
              
//               <h4 className="text-3xl font-bold mb-2">Tools</h4>
//               <p className='text-xl'>Visual Studio Code, GitHub, Git, Postman</p>
//             </div>
//           </div>
//           <div className={`relative rounded-lg text-center transform transition-transform hover:scale-105 border-8 border-pink-500 ${darkMode ? 'bg-blue-950' : 'bg-slate-300'} transition-colors duration-300`} style={{ width: '300px', height: '300px' }}>
//             <div className="flex flex-col justify-center h-full">
              
//               <h4 className="text-3xl font-bold mb-2">Back-end</h4>
//               <p className='text-xl'>Nodejs, MongoDB</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
import React from 'react';

const Skills = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-indigo-950 text-white' : 'bg-slate-200 text-gray-800'} p-4 md:p-8 lg:p-12`}>
      <div className="container mx-auto px-4 md:px-0 lg:px-20">
        <h2 className="text-5xl font-bold text-center text-pink-500 mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <div className={`relative rounded-lg text-center transform transition-transform hover:scale-105 border-8 border-pink-500 ${darkMode ? 'bg-blue-950' : 'bg-slate-300'} transition-colors duration-300`} style={{ width: '300px', height: '300px' }}>
            <div className="flex flex-col justify-center h-full">
              <h4 className="text-3xl font-bold mb-2">Front-End</h4>
              <p className='text-xl'>HTML, CSS, TailwindCSS, JavaScript, ReactJS, C++, JSON, Redux Toolkit</p>
            </div>
          </div>
          <div className={`relative rounded-lg text-center transform transition-transform hover:scale-105 border-8 border-pink-500 ${darkMode ? 'bg-blue-950' : 'bg-slate-300'} transition-colors duration-300`} style={{ width: '300px', height: '300px' }}>
            <div className="flex flex-col justify-center h-full">
              <h4 className="text-3xl font-bold mb-2">Tools</h4>
              <p className='text-xl'>Visual Studio Code, GitHub, Git, Postman</p>
            </div>
          </div>
          <div className={`relative rounded-lg text-center transform transition-transform hover:scale-105 border-8 border-pink-500 ${darkMode ? 'bg-blue-950' : 'bg-slate-300'} transition-colors duration-300`} style={{ width: '300px', height: '300px' }}>
            <div className="flex flex-col justify-center h-full">
              <h4 className="text-3xl font-bold mb-2">Back-end</h4>
              <p className='text-xl'>Nodejs, MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

