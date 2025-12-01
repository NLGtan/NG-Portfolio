import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import pic from "./img/homeimg.jpg";
import arrow from "./img/right-arrow.png";
import logo from "../Components/img/logo.png";
import Intro from "../Components/Intro";

export const Home = () => {
  const main = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: main,
    offset: ["start start", "end start"],
  });

  // Add spring for smooth scroll animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Outro scroll animations for content
  const y = useTransform(smoothProgress, [0, 0.5], [0, 150]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.9]);
  const headerYRaw = useTransform(scrollYProgress, [0, 0.1], [0, -100]);
  const headerOpacityRaw = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const headerY = useSpring(headerYRaw, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const headerOpacity = useSpring(headerOpacityRaw, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const links = [
    { label: "services", to: "Services" },
    { label: "projects", to: "Projects1" },
    { label: "about", to: "About1" },
    { label: "Let's Talk.", to: "Let's Talk1" },
  ];

  // Intro animations
  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 2 },
    },
  };

  const letterVariants = {
    hidden: { y: 160, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageContainerVariants = {
    hidden: { clipPath: "inset(0% 0% 100% 0%)" },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1, ease: [0.65, 0, 0.35, 1], delay: 2 },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2 },
    visible: {
      scale: 1,
      transition: { duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 2 },
    },
  };

  const slideUpVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (custom) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 2.2 + custom * 0.2,
      },
    }),
  };

  const arrowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 2.2 },
    },
  };

  return (
    <section
      id="Home"
      ref={main}
      className="relative z-0 bg-[#fdfff8] md:h-[100vh] h-[130vh]"
    >
      <Intro />
      <div className="w-full h-screen flex flex-col items-center sticky top-0 px-4 sm:px-8 md:px-0">
        {/* Header */}
        <motion.header
          style={{ y: headerY, opacity: headerOpacity }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          className=" fixed top-0 left-0 w-full z-[200] flex justify-between items-start md:items-center px-4 sm:px-8 md:px-[2.6rem] bg-transparent py-4 sm:py-6 "
        >
          {/* Logo */}{" "}
          <a href="/">
            {" "}
            <img
              src={logo}
              alt="Logo"
              className="w-[50px] h-[50px] transition duration-300"
            />{" "}
          </a>
          {/* Nav Links Container */}
          <div className="flex md:items-center">
            {" "}
            <ul className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
              {" "}
              {links.map((item) => (
                <li key={item.label}>
                  {" "}
                  <ScrollLink
                    to={item.to}
                    spy
                    smooth
                    offset={-88}
                    duration={500}
                    className={
                      item.label === "Let's Talk."
                        ? `cursor-pointer px-4 py-2 rounded-full bg-neutral-800 text-white border border-neutral-800 transition-all duration-300 hover:bg-white hover:text-black shadow-md hover:shadow-xl`
                        : `cursor-pointer px-2 py-1 rounded-xl text-black transition-colors duration-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500`
                    }
                  >
                    {" "}
                    {item.label}{" "}
                  </ScrollLink>{" "}
                </li>
              ))}{" "}
            </ul>{" "}
          </div>{" "}
        </motion.header>

        {/* Title */}
        <motion.div style={{ y, opacity }} className="w-full">
          <div className="overflow-hidden">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={titleContainerVariants}
              className="w-full text-left md:text-center font-ral font-bold tracking-tight 
             xs:mt-[10rem] 1xs:mt-[8rem] sm:mt-[6rem] md:mt-[6rem] lg:mt-[6rem] xl:mt-[6rem] 2xl:mt-[6rem] 
             md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-5
             text-[11vw] md:text-[9.9vw] lg:text-[10.1vw] xl:text-[10.2vw] 2xl:text-[10.3vw]
             leading-tight md:leading-none md:whitespace-nowrap"
            >
              {["NEITHAN", "GABORNE"].map((word, wIndex) => (
                <span
                  key={wIndex}
                  className={`block md:inline-block ${
                    wIndex === 1 ? "-mt-[2vw] md:mt-0" : ""
                  } leading-[1] md:leading-none`}
                >
                  {/* Desktop-only space BEFORE the 2nd word */}
                  {wIndex === 1 && (
                    <span className="hidden md:inline">&nbsp;</span>
                  )}

                  {word.split("").map((letter, lIndex) => (
                    <motion.span
                      key={lIndex}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 items-end gap-10 md:gap-16 w-full max-w-[90rem]">
          {/* Left Column */}
          <motion.div
            style={{ y, opacity }}
            className="space-y-6 flex flex-col items-start text-left 
    xs:max-w-[50vw]
    1xs:max-w-[50vw]
    sm:max-w-[40vw]    
    md:max-w-[50vw]
    lg:max-w-[40vw]
    xl:max-w-[32vw]
    2xl:max-w-[60vw] 
    md:mx-[3vw] lg:mx-[3vw] xl:mx-10 2xl:mx-0 xl:mb-6 2xl:mb-5"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={arrowVariants}
              className="w-7 h-7 mb-5 bg-neutral-500 hidden md:block"
              style={{
                WebkitMaskImage: `url(${arrow})`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                WebkitMaskPosition: "center",
              }}
            ></motion.div>

            <div className="overflow-hidden">
              <motion.p
                initial="hidden"
                animate="visible"
                custom={0}
                variants={slideUpVariants}
                className="font-ral font-regular text-lg xs:text-[0.7rem] 1xs:text-[0.8rem] sm:text-[1rem] md:text-[0.9rem] lg:text-[1.1rem] xl:text-[1.3rem] 2xl:text-[1.5rem] text-neutral-700"
              >
                A{" "}
                <span className="font-bold">
                  passionate full stack developer
                </span>{" "}
                with a knack for crafting seamless, user-friendly digital
                experiences. Explore my work and see how I can bring your vision
                to life.
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <a href="/resume.html" target="_blank" rel="noopener noreferrer">
                <motion.button
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  variants={slideUpVariants}
                  className="
      font-ral font-bold 
      text-[#fdfff8] 
      bg-[#473d3d] 
      rounded-full
      px-6 sm:px-8 md:px-8 lg:px-10 xl:px-7 2xl:px-[2.3rem]
      py-3 sm:py-4 md:py-5 lg:py-6 xl:py-4 2xl:py-[1.5rem]
      text-xs sm:text-sm md:text-[0.7rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
      hover:bg-gradient-to-r hover:from-[#ED738F] hover:to-[#AB45CA]
      hover:text-white hover:border-transparent
      transition-colors duration-500
    "
                >
                  RESUME
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Center Column */}
          <motion.div
            style={{ y, opacity, scale }}
            className="flex justify-start md:justify-center"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageContainerVariants}
              className="overflow-hidden"
            >
              <motion.img
                variants={imageVariants}
                src={pic}
                alt="Portrait"
                className="h-[100px] md:h-[330px] xl:h-[300px] 2xl:h-[380px]
                xl:mb-[60px] 2xl:mb-[0px]  
                object-contain drop-shadow-lg rounded-lg "
              />
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            style={{ y, opacity }}
            className="
    flex flex-col items-end text-right space-y-4
    ml-auto mr-2 sm:mr-4 mx-0
    -mt-[8rem] sm:-mt-[9rem] md:mt-0
    max-w-[90%] sm:max-w-sm md:max-w-md 
    md:mx-[2rem] lg:mx-[2rem] xl:mx-[3rem] 2xl:mx-0
    self-start md:self-end
    xl:mb-6 2xl:mb-0
  "
          >
            <div className="overflow-hidden">
              <motion.p
                initial="hidden"
                animate="visible"
                custom={2}
                variants={slideUpVariants}
                className="
        font-inc font-medium 
        text-sm sm:text-base md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl
        text-neutral-700
      "
              >
                AVAILABLE FOR WORK
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial="hidden"
                animate="visible"
                custom={3}
                variants={slideUpVariants}
                className="
        font-ral font-bold 
        text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl
        text-neutral-700
      "
              >
                NOV'18
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
