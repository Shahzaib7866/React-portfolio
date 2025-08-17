import React, { useState, useEffect } from 'react';
import shahzy from '../assets/shah-logo.png'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';





const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

//navbar clickable items
const handleNavLinkClick = (item) => {
  const targetId = item.toLowerCase();
  const element = document.getElementById(targetId);

  if (element) {
    // Scroll to the element
    element.scrollIntoView({ behavior: 'smooth' });

    // Update the URL without reloading the page
    window.history.pushState(null, '', `${targetId}`);
  }
};
         
//navbar styling
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (

          <nav className={`flex items-center justify-between fixed top-0 left-0 right-0 z-50 p-4 bg-gray-700 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>

      <div className='m-2'>
        <a href="/"> <img className='rounded-2xl w-[134px] h-[42px]' src={shahzy} alt='logo' /> </a>
      </div>

      <ul className="flex gap-6 uppercase cursor-pointer font-semibold transition-all duration-600 ease-in-out">
{['Home', 'About', 'Work', 'Contact'].map
((item) =>(
  <li key={`link-${item}`}>
<div onClick={() => handleNavLinkClick(item)} className="text-gray-200 group relative inline-block hover:scale-110">
        {item}
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
</div>
  </li>
))}
</ul>


<a href="mailto:shehkhan494@gmail.com" className='transition-all duration-400 ease-in-out text-white cursor-pointer border p-2 mx-4 hover:scale-110'>
  <button>Email Me</button>
</a>



{/* <div className=''>
  <MenuOutlinedIcon onClick={()=> setToggle(true)} />

    {
      toggle &&(
        <motion.div
        whileInView={{x: [300,0]}}
        transition={{duration: 0.85, ease: 'easeOut'}}>

<CloseIcon onClick={()=> setToggle(false)} />
  {['Home', 'About', 'Work', 'Skills', 'Contact'].map
((item) =>(
  <li key={`link-${item}`}>
 <a href={`${item}`} onClick={()=> setToggle(false)} className="text-gray-300 group relative inline-block hover:font-bold">
  {item}
</a>
  </li>
))}

   </motion.div> */}

      {/* ) }

</div> */}
    </nav>
  )
}

export default Navbar






  