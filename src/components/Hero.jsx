import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import shahzypic from '../assets/shahzypic.jpeg'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Hero = () => {
  
  return (

    <>
    <div className='flex items-center'>


<motion.div 
whileInView={{x:[-100,0], opacity:[0,1]}}
transition={{duration: 0.5}}
className='m-8'
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

</motion.div>


<motion.div
whileInView={{x:[0,-100], opacity:[0,1]}}
transition={{duration: 0.5}}
 className='ml-auto mt-26'>
    <div className='m-2 inline'>
        <img className='w-auto h-[240px] rounded-2xl' src={shahzypic} alt='pic' />
      </div>

</motion.div>
    </div>


<motion.div 
whileInView={{x:[-100,0], opacity:[0,1]}}
transition={{duration: 0.5}}
className='ml-6'
>
  <p className='text-white ml-4 flex w-[450px] text-lg'>
   I am Shahzaib and I am a JavaScript web Developer.
I have been working on this field for more than One year.
• Java <br />
• Reactjs <br />
• Html5 and CSS <br />
• JavaScript for web development <br />
• Nodejs
  </p>

</motion.div>


<motion.div 
whileInView={{x:[-100,0], opacity:[0,1]}}
transition={{duration: 0.5}}
className='ml-6'
>
    <button className='mt-8 text-white ml-4 cursor-pointer text-lg'>Let's Connect <ArrowForwardOutlinedIcon className='border rounded-4xl ml-2 cursor-pointer' /></button>

<div className='ml-4 mt-2 flex items-center text-white'>
  <LinkedInIcon className='mr-3'/>
  <GitHubIcon className='mr-3' />
  <WhatsAppIcon />
</div>

</motion.div>

<span className='border text-gray-500 mt-12 flex'></span>
    </>


  )
}

export default Hero










