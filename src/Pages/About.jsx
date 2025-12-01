
import React from "react";
import { motion, useInView } from "framer-motion";
import pic from "./img/homeimg.jpg";

const About = () => {
  const targetRef = React.useRef(null);
  const isInView = useInView(targetRef, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
    },
  };

  return (
    <section
      id="About"
      ref={targetRef}
      className="relative bg-[#171717] text-white py-20 pb-64"
    >
      <motion.div
        id="About1"
        className="container mx-auto px-4 sm:px-6 lg:px-0"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className="font-sat font-thin text-5xl md:text-7xl lg:text-8xl text-center mb-10 md:mb-16 pt-10 pb-10"
        >
          ABOUT ME
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-6 items-center">
          <motion.div
            variants={imageVariants}
            className="w-[24rem] h-auto"
          >
            <img
              src={pic}
              alt="About Me"
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            className="flex flex-col justify-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-2xl font-semibold font-sat leading-tight mb-8">
              I'm a Full Stack Developer driven by a passion for turning ideas into
              clean, intuitive digital experiences.
            </h1>
            <div className="grid grid-cols-[max-content_1fr] gap-x-8 items-start">
              <h2 className="font-inc text-sm font-semibold tracking-widest uppercase text-gray-400">
                (ABOUT ME)
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-loose">
                I am a passionate Full Stack Developer with a knack for building
                full-stack web applications using modern technologies like
                Next.js and Tailwind CSS. My journey in tech began with a
                curiosity for solving real-world problems through innovative
                solutions, which evolved into a love for crafting user-centric
                digital experiences.
                <br />
                <br />
                Beyond coding, I thrive in collaborative environments and enjoy
                tackling challenging problems with creative solutions. I aim to
                contribute to impactful projects that make a difference in
                users' lives.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
