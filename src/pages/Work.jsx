
// import React from 'react';
// import project1 from '../assets/project1.png';
// import project2 from '../assets/project2.png';
// import project3 from '../assets/project1.png';
// import project4 from '../assets/project2.png';

// const Work = ({ darkMode }) => {
//   const projects = [
//     {
//       name: "Food App",
//       description: "This is a brief description of Project 1.",
//       imageUrl: project1,
//       githubLink: "https://github.com/yourusername/project1",
//     },
//     {
//       name: "Project Name 2",
//       description: "This is a brief description of Project 2.",
//       imageUrl: project2,
//       githubLink: "https://github.com/yourusername/project2",
//     },
//     {
//       name: "Project Name 3",
//       description: "This is a brief description of Project 3.",
//       imageUrl: project3,
//       githubLink: "https://github.com/yourusername/project3",
//     },
//     {
//       name: "Project Name 4",
//       description: "This is a brief description of Project 4.",
//       imageUrl: project4,
//       githubLink: "https://github.com/yourusername/project4",
//     },
//   ];

//   return (
//     <div className={`min-h-screen ${darkMode ? 'bg-indigo-950 text-white' : 'bg-slate-200 text-black'}`}>
//       <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
//         <h2 className="text-5xl font-bold  text-center text-pink-500 mb-8">Projects</h2>
//         {projects.map((project, index) => (
//           <div key={index} className={`flex flex-col md:flex-row items-center p-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
//             <div className={`w-full md:w-1/2 mb-4`}>
//               <img
//                 src={project.imageUrl}
//                 alt={`${project.name} screenshot`}
//                 className="max-w-full h-auto  rounded-lg border-4 border-pink-500 mb-4 transform transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//             <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
//               <h2 className="text-2xl font-bold">{project.name}</h2>
//               <p className="mt-4">{project.description}</p>
//               <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 py-2 px-6 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-300">
//                 View it here
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project1.png';
import project4 from '../assets/project2.png';

const Work = ({ darkMode }) => {
  const projects = [
    {
      name: "Food App",
      description: "This is a brief description of Project 1.",
      imageUrl: project1,
      githubLink: "https://github.com/yourusername/project1",
    },
    {
      name: "Project Name 2",
      description: "This is a brief description of Project 2.",
      imageUrl: project2,
      githubLink: "https://github.com/yourusername/project2",
    },
    {
      name: "Project Name 3",
      description: "This is a brief description of Project 3.",
      imageUrl: project3,
      githubLink: "https://github.com/yourusername/project3",
    },
    {
      name: "Project Name 4",
      description: "This is a brief description of Project 4.",
      imageUrl: project4,
      githubLink: "https://github.com/yourusername/project4",
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-indigo-950 text-white' : 'bg-slate-200 text-black'}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
        <h2 className="text-5xl font-bold text-center text-pink-500 mb-8">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center p-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className={`w-full md:w-1/2 mb-4`}>
              <img
                src={project.imageUrl}
                alt={`${project.name} screenshot`}
                className="max-w-full h-auto rounded-lg border-4 border-pink-500 mb-4 transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
              <h2 className="text-7xl font-bold">{project.name}</h2> {/* Increased font size */}
              <p className="mt-4 text-xl">{project.description}</p> {/* Increased font size */}
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 py-2 px-6 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-300">
                View it here
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

// export default Work;
