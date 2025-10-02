import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // Animation variants (Desktop & Mobile dono ke liye)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    }
  };

  const itemVariants = {
    hidden: { x: 100, opacity: 0 }, 
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <nav className="flex items-center justify-between mt-8 mx-16 fixed top-0 left-0 right-0 z-50 p-6 bg-gray-700 rounded-lg overflow-hidden">
      
      {/* Desktop Links */}
      <motion.ul 
        className="hidden md:flex gap-6 uppercase cursor-pointer font-semibold"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {['Home', 'About', 'Work', 'Contact'].map((item) => (
          <motion.li key={`desk-${item}`} variants={itemVariants}>
            <div className="text-gray-200 group relative inline-block hover:scale-110">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      {/* Mobile Links (Visible only on small screens) */}
      <motion.ul 
        className="md:hidden flex gap-6 uppercase cursor-pointer font-semibold"
        variants={containerVariants}
        initial="hidden"
        animate={menu ? "visible" : "hidden"} // Menu khulne par animate hoga
      >
        {['Home', 'About', 'Work', 'Contact'].map((item) => (
          <motion.li key={`mob-${item}`} variants={itemVariants}>
            <div className="text-gray-200 group relative inline-block hover:scale-110">
              {item}
            </div>
          </motion.li>
        ))}
      </motion.ul>

      {/* Toggle Button */}
      <div className='md:hidden cursor-pointer text-white' onClick={() => setMenu(!menu)}>
        {menu ? <CloseIcon /> : <MenuIcon />}
      </div>
    </nav>
  );
};

export default Navbar;