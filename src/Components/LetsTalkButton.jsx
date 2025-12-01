import React, { useState } from "react";
import { motion } from "framer-motion";

const LetsTalkButton = ({
  children,
  as = "div", // Default to div, can be overridden
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-flex items-center justify-center overflow-hidden px-4 py-2 rounded-full bg-neutral-800 text-white"
      {...props}
    >
      {/* Text */}
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        {children}
      </span>

      {/* Animated Overlay */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-r from-[#ED738F] to-[#AB45CA]"
        variants={{
          hidden: {
            clipPath: "circle(0% at 50% 100%)",
          },
          visible: {
            clipPath: "circle(150% at 50% 100%)",
          },
        }}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </MotionComponent>
  );
};

export default LetsTalkButton;
