import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  // This will remove the component from the DOM after the animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1500); // Matches the animation duration

    return () => clearTimeout(timer);
  }, []);

  const introVariants = {
    hidden: {
      clipPath: "circle(0% at 50% 100%)",
    },
    visible: {
      clipPath: "circle(150% at 50% 100%)",
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  if (animationComplete) {
    return null;
  }

  return (
    <>
      {/* Black background, stays behind */}
      <div className="fixed top-0 left-0 w-full h-full bg-black z-[99]" />
      {/* White expanding circle, reveals the content */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-[#fdfff8] z-[100]"
        initial="hidden"
        animate="visible"
        variants={introVariants}
      />
    </>
  );
};

export default Intro;
