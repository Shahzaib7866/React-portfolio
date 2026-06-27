// import React fr


import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import shahzypic from '../assets/shahzypic.jpeg'

export default function Hero() {
  return (
<div id='home' className='w-full min-h-dvh bg-slate-950 overflow-x-hidden flex flex-col justify-between p-6 md:p-12'>      
      {/* Main Grid Wrapper - Centers everything vertically & handles responsiveness */}
      <div className='flex flex-col md:flex-row flex-1 items-center justify-center md:justify-between gap-8 max-w-6xl w-full'>

        {/* sub-main div 1: Text Content */}
        <div className='ml-5 w-full md:w-1/2 flex flex-col justify-center text-center md:text-left'>
          <motion.div 
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6 }}
          >
            <div className='flex items-center justify-center md:justify-start gap-2'>
              <p className='text-white text-lg md:text-xl font-medium text-slate-300'>Welcome to my Portfolio</p>
              <span className='text-xl animate-bounce'>👋</span>
            </div>

            <div className='mt-3 text-white text-xl md:text-2xl font-semibold min-h-[80px]'> 
              <h5 className='inline'>Hi! I am Shahzaib, </h5>
              <TypeAnimation
                sequence={[
                  " Web Developer", 2000,
                  " React Native Developer", 2000,
                  " Manual Tester", 2000
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block', color: '#3b82f6' }}
                repeat={Infinity}
              />
            </div>

            {/* Replaced fixed width with a safe max-width container */}
            <div className='text-slate-400 my-4 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0'>
              <p className='mb-3'>I am Shahzaib and I am a JavaScript Web Developer. I have been working in this field for more than Two years.</p>
              <ul className='grid grid-cols-2 gap-1 text-left max-w-xs mx-auto md:mx-0 text-xs md:text-sm bg-slate-900/50 p-3 rounded-lg border border-slate-800'>
                <li>• JavaScript</li>
                <li>• Reactjs</li>
                <li>• HTML5 & CSS</li>
                <li>• Nodejs</li>
                <li>• Expressjs</li>
                <li>• PostgreSql</li>
              </ul>
            </div>

            <button className='mt-2 text-white cursor-pointer text-base md:text-lg flex items-center justify-center md:justify-start gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full transition-colors w-fit mx-auto md:mx-0 group'>
              Let's Connect 
              <ArrowForwardOutlinedIcon className='border rounded-full p-0.5 group-hover:translate-x-1 transition-transform' />
            </button>
          </motion.div>
        </div>

        {/* sub-main div 2: Image & Social Links */}
        <div className='-mr-20 w-full md:w-1/2 flex flex-col items-center justify-center md:items-end'>
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6 }}
            className='flex flex-col items-center'
          >
            {/* Adaptive image container */}
            <div className='overflow-hidden rounded-2xl shadow-xl border-2 border-slate-800 bg-slate-900'>
              <img className='w-40 h-40 md:w-60 md:h-64 object-cover' src={shahzypic} alt='Shahzaib' />
            </div>

            {/* Social Icons grid */}
            <div className='mt-6 flex items-center justify-center gap-4 text-white'>
              {[
                { icon: <LinkedInIcon fontSize="inherit" />, url: "https://www.linkedin.com/in/shahzaib-ishaq-37262821b/" },
                { icon: <GitHubIcon fontSize="inherit" />, url: "https://github.com/Shahzaib7866" },
                // { icon: <WhatsAppIcon fontSize="inherit" />, url: "#" }, 
                { icon: <EmailIcon fontSize="inherit" />, url: "mailto:shehkhan494@gmail.com" }
              ].map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                  <Box
                    sx={{
                      fontSize: { xs: 28, md: 34 },
                      transition: 'all 0.3s ease-in-out', 
                      '&:hover': {
                        transform: 'scale(1.15)',
                        color: '#3b82f6',
                      },
                    }}
                  >
                    {link.icon}
                  </Box>
                </a>
              ))}
            </div>

          </motion.div>
        </div>

      </div>

      {/* Decorative Bottom Divider Line */}
   <div className='fixed bottom-0 left-0 right-0 border-t border-slate-800 bg-slate-950 text-center text-xs text-slate-600'>
</div>
    </div>
  );
}








