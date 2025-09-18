// src/Components/FadeSection.jsx
import React, { forwardRef, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Fades the whole section in/out based on scroll WITHOUT moving it.
 * Also forwards `theme` to a `data-theme` attribute for your navbar color logic.
 */
function FadeSectionBase(
  { children, className = "", theme, style, ...rest },
  refFromParent
) {
  const localRef = useRef(null);
  const ref = refFromParent || localRef;

  const { scrollYProgress } = useScroll({
    target: ref,
    // Slightly more forgiving window than before
    offset: ["-10% 85%", "90% -5%"],
  });

  // Smooth, subtle: fully visible through the middle, fades at top/bottom
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.1, 1, 1, 0.1]
  );
  return (
    <motion.section
      ref={ref}
      data-theme={theme} // 👈 important for your navbar theme detector
      style={{ opacity, willChange: "opacity", ...style }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

const FadeSection = forwardRef(FadeSectionBase);
export default FadeSection;
