
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";

const Tooltip = ({ children, content }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  // Spring for smooth movement
  const springConfig = { damping: 20, stiffness: 300 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  // Transform to apply an offset from the cursor
  const tooltipX = useTransform(mouseX, (val) => val - 20);
  const tooltipY = useTransform(mouseY, (val) => val - 50);

  const handleMouseMove = (e) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset position
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={ref}
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.1 }}
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                x: tooltipX, // Use transformed motion value
                y: tooltipY, // Use transformed motion value
            }}
            className="font-pop font-semibold px-3.5 py-2.5 bg-black text-white text-base 
            rounded-3xl shadow-lg whitespace-nowrap pointer-events-none"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
