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
  const lightHex = "#FFFFFF";

  const headerBG = isDarkBehind ? darkHex : lightHex;
  const linkColorClass = isDarkBehind ? "text-white" : "text-black";
  const barColorClass = isDarkBehind ? "bg-white" : "bg-black";
  const panelBG = isDarkBehind ? darkHex : lightHex;
  const panelBorder = isDarkBehind
    ? "rgba(255,255,255,.12)"
    : "rgba(0,0,0,.12)";
  const panelTextClass = linkColorClass;

  const links = ["About me", "Skills", "Projects", "Let's Talk"];

  return (
    <Fragment>
      <motion.div
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <motion.header
          className="h-16 md:h-20 w-full flex justify-between items-center px-8 md:px-20"
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

          {/* HAMBURGER (mobile only) */}
          <button
            className="relative h-8 w-8 xl:hidden"
            onClick={toggleNav}
            aria-label="Toggle navigation"
            aria-expanded={navActive}
          >
            <span
              className={`absolute top-1/2 left-0 w-6 h-0.5 ${barColorClass} transition-all ${
                navActive ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute top-1/2 left-0 w-6 h-0.5 ${barColorClass} transition-all ${
                navActive ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute top-1/2 left-0 w-6 h-0.5 ${barColorClass} transition-all ${
                navActive ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>

          {/* ======================== */}
          {/* DESKTOP NAV (no animation) */}
          {/* ======================== */}
          <ul
            className={`hidden xl:flex xl:items-center xl:gap-6 xl:ml-auto font-regular text-base ${linkColorClass}`}
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
          {/* MOBILE NAV (animated)    */}
          {/* ======================== */}
          <motion.ul
            className="
              xl:hidden
              absolute right-8 top-16 md:top-20
              rounded-xl p-5 border backdrop-blur-sm
              font-regular text-base
            "
            style={{ zIndex: 60 }}
            initial={{ opacity: 0, y: -10, pointerEvents: "none" }}
            animate={
              navActive
                ? {
                    opacity: 1,
                    y: 0,
                    pointerEvents: "auto",
                    backgroundColor: panelBG,
                    color: isDarkBehind ? "#FFFFFF" : "#111111",
                    borderColor: panelBorder,
                    boxShadow: isDarkBehind
                      ? "0 10px 30px rgba(0,0,0,.35)"
                      : "0 10px 30px rgba(0,0,0,.15)",
                  }
                : { opacity: 0, y: -10, pointerEvents: "none" }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {links.map((item) => (
              <li
                key={item}
                className={`p-1 font-pop rounded-2xl ${panelTextClass}`}
              >
                <ScrollLink
                  to={item}
                  spy
                  smooth
                  offset={-88}
                  duration={500}
                  onClick={closeMenu}
                  className={`cursor-pointer px-2 py-1 rounded-xl ${panelTextClass}
                    transition-colors duration-300
                    hover:bg-clip-text hover:text-transparent 
                    hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500`}
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </motion.ul>
        </motion.header>
      </motion.div>

      <div className="h-16 md:h-20" aria-hidden />
    </Fragment>
  );
};

export default Nav;
