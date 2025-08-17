// import React from 'react'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import {Swiper, SwiperSlide} from 'swiper/react'
// import shahzypic from '../assets/shahzypic.jpeg'


// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/free-mode'

// import {FreeMode, Pagination} from 'swiper/modules'

// const Projects = () => {


// const data = [
//   {
//     name: 'Backend Project',
//     img: shahzypic,
//     descp: 'lorem about backend project in details explaining technologies',
//     icons: GitHubIcon
//   },
//     {
//     name: 'Frontend Project',
//     img: shahzypic,
//     descp: 'lorem about backend project in details explaining technologies',
//     icons: GitHubIcon
//   },
//     {
//     name: 'App Development Project',
//     img: shahzypic,
//     descp: 'lorem about backend project in details explaining technologies',
//     icons: GitHubIcon
//   },
//     {
//     name: 'devops Project',
//     img: shahzypic,
//     descp: 'lorem about backend project in details explaining technologies',
//     icons: GitHubIcon
//   },
// ]

//   return (
//     <div className='flex flex-col items-center justify-center mt-12'>
//       <h1 className='text-white font-semibold text-lg'>
//         Projects I have Worked in
//       </h1>

//       <div className='mt-6'>
//         <Swiper
//         breakpoints={{
//           340: {
//             slidesPerView: 2,
//             spaceBetween: 15
//           },
//            700: {
//             slidesPerView: 3,
//             spaceBetween: 15
//           }
//         }}
//         freeMode={true}
//         pagination={{
//           clickable: true
//         }}
//         modules={[FreeMode, Pagination]}
//         className='max-w-[90%] lg:max-w-[80%]'
//         >

//         {data.map((d) => (
//           //as it is a map each item needs its own key
//           <SwiperSlide key={d.name}>
//           <div className='flex flex-col gap-6 group relative text-white shadow-lg px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] rounded-xl'>
//              <div
//       className='absolute inset-0 bg-cover bg-center rounded-xl'
//       style={{ backgroundImage: `url(${d.img})` }}
//     />

//             <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50 transition-opacity duration-300 rounded-xl'/>
              
              
//     <div className='relative p-4 flex flex-col justify-end h-full'>
//       <h2 className='text-2xl font-bold mb-2'>{d.name}</h2>
//       <p className='text-sm mb-4'>{d.descp}</p>
//       {/* Conditionally render icon */}
//       {d.icons && <d.icons className='text-2xl cursor-pointer hover:text-gray-400' />}
   
//   </div>
//      </div>
// </SwiperSlide>

       
        
//         ))}
// </Swiper>
//       </div>

//       <span className='border text-gray-500 mt-36 flex'></span>
//     </div>
//   )
// }

// export default Projects

import React from 'react';
import { Github, ExternalLink, Code, Server, Smartphone, Cloud } from 'lucide-react';

const Projects = () => {
  // Sample project data with placeholder images and proper descriptions
  const data = [
    {
      name: 'E-Commerce Backend API',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      descp: 'RESTful API built with Node.js, Express, and MongoDB. Features include user authentication, payment integration, and order management.',
      tech: ['Node.js', 'Express', 'MongoDB'],
      icon: Server,
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      name: 'React Dashboard',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      descp: 'Modern dashboard with data visualization, real-time updates, and responsive design. Built with React, Chart.js, and Tailwind CSS.',
      tech: ['React', 'Chart.js', 'Tailwind'],
      icon: Code,
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      name: 'Mobile Fitness App',
      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      descp: 'Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.',
      tech: ['React Native', 'Firebase', 'Redux'],
      icon: Smartphone,
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      name: 'DevOps CI/CD Pipeline',
      img: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop',
      descp: 'Automated deployment pipeline using Docker, Jenkins, and AWS. Includes testing, building, and deployment stages.',
      tech: ['Docker', 'Jenkins', 'AWS'],
      icon: Cloud,
      githubUrl: '#',
      liveUrl: '#'
    },
  ];

  return (
    <div id='work' className='flex flex-col items-center justify-center mt-20 px-4'>
      <h1 className='text-white font-semibold text-2xl mb-2'>
        Projects I have Worked On
      </h1>
      <p className='text-gray-400 text-center mb-8 max-w-2xl'>
        A collection of projects showcasing my skills in full-stack development, mobile apps, and DevOps
      </p>

      {/* Simple grid layout instead of swiper for better compatibility */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl'>
        {data.map((project, index) => (
          <div key={project.name} className='group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105'>
            {/* Project Image */}
            <div className='relative h-48 overflow-hidden'>
              <img
                src={project.img}
                alt={project.name}
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity duration-300'></div>
              
              {/* Overlay icons */}
              <div className='absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <a
                  href={project.githubUrl}
                  className='bg-black bg-opacity-70 p-2 rounded-full hover:bg-opacity-90 transition-all'
                  onClick={(e) => e.preventDefault()}
                >
                  <Github className='w-4 h-4 text-white' />
                </a>
                <a
                  href={project.liveUrl}
                  className='bg-black bg-opacity-70 p-2 rounded-full hover:bg-opacity-90 transition-all'
                  onClick={(e) => e.preventDefault()}
                >
                  <ExternalLink className='w-4 h-4 text-white' />
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div className='p-6'>
              <div className='flex items-center gap-3 mb-3'>
                <project.icon className='w-6 h-6 text-blue-400' />
                <h3 className='text-white font-bold text-lg'>{project.name}</h3>
              </div>
              
              <p className='text-gray-300 text-sm mb-4 leading-relaxed'>
                {project.descp}
              </p>
              
              {/* Tech Stack */}
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className='px-3 py-1 bg-gray-800 text-blue-300 text-xs rounded-full border border-gray-700'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className='flex gap-3'>
                <button
                  className='flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2'
                  onClick={() => console.log('View project:', project.name)}
                >
                  <Github className='w-4 h-4' />
                  Code
                </button>
                <button
                  className='flex-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2'
                  onClick={() => console.log('Demo project:', project.name)}
                >
                  <ExternalLink className='w-4 h-4' />
                  Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom border */}
      <div className='border-t border-gray-700 mt-16 w-full max-w-4xl'></div>
    </div>
  );
};

export default Projects;










