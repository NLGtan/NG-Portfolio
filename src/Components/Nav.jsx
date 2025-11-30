import React, { useEffect, useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavMenu from "./NavMenu";

export const Nav = () => {
  // --- CONFIGURATION ---
  const iconSize = 60;
  // -------------------

  const [navActive, setNavActive] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [invertColors, setInvertColors] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateNavState = () => {
      const skillsSection = document.getElementById("Skills");
      const toolboxSection = document.getElementById("Toolbox");
      const contactSection = document.getElementById("Let's Talk");

      if (skillsSection) {
        const skillsTop = skillsSection.getBoundingClientRect().top;
        setIsHomePage(skillsTop > 0);
      }

      const toolboxBounds = toolboxSection
        ? toolboxSection.getBoundingClientRect()
        : null;
      const contactBounds = contactSection
        ? contactSection.getBoundingClientRect()
        : null;

      let shouldInvert = false;
      if (
        toolboxBounds &&
        toolboxBounds.top < 100 &&
        toolboxBounds.bottom > 100
      ) {
        shouldInvert = true;
      }
      if (contactBounds && contactBounds.top < 100) {
        shouldInvert = true;
      }
      setInvertColors(shouldInvert);
    };

    updateNavState();
    window.addEventListener("scroll", updateNavState, { passive: true });
    return () => window.removeEventListener("scroll", updateNavState);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (navActive) {
      html.classList.add("body-no-scroll");
    } else {
      html.classList.remove("body-no-scroll");
    }
    return () => {
      html.classList.remove("body-no-scroll");
    };
  }, [navActive]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setNavActive(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const toggleNav = () => setNavActive((v) => !v);

  const circleSize = 15;
  const gap = 12;
  const dotPositions = [
    { top: gap, left: gap }, // 0: Top-Left
    { top: gap, left: iconSize - gap - circleSize }, // 1: Top-Right
    { top: iconSize - gap - circleSize, left: iconSize - gap - circleSize }, // 2: Bottom-Right
    { top: iconSize - gap - circleSize, left: gap }, // 3: Bottom-Left
  ];

  return (
    <Fragment>
      <motion.div
        className="fixed top-9 right-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHomePage ? 0 : 1,
          opacity: isHomePage ? 0 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Hamburger Menu Icon */}
        <div
          className="relative cursor-pointer"
          style={{ width: iconSize, height: iconSize }}
          onClick={toggleNav}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ backgroundColor: invertColors ? "#000000" : "#FFFFFF" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          {dotPositions.map((_, i) => {
            const defaultPosition = dotPositions[i];
            // On hover, move to the position of the previous dot in the array (counter-clockwise)
            const hoverPosition = dotPositions[i === 0 ? 3 : i - 1];

            return (
              <motion.div
                key={i}
                style={{
                  width: circleSize,
                  height: circleSize,
                  position: "absolute",
                  borderRadius: "50%",
                }}
                animate={{
                  top: isHovered ? hoverPosition.top : defaultPosition.top,
                  left: isHovered ? hoverPosition.left : defaultPosition.left,
                  scale: navActive ? 0.6 : 1,
                  backgroundColor: invertColors ? "#FFFFFF" : "#000000",
                }}
                transition={{
                  top: { type: "spring", stiffness: 300, damping: 20 },
                  left: { type: "spring", stiffness: 300, damping: 20 },
                  scale: { type: "spring", stiffness: 400, damping: 25 },
                  backgroundColor: { duration: 0.3, ease: "easeInOut" },
                }}
              />
            );
          })}
        </div>
      </motion.div>

      {/* Full-screen Navigation Menu */}
      <AnimatePresence>
        {navActive && <NavMenu setNavActive={setNavActive} />}
      </AnimatePresence>
    </Fragment>
  );
};

export default Nav;
