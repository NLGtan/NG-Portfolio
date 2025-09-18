import React, { useEffect, useRef, useState, Fragment } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import logo from "./img/logo.png";

export const Nav = () => {
  const navRef = useRef(null);
  const [navActive, setNavActive] = useState(false);
  const [isDarkBehind, setIsDarkBehind] = useState(false);

  // Detect which themed section is behind the nav
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

  // Measure header height -> CSS var (--nav-h)
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
    if (fontReady && typeof fontReady.then === "function") {
      fontReady.then(setNavHeightVar).catch(() => {});
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const toggleNav = () => setNavActive((v) => !v);
  const closeMenu = () => setNavActive(false);

  // Animated colors
  const darkHex = "#171717";
  const lightHex = "#FFFFFF";
  const headerBG = isDarkBehind ? darkHex : lightHex;

  // Text/lines always contrast against what's behind the header
  const linkColorClass =
    isDarkBehind ? "text-white" : "text-black";
  const barColorClass =
    isDarkBehind ? "bg-white" : "bg-black";

  // For the mobile dropdown panel (when navActive), animate its bg + text as well
  const panelBG = isDarkBehind ? darkHex : lightHex;
  const panelBorder = isDarkBehind
    ? "rgba(255,255,255,.12)"
    : "rgba(0,0,0,.12)";
  const panelTextClass = linkColorClass; // same contrast rule

  return (
    <Fragment>
      {/* FIXED BAR */}
      <motion.div
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Smoothly animate header background color */}
        <motion.header
          className="h-16 md:h-20 w-full flex justify-between items-center px-8 md:px-20"
          initial={false}
          animate={{ backgroundColor: headerBG }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className={`w-[50px] h-[50px] mt-[10px] mb-[10px] ml-[10px] transition duration-300 ${
                isDarkBehind ? "invert" : ""
              }`}
            />
          </a>

          {/* Hamburger */}
          <button
            className={`nav__hamburger ${navActive ? "active" : ""} xl:hidden`}
            onClick={toggleNav}
            aria-label="Toggle navigation"
            aria-expanded={navActive}
          >
            <span className={`block w-8 h-0.5 ${barColorClass} mb-1 transition-colors duration-300 ${navActive ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`block w-8 h-0.5 ${barColorClass} mb-1 transition-all duration-300 ${navActive ? "opacity-0" : "opacity-100"}`} />
            <span className={`block w-8 h-0.5 ${barColorClass} transition-colors duration-300 ${navActive ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>

          {/* Links / Panel */}
          <motion.ul
            /* Mobile: absolute panel, Desktop (xl): inline list */
            className={`${
              navActive
                ? "block absolute right-8 top-16 md:top-20 rounded-xl p-5 border backdrop-blur-sm"
                : "hidden"
            } xl:flex xl:items-center xl:gap-6 xl:ml-auto xl:static xl:p-0 xl:border-0 xl:rounded-none xl:backdrop-blur-0
            font-regular text-base transition-colors duration-300 ${linkColorClass}`}
            /* Animate background/border/text ONLY while the panel is open (mobile).
               On desktop (xl) navActive is false, so these styles don't affect the inline list. */
            initial={false}
            animate={
              navActive
                ? {
                    backgroundColor: panelBG,
                    color: isDarkBehind ? "#FFFFFF" : "#111111",
                    borderColor: panelBorder,
                    boxShadow:
                      isDarkBehind
                        ? "0 10px 30px rgba(0,0,0,.35)"
                        : "0 10px 30px rgba(0,0,0,.15)",
                  }
                : { backgroundColor: "rgba(0,0,0,0)", borderColor: "rgba(0,0,0,0)" }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {["Home", "Skills", "Projects", "Let's Talk"].map((item) => (
              <li
                key={item}
                className={`p-1 font-pop rounded-2xl transition-all hover:translate-y-[-1px] ${panelTextClass}`}
              >
                <ScrollLink
                  to={item}
                  spy
                  smooth
                  offset={-88}
                  duration={500}
                  onClick={closeMenu}
                  className={`cursor-pointer px-2 py-1 rounded-xl relative ${panelTextClass}
                    transition-colors duration-300
                    hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500`}
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </motion.ul>
        </motion.header>
      </motion.div>

      {/* Spacer below fixed bar */}
      <div className="h-16 md:h-20" aria-hidden />
    </Fragment>
  );
};

export default Nav;
