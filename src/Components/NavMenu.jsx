import React from "react";
import { motion } from "framer-motion";

// Staggered animation for menu items
const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation for each individual menu item
const itemVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const NavMenu = ({ setNavActive }) => {
  const navLinks = [
    { label: "Home", to: "Home" },
    { label: "Services", to: "Skills" },
    { label: "Projects", to: "Projects" },
    { label: "About", to: "About" },
    { label: "Let's Talk", to: "Let's Talk" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-xl z-40 flex items-center justify-start"
    >
      <div className="w-full pl-[25%] md:pl-[55%] text-white">
        <motion.nav
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.to}
              href={`#${link.to}`}
              variants={itemVariants}
              onClick={() => setNavActive(false)}
              className="font-ral font-bold text-4xl md:text-7xl uppercase tracking-tighter
               hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r 
               hover:from-pink-400 hover:to-purple-500"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-sm"
        >
          <div className="mb-8">
            <p className="font-bold uppercase text-gray-400">Email Address</p>
            <a
              href="mailto:gaborne.neithanlouisn@gmail.com"
              className="font-inc text-base hover:text-gray-400 transition-colors duration-200"
            >
              gaborne.neithanlouisn@gmail.com
            </a>
          </div>
          <div className="font-inc">
            <a
              href="/"
              className="mr-4 hover:text-gray-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="/"
              className="mr-4 hover:text-gray-400 transition-colors duration-200"
            >
              Github
            </a>
            <a
              href="/"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NavMenu;