import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({
  children,
  as = "button",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative inline-flex items-center justify-center overflow-hidden  font-ral font-bold 
      text-[#fdfff8] 
      bg-[#473d3d] 
      rounded-full
      px-6 sm:px-8 md:px-8 lg:px-10 xl:px-7 2xl:px-[2.3rem]
      py-3 sm:py-4 md:py-5 lg:py-6 xl:py-4 2xl:py-[1.5rem]
      text-xs sm:text-sm md:text-[0.7rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]"
      {...props}
    >
      {/* Default State Text */}
      <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
        {children}
      </span>

      {/* Animated Overlay */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-r from-[#ED738F] to-[#AB45CA]"
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        variants={{
          hidden: {
            clipPath: `circle(0% at ${mousePosition.x}px ${mousePosition.y}px)`,
            transition: { duration: 0.5, ease: "easeOut" },
          },
          visible: {
            clipPath: `circle(150% at ${mousePosition.x}px ${mousePosition.y}px)`,
            transition: { duration: 0.5, ease: "easeIn" },
          },
        }}
      />
    </MotionComponent>
  );
};

export default AnimatedButton;
