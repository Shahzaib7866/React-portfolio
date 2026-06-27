// import React from 'react'
// import { easeOut, motion } from 'framer-motion'


// const Skills = () => {
//   return (
// <div className='flex flex-col px-18 w-full overflow-x-hidden'>

//     <motion.div 
//       whileInView={{x:[-100,0], opacity:[0,1]}}
//       transition={{duration: 0.8, ease: easeOut}}
//       className='mx-4 w-full max-w-6xl' // Responsive and properly margined
//     >

//     <h1 className='text-white text-3xl font-bold my-8'>S K I L L S</h1>

//        <div className='ml-76 border-t border-gray-700 mt-16 w-full max-w-4xl'></div>    

//     <div className='flex flex-wrap justify-center gap-6 bg-[#0A0F1B] rounded-lg p-6'>

// <div className='flex flex-col max-w-sm rounded-lg bg-[#151C2A] hover:bg-[#142647] border hover:border-[#60A5FA] p-10'>
//   <div className='mb-4 text-lg font-semibold text-[#60A5FA]'>
//     Frontend Developments
//   </div>

//    <div className='ml-76 border-t border-gray-700 mt-16 w-full max-w-4xl'></div>    

//   <div className='flex flex-col gap-2 text-sm text-gray-300'>
//     <div className='flex items-center gap-2'>
// <span class="h-2 w-2 rounded-full bg-blue-500"></span>
// <span>Modern React Architectures</span>
//   </div>

//     <div className='flex items-center gap-2'>
// <span class="h-2 w-2 rounded-full bg-blue-500"></span>
//     <span>Performance Optimization</span>
//     </div>

//         <div className='flex items-center gap-2'>
// <span class="h-2 w-2 rounded-full bg-blue-500"></span>
//     <span>Responsive & Interactive UIs</span>
//     </div>
//   </div>

//      <div className='ml-76 border-t border-gray-700 mt-16 w-full max-w-4xl'></div>    

// </div>
   
// <div className='flex flex-col max-w-sm rounded-lg bg-[#151C2A] hover:bg-[#142647] border hover:border-[#C084FC] p-10'>
//     <div className='mb-4 text-lg font-semibold text-[#C084FC]'>
// Backend Developments
// </div>
//   <div className='flex flex-col gap-2 text-sm text-gray-300'>
//     <div className='flex items-center gap-2'>
// <span class="h-2 w-2 rounded-full bg-[#C084FC]"></span>
// <span>API Design & Development
// </span>
//   </div>
//     <div className='flex items-center gap-2'>
// <span class="h-2 w-2 rounded-full bg-[#C084FC]"></span>
//  <span>Database Architecture
// </span>
//     </div>

//         <div className='flex items-center gap-2'>
// <span class="h-2 w-2 rounded-full bg-[#C084FC]"></span>
//     <span>Real-time Systems</span>
//     </div>
//   </div>
//   </div>

//   <div className='flex flex-col max-w-sm rounded-lg bg-[#151C2A] hover:bg-[#142647] border hover:border-[#2DD4BF] py-10 px-14'>
//   <div className='mb-4 text-lg font-semibold text-[#2DD4BF]'>
//     DevOps & Cloud
//   </div>
//   <div className='flex flex-col gap-2 text-sm text-gray-300'>

//     <div className='flex items-center gap-2'>
// <span class="h-2 w-2 rounded-full bg-[#2DD4BF]"></span>
// <span>AWS Infrastructure
// </span>
//   </div>

//     <div className='flex items-center gap-2'>
// <span class="h-2 w-2 rounded-full bg-[#2DD4BF]"></span>
//     <span>CI/CD Pipelines
// </span>
//     </div>

//         <div className='flex items-center gap-2'>
// <span class="h-2 w-2 rounded-full bg-[#2DD4BF]"></span>
//     <span>Scalable Architecture</span>
//     </div>
//   </div>
// </div>

 

// </div>
// </motion.div>
//     </div>
//   )
// }

// export default Skills


import React, { useState } from 'react';
import { motion,easeOut, AnimatePresence } from 'framer-motion';

const skillData = [
  { id: "01", title: "Frontend Developments", details: ["Modern React Architectures", "Performance Optimization", "Responsive UIs"] },
  { id: "02", title: "Backend Developments", details: ["API Design", "Database Architecture", "Real-time Systems"] },
  { id: "03", title: "DevOps & Cloud", details: ["AWS Infrastructure", "CI/CD Pipelines", "Scalable Architecture"] }
];

const Skills = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <div className='flex flex-col w-full max-w-4xl mx-auto p-10'>
      <h1 className='text-white text-3xl font-bold mb-10'>S K I L L S</h1>

      {skillData.map((skill) => (
        <div key={skill.id} className="border-b border-gray-700">
          {/* Header Row */}
          <button 
            onClick={() => setOpenId(openId === skill.id ? null : skill.id)}
            className="w-full flex items-center justify-between py-6 text-white"
          >
            <div className="flex items-center gap-6">
              <span className="text-2xl text-green-400 font-mono">{skill.id}</span>
              <span className="text-xl">{skill.title}</span>
            </div>
            <span className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center">
              {openId === skill.id ? "-" : "+"}
            </span>
          </button>

          {/* Animated Content */}
          <AnimatePresence>
            {openId === skill.id && (
              <motion.div
                whileInView={{x:[-100,0], opacity:[0,1]}}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pb-6 pl-16 text-gray-400 flex flex-col gap-2">
                  {skill.details.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Skills;