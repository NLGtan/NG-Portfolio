import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Blob } from '../Components/blobs/Blob1';
import pic from "./img/homeimg.png";

export const Home = () => {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();
  const controlsButton = useAnimation();

  useEffect(() => {
    // Automatically slide-in all elements on page load
    controlsText.start({
      x: 0, // Slide in from left
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
    controlsImage.start({
      x: 0, // Slide in from right
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
    controlsButton.start({
      x: 0, // Slide in from left
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut"},
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Slide-out effect for all elements when scrolling down
      if (scrollY > 100) {
        controlsText.start({
          x: -200, // Slide out to the left
          opacity: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        });
        controlsImage.start({
          x: 200, // Slide out to the right
          opacity: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        });
        controlsButton.start({
          x: -100, // Slide out to the left
          opacity: 0,
          transition: { duration: 0.7, ease: "easeInOut" },
        });
      } else {
        // Slide back in when scrolling up
        controlsText.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeInOut" },
        });
        controlsImage.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeInOut" },
        });
        controlsButton.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut"},
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controlsText, controlsImage, controlsButton]);

  return (
    <section className="w-full">
      <div id="Home" className="absolute top-0"></div>
      {/* Text Animation */}
      <motion.div
        className='hero absolute bottom-[400px] left-[150px]'
        animate={controlsText}
        initial={{ x: -200, opacity: 0 }} // Start off-screen with opacity 0
      >
        <h1 className='hero1 font-pop font-bold text-7xl'>
          Hi! I'm{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Neithan
          </span>
        </h1>
        <motion.div
          className='hero2 absolute top-[80px] w-[500px] h-[50px]'
          animate={controlsText}
          initial={{ x: -200, opacity: 0 }} // Paragraph also slides in and fades in
        >
          <p className='font-pop'>
            A{" "}
            <span className="font-bold">passionate full stack developer</span>{" "}
            with a knack for crafting seamless, user-friendly digital
            experiences. Explore my work and see how I can bring your vision to
            life.
          </p>
        </motion.div>

        {/* Button Animation */}
        <motion.button
          className="hero3 font-pop font-bold absolute top-[170px] no-underline text-black border-2 border-black rounded-[30px] px-[34px] py-[15px] text-[15px] bg-transparent cursor-pointer shadow-[1px_4px_5px_0px_rgba(197,197,197,1)] transition-all duration-500 hover:bg-gradient-to-r hover:from-[#ED738F] hover:to-[#AB45CA] hover:text-white hover:border-transparent"
          animate={controlsButton}
          initial={{ x: -200, opacity: 0 }} // Start off-screen to the left
        >
          Download CV
        </motion.button>

      </motion.div>

      {/* Image Pop-Out Effect */}
      <motion.img
        src={pic}
        className="img1 ml-[1000px] mt-[150px] z-10 w-[400px] h-[400px] animate-levitate2"
        alt=""
        animate={controlsImage}
        initial={{ x: 200, opacity: 0 }} // Start off-screen to the right
      />

        <Blob/>

    </section>
  );
};
