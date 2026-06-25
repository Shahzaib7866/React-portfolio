
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

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
    <>
      <nav className="flex items-center justify-between mt-8 mx-16 fixed top-0 left-0 right-0 z-50 p-6 bg-gray-700 rounded-lg">
        
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

        {/* Toggle Button — mobile only */}
        <div className='md:hidden cursor-pointer text-white z-[60]' onClick={() => setMenu(!menu)}>
          {menu ? <CloseIcon /> : <MenuIcon />}
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay — sirf mobile pe */}
      <AnimatePresence>
        {menu && (
          <motion.div
            className="md:hidden fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <div className='absolute top-6 right-10 cursor-pointer text-white' onClick={() => setMenu(false)}>
              <CloseIcon fontSize="large" />
            </div>

            {/* Links */}
            <motion.ul
              className="flex flex-col items-center gap-2 uppercase cursor-pointer font-semibold"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {['Home', 'About', 'Work', 'Contact'].map((item) => (
                <motion.li key={`mob-${item}`} variants={itemVariants}>
                  <div
                    className="text-gray-200 text-3xl tracking-widest hover:scale-110 transition-transform"
                    onClick={() => setMenu(false)}
                  >
                    {item}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;