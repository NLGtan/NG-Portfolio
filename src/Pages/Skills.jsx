import React from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { Blob2 } from "../Components/blobs/Blob2";
import img1 from "./img/skillimg1.png";

export default function Skills() {
  const targetRef = React.useRef(null);
  const isInView = useInView(targetRef, { once: false, amount: 0.3 });

  // Heavy scroll effect
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(smoothScrollYProgress, [0, 1], [0, -250]); // Adjust the -250 to make it feel heavier or lighter

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section
      ref={targetRef}
      className="relative z-10 bg-[#171717] text-white rounded-t-[40px] shadow-2xl pt-[8rem]"
    >
      <motion.div   
        id="Services"
        style={{ y }} // Apply the heavy scroll effect here
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container relative min-h-screen py-16"
      >
        <motion.h1
          id="Skills"
          variants={itemVariants}
          className="font-sat font-thin text-5xl md:text-7xl lg:text-8xl text-center mt-12 mb-10 md:mb-16 pb-10"
        >
          SERVICES
        </motion.h1>

        <div
          className="
            grid items-center
            gap-10 md:gap-24
            md:grid-cols-2
            justify-items-center md:justify-items-start
            text-center md:text-left
            mx-auto max-w-6xl
          "
        >
          {/* Left text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="font-sat font-bold text-3xl md:text-4xl lg:text-5xl">
              my expertise.
            </h3>

            <p className="font-sat text-base md:text-lg text-neutral-200">
              I specialize in building modern, scalable digital products across
              web, mobile, and emerging technologies. My expertise spans
              end-to-end development—from crafting intuitive UI/UX experiences
              to developing robust full-stack applications. I work with
              front-end technologies, back-end systems, mobile frameworks, and
              Web3 tools to create user-centric and high-performance solutions.
            </p>

            <motion.ul
              variants={listVariants}
              className="font-sat font-bold text-2xl md:text-3xl space-y-3 pt-2 md:ml-10"
            >
              {[
                "Web Development",
                "Mobile Development",
                "Web3/Blockchain",
                "Full Stack Developer",
                "UI/UX Design",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  className="font-pop text-neutral-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 transform hover:translate-x-3 transition-all duration-300"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right — image + blob */}
          <motion.div
            variants={itemVariants}
            className="relative w-full flex justify-center md:justify-end"
          >
            <div className="relative">
              <motion.img
                src={img1}
                alt="Skills visual"
                className="z-10 w-[15rem] md:w-[340px] h-auto object-contain animate-levitate2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 1, ease: "easeOut" }}
              />

              <div className="absolute -z-10 inset-0 flex items-center justify-center pointer-events-none">
                <Blob2 />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
