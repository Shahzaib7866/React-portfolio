import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import shahzypic from '../assets/shahzypic.jpeg'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Box } from '@mui/material';



const Hero = () => {
  
  return (

    <div id='home'>
    {/* //main div */}
    <div className='flex items-center justify-between'>

{/* sub-main div 1 */}
<div>
<motion.div 
whileInView={{x:[-100,0], opacity:[0,1]}}
transition={{duration: 0.6}}
className='m-12'
>
     
     <div className='flex pt-44'>
     <p className='text-white text-xl'>Welcome to my Portfolio</p>
     <span className='text-xl'>👋</span>
     </div>

     <div className='mt-3 text-white text-xl inline'>
      
     <TypeAnimation
      sequence={[
        "Hi I'm Shahzaib, a Web Developer",
        2000,
        "Hi I'm Shahzaib, an UI/UX Designer",
        2000,
        "Hi I'm Shahzaib, a React Native Developer",
        2000,
        "Hi I'm Shahzaib, a SQA Engineer",
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
       />
      </div>

  <p className='text-white my-6 flex w-[450px] text-base'>
   I am Shahzaib and I am a JavaScript web Developer.
I have been working on this field for more than One year. <br />
• Javascript <br />
• Reactjs <br />
• Html5 and CSS <br />
• JavaScript for web development <br />
• Nodejs
  </p>

     <button className='mt-4 text-white cursor-pointer text-lg'>Let's Connect <ArrowForwardOutlinedIcon className='border rounded-4xl ml-2 cursor-pointer' /></button>

</motion.div>

 </div>


{/* sub-main div 2 */}
<div>
<motion.div
whileInView={{x:[0,-100], opacity:[0,1]}}
transition={{duration: 0.6}}
 className='ml-auto mt-26'>
    <div className='m-2 inline'>
        <img className='w-auto h-[240px] rounded-2xl mt-4' src={shahzypic} alt='pic' />
      </div>

      <div className='ml-7 mt-4 flex items-center text-white cursor-pointer'>

  <a href="https://www.linkedin.com/in/shahzaib-ishaq-37262821b/" target="_blank" rel="noopener noreferrer">

 <Box
      className="mr-4"
      sx={{
        fontSize: 36,
        transition: 'transform 0.3s ease-in-out', 
        '&:hover': {
        transform: 'scale(1.1)',
          color: '#2A57A1',
        },
      }}
    >
      <LinkedInIcon sx={{ fontSize: 'inherit' }} />
    </Box>
</a>

<a href="https://github.com/Shahzaib7866"
target="_blank" rel="noopener noreferrer">
     <Box
    className="mr-4"
      sx={{
        fontSize: 36,
        transition: 'transform 0.3s ease-in-out', 
        '&:hover': {
        transform: 'scale(1.1)',
          color: '#2A57A1',
        },
      }}
    >
        <GitHubIcon sx={{ fontSize: 'inherit' }} />
    </Box>
</a>

     <Box
  className="mr-4"
      sx={{
        fontSize: 36,
        transition: 'transform 0.3s ease-in-out', 
        '&:hover': {
        transform: 'scale(1.1)',
          color: '#2A57A1',
        },
      }}
    >
      <WhatsAppIcon sx={{ fontSize: 'inherit' }} />
    </Box>

    <a href="mailto:shehkhan494@gmail.com">
         <Box
  className="mr-4"
      sx={{
        fontSize: 36,
        transition: 'transform 0.3s ease-in-out', 
        '&:hover': {
        transform: 'scale(1.1)',
          color: '#2A57A1',
        },
      }}
    >
      <EmailIcon sx={{ fontSize: 'inherit' }} />
    </Box>
    </a>

</div>

</motion.div>
</div>


</div>


   <div className='ml-76 border-t border-gray-700 mt-16 w-full max-w-4xl'></div>
    </div>


  )
}

export default Hero










