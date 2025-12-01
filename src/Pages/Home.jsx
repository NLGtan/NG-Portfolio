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

  // Outro scroll animation for header to scroll up
  const headerY = useTransform(smoothProgress, [0, 0.5], [0, -150]);

  const links = [
    { label: "services", to: "Services" },
    { label: "projects", to: "Projects" },
    { label: "about", to: "About" },
    { label: "Let's Talk.", to: "Let's Talk" },
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
      <div className="w-full h-screen flex flex-col items-center sticky top-0 pt-5">
        {/* Header */}
        <motion.div style={{ y: headerY, opacity }} className="w-full">
          <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
            className="w-full flex flex-col md:flex-row justify-between items-center px-8 md:px-[2.6rem] z-50 bg-[#fdfff8] sticky top-0"
          >
            {/* Logo */}
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="w-[50px] h-[50px] mt-[5px] mb-[5px] transition duration-300"
              />
            </a>

            {/* Nav Links */}
            <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 font-regular text-lg text-black">
              {links.map((item) => (
                <li key={item.label}>
                  <ScrollLink
                    to={item.to}
                    spy
                    smooth
                    offset={-88}
                    duration={500}
                    className={
                      item.label === "Let's Talk."
                        ? `cursor-pointer px-6 py-2 rounded-full bg-neutral-800 text-white border border-neutral-800 transition-all duration-300 hover:bg-white hover:text-black shadow-md hover:shadow-xl`
                        : `cursor-pointer px-2 py-1 rounded-xl text-black transition-colors duration-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500`
                    }
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.header>
        </motion.div>

        {/* Title */}
        <motion.div style={{ y, opacity }} className="w-full">
          <div className="overflow-hidden">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={titleContainerVariants}
              className="w-full text-center font-ral font-bold tracking-tight xl:mb-0 2xl:mb-7
             text-5xl sm:text-6xl md:text-7xl lg:text-[10.3vw] leading-tight"
            >
              {"NEITHAN GABORNE".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block py-1"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 items-end gap-10 md:gap-16 w-full max-w-[90rem]">
          {/* Left Column */}
          <motion.div
            style={{ y, opacity }}
            className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left max-w-sm xl:mx-10 2xl:mx-0 xl:mb-6 2xl:mb-5"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={arrowVariants}
              className="w-7 h-7 mb-5 bg-neutral-500"
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
                className="font-ral font-regular text-lg md:text-[1.3rem] text-neutral-700"
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
              <motion.button
                initial="hidden"
                animate="visible"
                custom={1}
                variants={slideUpVariants}
                className="font-ral font-bold text-[#fdfff8] bg-[#473d3d] rounded-full px-10 py-6 text-sm md:text-lg hover:bg-gradient-to-r hover:from-[#ED738F] hover:to-[#AB45CA] hover:text-white hover:border-transparent transition-colors duration-500"
              >
                DOWNLOAD CV
              </motion.button>
            </div>
          </motion.div>

          {/* Center Column */}
          <motion.div
            style={{ y, opacity, scale }}
            className="flex justify-center"
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
                className="h-[260px] md:h-[330px] xl:h-[300px] 2xl:h-[380px]
                xl:mb-[60px] 2xl:mb-[0px]  
                object-contain drop-shadow-lg rounded-lg "
              />
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            style={{ y, opacity }}
            className="flex flex-col items-center md:items-end text-center md:text-right space-y-4 max-w-md mx-auto xl:mx-auto 2xl:mx-0 xl:mb-6 2xl:mb-0"
          >
            <div className="overflow-hidden">
              <motion.p
                initial="hidden"
                animate="visible"
                custom={2}
                variants={slideUpVariants}
                className="font-inc font-medium text-lg md:text-base text-neutral-700"
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
                className="font-ral font-bold text-lg md:text-8xl text-neutral-700"
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