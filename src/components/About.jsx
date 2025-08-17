import React from 'react'
import { motion } from 'framer-motion'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TimelineIcon from '@mui/icons-material/Timeline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';


const About = () => {
  return (
    <div id='about'>
    <div className='flex items-center justify-between'>
   <motion.div
  //  initial="hidden" 
   whileInView={{x:[-100,0], opacity:[0,1]}}
   transition={{duration: 0.5}}
  //  viewport={{once: true, amount: 0.5}}
   className='m-12'
   >

<div className='mt-8 flex text-gray-500 font-semibold'>
      <h1 className='pr-4'>A B O U T</h1><p>M E</p>
      </div>

<p className='text-white mt-6'>
  I am a tech-savvy individual with a Bachelor's degree in Software Development, seeking employment as a <br /> Full-Stack developer.
  <h1 className='my-3'>Background:</h1>
   <ArrowRightIcon />Passionate about technology and solving problems through coding. <br />
   <ArrowRightIcon />Over 2 years of experience in developing web and mobile application. <br />
   <ArrowRightIcon />Proficient in a variety of programming languages, including Javascript, Python and Java. <br />

</p>

<div className='flex'>
<p className='flex justify-center items-center px-4 py-2 rounded-4xl w-auto m-6 text-[#60A5FA] bg-[#0D172C] border border-transparent mr-4'>Javascript</p>
<p className='flex justify-center px-4 py-2 rounded-4xl w-auto my-6 text-[#9F84FC] bg-[#0D172C] border border-transparent mr-4'>React & Next.js</p>
<p className='flex justify-center px-3 py-2 rounded-4xl w-auto my-6 text-[#60A5FA] bg-[#0D172C] border border-transparent mr-4'>Node.js </p>
<p className='flex justify-center px-3 py-2 rounded-4xl w-auto my-6 text-[#9F84FC] bg-[#0D172C] border border-transparent mr-4'>AWS</p>
</div>
  </motion.div>

    
<motion.div
whileInView={{x:[0,-100], opacity:[0,1]}}
transition={{duration: 0.6}}>
<div className='flex m-8 '>
  <div className='border border-solid border-transparent flex flex-col items-center p-8 mr-4 text-white rounded-xl bg-[#2c2c6c] hover:bg-transparent hover:border-white'>
    <TimelineIcon /> 
  <h1 className='font-semibold'>Experience</h1>
  <p className='text-sm text-gray-300'>2+ years</p>
  </div>

    <div className='border border-solid border-transparent flex flex-col items-center p-8 mr-4 text-white border rounded-xl bg-[#2c2c6c] hover:bg-transparent hover:border-white'>
    <PeopleAltIcon />
  <h1 className='font-semibold'>Clients</h1>
  <p className='text-sm text-gray-300'>3+ worldwide</p>
  </div>

     <div className='border border-solid border-transparent flex flex-col items-center p-8 mr-4 text-white border rounded-xl bg-[#2c2c6c] hover:bg-transparent hover:border-white'>
      <FolderCopyIcon />
  <h1 className='font-semibold'>Projects</h1>
  <p className='text-sm text-gray-300'>5+ completed</p>
  </div>

</div>
  </motion.div>

</div>

<motion.div  
   whileInView={{x:[-100,0], opacity:[0,1]}}
   transition={{duration: 0.5}}
  //  viewport={{once: true, amount: 0.5}}
   className='m-8'>
<div className='flex justify-around items-center mx-66 bg-[#0A0F1B] rounded-lg w-[1000px] h-[250px]'>

<div className='flex flex-col max-w-sm rounded-lg bg-[#151C2A] hover:bg-[#142647] border hover:border-[#60A5FA] p-10'>
  <div className='mb-4 text-lg font-semibold text-[#60A5FA]'>
    Frontend Developments
  </div>
  <div className='flex flex-col gap-2 text-sm text-gray-300'>

    <div className='flex items-center gap-2'>
<span class="h-2 w-2 rounded-full bg-blue-500"></span>
<span>Modern React Architectures</span>
  </div>

    <div className='flex items-center gap-2'>
<span class="h-2 w-2 rounded-full bg-blue-500"></span>
    <span>Performance Optimization</span>
    </div>

        <div className='flex items-center gap-2'>
<span class="h-2 w-2 rounded-full bg-blue-500"></span>
    <span>Responsive & Interactive UIs</span>
    </div>
  </div>
</div>
   
<div className='flex flex-col max-w-sm rounded-lg bg-[#151C2A] hover:bg-[#142647] border hover:border-[#C084FC] p-10'>
    <div className='mb-4 text-lg font-semibold text-[#C084FC]'>
Backend Developments
</div>
  <div className='flex flex-col gap-2 text-sm text-gray-300'>
    <div className='flex items-center gap-2'>
<span class="h-2 w-2 rounded-full bg-[#C084FC]"></span>
<span>API Design & Development
</span>
  </div>
    <div className='flex items-center gap-2'>
<span class="h-2 w-2 rounded-full bg-[#C084FC]"></span>
 <span>Database Architecture
</span>
    </div>

        <div className='flex items-center gap-2'>
<span class="h-2 w-2 rounded-full bg-[#C084FC]"></span>
    <span>Real-time Systems</span>
    </div>
  </div>
  </div>

  <div className='flex flex-col max-w-sm rounded-lg bg-[#151C2A] hover:bg-[#142647] border hover:border-[#2DD4BF] py-10 px-14'>
  <div className='mb-4 text-lg font-semibold text-[#2DD4BF]'>
    DevOps & Cloud
  </div>
  <div className='flex flex-col gap-2 text-sm text-gray-300'>

    <div className='flex items-center gap-2'>
<span class="h-2 w-2 rounded-full bg-[#2DD4BF]"></span>
<span>AWS Infrastructure
</span>
  </div>

    <div className='flex items-center gap-2'>
<span class="h-2 w-2 rounded-full bg-[#2DD4BF]"></span>
    <span>CI/CD Pipelines
</span>
    </div>

        <div className='flex items-center gap-2'>
<span class="h-2 w-2 rounded-full bg-[#2DD4BF]"></span>
    <span>Scalable Architecture</span>
    </div>
  </div>
</div>

 

</div>
</motion.div>

   <div className='ml-76 border-t border-gray-700 mt-16 w-full max-w-4xl'></div>    
   </div>
  )
}

export default About










