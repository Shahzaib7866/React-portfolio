import React from 'react'
import { motion } from 'framer-motion'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const About = () => {
  return (
    <div>
   <motion.div
  //  initial="hidden" 
   whileInView={{x:[-100,0], opacity:[0,1]}}
   transition={{duration: 0.5}}
  //  viewport={{once: true, amount: 0.5}}
   className='m-8'
   >

<div className='flex text-gray-500 font-semibold'>
      <h1 className='pr-4'>A B O U T</h1><p>M E</p>
      </div>

<p className='text-white mt-6'>
  I am a tech-savvy individual with a Bachelor's degree in Software Development, seeking employment as a Full-Stack developer.
  <h1 className='my-3'>Background:</h1>
   <ArrowRightIcon />Passionate about technology and solving problems through coding. <br />
   <ArrowRightIcon />Over 3 years of experience in developing web and mobile application. <br />
   <ArrowRightIcon />Proficient in a variety of programming languages, including Javascript, Python and Java. <br />

</p>

<div className='flex'>
<p className='p-2 rounded-4xl w-[170px] my-6 text-gray-400 border hover:bg-gray-700 mr-4'>REACTJS DEVELOPER</p>
<p className='p-2 rounded-4xl w-[170px] my-6 text-gray-400 border hover:bg-gray-700 mr-4'>NODEJS DEVELOPER</p>
<p className='p-2 rounded-4xl w-[181px] my-6 text-gray-400 border hover:bg-gray-700 mr-4'>ANDROID DEVELOPER</p>
<p className='p-2 rounded-4xl w-[170px] my-6 text-gray-400 border hover:bg-gray-700'>REACTJS DEVELOPER</p>
</div>
  </motion.div>






    </div>
  )
}

export default About










