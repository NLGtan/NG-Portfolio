import React, { useEffect, useRef, useState, Fragment } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import logo from "./img/logo.png";

export const Nav = () => {
  const navRef = useRef(null);
  const [navActive, setNavActive] = useState(false);
  const [isDarkBehind, setIsDarkBehind] = useState(false);

  const updateThemeFromSection = () => {
    const nav = navRef.current;
    if (!nav) return;

    const midY = nav.getBoundingClientRect().top + nav.offsetHeight / 2;
    const sections = document.querySelectorAll("[data-theme]");

    for (const sec of sections) {
      const r = sec.getBoundingClientRect();
      if (r.top <= midY && r.bottom >= midY) {
        setIsDarkBehind((sec.getAttribute("data-theme") || "light") === "dark");
        return;
      }
    }
    setIsDarkBehind(false);
  };

  const setNavHeightVar = () => {
    const h = navRef.current?.offsetHeight || 72;
    document.documentElement.style.setProperty("--nav-h", `${h}px`);
  };

  useEffect(() => {
    updateThemeFromSection();
    setNavHeightVar();

    const onScroll = () => updateThemeFromSection();
    const onResize = () => {
      updateThemeFromSection();
      setNavHeightVar();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const fontReady = document.fonts?.ready;
    if (fontReady?.then) {
      fontReady.then(setNavHeightVar).catch(() => {});
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const toggleNav = () => setNavActive((v) => !v);
  const closeMenu = () => setNavActive(false);

  const darkHex = "#171717";
  const lightHex = "#fdfff8";

  const headerBG = isDarkBehind ? darkHex : lightHex;
  const linkColorClass = isDarkBehind ? "text-white" : "text-black";
  const panelBG = isDarkBehind ? darkHex : lightHex;
  const panelBorder = isDarkBehind
    ? "rgba(255,255,255,.12)"
    : "rgba(0,0,0,.12)";
  const panelTextClass = linkColorClass;

  const links = ["Home", "Skills", "Projects", "Let's Talk"];

  return (
    <Fragment>
      <motion.div
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <motion.header
          className="h-16 md:h-24 w-full flex justify-between items-center px-8 md:px-[2rem]"
          initial={false}
          animate={{ backgroundColor: headerBG }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {/* Logo */}
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className={`w-[50px] h-[50px] mt-[10px] mb-[10px] ml-[10px] transition duration-300 ${
                isDarkBehind ? "invert" : ""
              }`}
            />
          </a>

          {/* ======================== */}
          {/* 4-CIRCLE CUBE HAMBURGER (adjustable) */}
          {/* ======================== */}
          <div
            className="relative xl:hidden cursor-pointer"
            style={{ width: 48, height: 48 }} // container size
            onClick={toggleNav}
          >
            {Array(4)
              .fill(0)
              .map((_, i) => {
                const circleSize = 12; // size of each circle
                const gap = 8; // distance from edges

                const positions = [
                  { top: gap, left: gap }, // top-left
                  { top: gap, left: 48 - gap - circleSize }, // top-right
                  { top: 48 - gap - circleSize, left: gap }, // bottom-left
                  { top: 48 - gap - circleSize, left: 48 - gap - circleSize }, // bottom-right
                ];

                return (
                  <motion.div
                    key={i}
                    style={{
                      width: circleSize,
                      height: circleSize,
                      top: positions[i].top,
                      left: positions[i].left,
                      position: "absolute",
                      borderRadius: "50%",
                    }}
                    animate={{
                      scale: navActive ? 0.6 : 1, // shrink on click
                      backgroundColor: isDarkBehind ? "#FFFFFF" : "#171717", // color transition
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      duration: 0.3,
                    }}
                  />
                );
              })}
          </div>

          {/* ======================== */}
          {/* DESKTOP NAV (unchanged) */}
          {/* ======================== */}
          <ul
            className={`hidden xl:flex xl:items-center xl:ml-auto font-regular text-lg ${linkColorClass}`}
          >
            {links.map((item) => (
              <li key={item} className="p-1 font-pop rounded-2xl">
                <ScrollLink
                  to={item}
                  spy
                  smooth
                  offset={-88}
                  duration={500}
                  className={`cursor-pointer px-2 py-1 rounded-xl ${panelTextClass}
                    transition-colors duration-300
                    hover:bg-clip-text hover:text-transparent 
                    hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500`}
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* ======================== */}
          {/* MOBILE DROPDOWN (unchanged) */}
          {/* ======================== */}
          <motion.ul
            className="
              xl:hidden
              absolute right-8 top-16 md:top-20
              rounded-2xl overflow-hidden
              font-regular text-base
            "
            style={{ zIndex: 60 }}
            initial={{
              height: 0,
              y: -12,
              clipPath: "inset(0% 0% 100% 0%)",
              borderWidth: 0,
              pointerEvents: "none",
            }}
            animate={
              navActive
                ? {
                    height: "auto",
                    y: 0,
                    clipPath: "inset(0% 0% 0% 0%)",
                    borderWidth: 1,
                    pointerEvents: "auto",
                    backgroundColor: panelBG,
                    borderColor: panelBorder,
                    color: isDarkBehind ? "#FFFFFF" : "#111111",
                    boxShadow: isDarkBehind
                      ? "0 20px 40px rgba(0,0,0,0)"
                      : "0 20px 40px rgba(0,0,0,0)",
                  }
                : {
                    height: 0,
                    y: -12,
                    clipPath: "inset(0% 0% 100% 0%)",
                    borderWidth: 0,
                    pointerEvents: "none",
                    borderColor: "transparent",
                  }
            }
            transition={{
              duration: 0.38,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            <motion.div
              className="p-4 space-y-2"
              initial="closed"
              animate={navActive ? "open" : "closed"}
              variants={{
                open: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.05,
                  },
                },
                closed: {},
              }}
            >
              {links.map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                      transition: { ease: [0.25, 1, 0.5, 1], duration: 0.32 },
                    },
                    closed: {
                      y: -8,
                      opacity: 0,
                      filter: "blur(4px)",
                      transition: { duration: 0.15 },
                    },
                  }}
                  className={`font-pop rounded-xl list-none ${panelTextClass}`}
                >
                  <ScrollLink
                    to={item}
                    spy
                    smooth
                    offset={-88}
                    duration={500}
                    onClick={closeMenu}
                    className={`
                      cursor-pointer block px-3 py-2 rounded-xl ${panelTextClass}
                      transition-all duration-300
                      hover:bg-clip-text hover:text-transparent 
                      hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500
                    `}
                  >
                    {item}
                  </ScrollLink>
                </motion.li>
              ))}
            </motion.div>
          </motion.ul>
        </motion.header>
      </motion.div>

      <div className="h-16 md:h-20" aria-hidden />
    </Fragment>
  );
};

export default Nav;
