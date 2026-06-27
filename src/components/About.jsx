import React from 'react'
import { motion } from 'framer-motion'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TimelineIcon from '@mui/icons-material/Timeline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

const About = () => {
  return (
    <div id='about' className='px-6 md:px-12 lg:px-24 py-10'>
      {/* Container: Mobile pe column, desktop pe row */}
      <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
        
        {/* Left Side: About Text */}
        <motion.div
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2'
        >
          <div className='flex text-gray-500 font-semibold mb-4'>
            <h1 className='pr-4'>A B O U T</h1><p>M E</p>
          </div>

          <div className='text-white space-y-4'>
            <p>I am a tech-savvy individual with a Bachelor's degree in Software Development, seeking employment as a Full-Stack developer.</p>
            <h1 className='font-bold'>Background:</h1>
            <p><ArrowRightIcon /> Passionate about technology and solving problems through coding.</p>
            <p><ArrowRightIcon /> Over 2 years of experience in developing web and mobile application.</p>
            <p><ArrowRightIcon /> Proficient in a variety of programming languages, including Javascript, Python and Java.</p>
          </div>

          {/* Tags */}
          <div className='flex flex-wrap gap-3 mt-6'>
            {['Javascript', 'React & Next.js', 'Node.js', 'AWS'].map((tag) => (
              <span key={tag} className='px-4 py-2 rounded-full text-sm text-[#60A5FA] bg-[#0D172C] border border-[#60A5FA]/20'>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Cards */}
        <motion.div
          whileInView={{ x: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.6 }}
          className='w-full lg:w-1/2 flex justify-center'
        >
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {[
              { icon: <TimelineIcon />, title: 'Experience', val: '2+ years' },
              { icon: <PeopleAltIcon />, title: 'Clients', val: '3+ worldwide' },
              { icon: <FolderCopyIcon />, title: 'Projects', val: '5+ completed' }
            ].map((item, index) => (
              <div key={index} className='flex flex-col items-center p-6 text-white rounded-xl bg-[#2c2c6c] hover:bg-transparent border border-transparent hover:border-white transition-all'>
                {item.icon}
                <h1 className='font-semibold mt-2'>{item.title}</h1>
                <p className='text-sm text-gray-300'>{item.val}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className='border-t border-gray-700 mt-16 w-full'></div>
    </div>
  )
}

export default About