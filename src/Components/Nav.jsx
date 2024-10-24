import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import logo from './img/logo.png';

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hasScrolled = window.scrollY > 50;
      setIsScrolled(hasScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setNavActive((prevNavActive) => !prevNavActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full fixed top-0 z-50"
    >
      <motion.header
        className={`fixed top-0 w-full flex justify-between items-center px-8 md:px-32 transition-all duration-500 ${isScrolled ? "bg-white shadow-lg" : ""}`}
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <a href="/">
          <img src={logo} alt="Logo" className="logo w-[65px] h-[65px] mt-[10px] mb-[10px] ml-[10px]" />
        </a>

        {/* Hamburger Icon */}
        <button
          className={`nav__hamburger ${navActive ? "active" : ""} xl:hidden`}
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <span className={`block w-8 h-0.5 bg-black mb-1 transition-all ${navActive ? "rotate-45 translate-y-1" : ""}`}></span>
          <span className={`block w-8 h-0.5 bg-black mb-1 ${navActive ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block w-8 h-0.5 bg-black transition-all ${navActive ? "-rotate-45 -translate-y-1" : ""}`}></span>
        </button>

        {/* Desktop & Mobile Navigation */}
        <ul className={`navbar--items ${navActive ? "block" : "hidden"} xl:flex items-center gap-12 font-semibold text-base ml-auto bg-white xl:bg-transparent xl:static absolute top-20 right-8 xl:right-auto rounded-md xl:rounded-none p-5 xl:p-0 shadow-lg xl:shadow-none transition-all duration-300`}>
          {["Home", "Skill", "Projects", "Contact"].map((item) => (
            <li key={item} className="p-3 font-pop hover:bg-gradient-to-r from-pink-400 from-30% to-purple-500 hover:text-white rounded-2xl transition ease-out duration-500 cursor-pointer">
              <ScrollLink
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </motion.header>
    </motion.div>
  );
};

export default Nav;
