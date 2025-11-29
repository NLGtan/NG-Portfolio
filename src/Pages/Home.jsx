import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import pic from "./img/homeimg.jpg";
import arrow from "./img/right-arrow.png";

export const Home = () => {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();
  const controlsButton = useAnimation();

  useEffect(() => {
    controlsText.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    controlsImage.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    controlsButton.start({ x: 0, opacity: 1, transition: { duration: 0.6 } });
  }, [controlsButton, controlsImage, controlsText]);

  return (
    <section
      id="Home"
      className="
    bg-[#fdfff8]
    min-h-screen
    flex 
    flex-col
    justify-start
    items-center
    pt-5
    overflow-hidden
  "
    >
      {/* === HEADER TOP === */}
      <motion.h1
        className="
      font-ral font-bold text-neutral-800
      text-5xl md:text-7xl lg:text-[9.6rem]
      leading-tight text-center mb-6
    "
      >
        <motion.span
          className="inline-block mr-7"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          NEITHAN
        </motion.span>
        <motion.span
          className="inline-block"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          GABORNE
        </motion.span>
      </motion.h1>

      {/* === BOTTOM ROW: LEFT · CENTER · RIGHT === */}
      <div
        className="
      grid 
      md:grid-cols-3 
      items-end
      gap-10 md:gap-16
      w-full max-w-[90rem]
    "
      >
        {/* LEFT — DESCRIPTION + BUTTON */}
        <motion.div
          animate={controlsText}
          initial={{ x: -200, opacity: 0 }}
          className="
        space-y-6
        flex flex-col 
        items-center md:items-start
        text-center md:text-left
        max-w-sm mx-auto md:mx-0 mb-5
      "
        >
          <div
            className="w-7 h-7 mb-5 bg-neutral-500"
            style={{
              WebkitMaskImage: `url(${arrow})`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              WebkitMaskPosition: "center",
            }}
          ></div>

          <p className="font-ral font-regular text-lg md:text-[1.3rem] text-neutral-700">
            A <span className="font-bold">passionate full stack developer</span>{" "}
            with a knack for crafting seamless, user-friendly digital
            experiences. Explore my work and see how I can bring your vision to
            life.
          </p>

          <motion.button
            animate={controlsButton}
            initial={{ opacity: 0 }}
            className="
          font-ral font-bold  
          text-[#fdfff8]
          bg-[#473d3d]
          rounded-full 
          px-10 py-6 
          text-sm md:text-lg
          hover:bg-gradient-to-r hover:from-[#ED738F] hover:to-[#AB45CA]
          hover:text-white hover:border-transparent
          transition-all duration-500
        "
          >
            DOWNLOAD CV
          </motion.button>
        </motion.div>

        {/* CENTER — IMAGE */}
        <motion.div
          animate={controlsImage}
          initial={{ x: 200, opacity: 0 }}
          className="flex justify-center"
        >
          <img
            src={pic}
            alt="Portrait"
            className="
          h-[260px] md:h-[330px] lg:h-[380px]
          object-contain 
          drop-shadow-2xl
          rounded-lg
        "
          />
        </motion.div>

        {/* RIGHT — AVAILABILITY */}
        <motion.div
          animate={controlsText}
          initial={{ x: 200, opacity: 0 }}
          className="
        flex flex-col 
        items-center md:items-end
        text-center md:text-right
        space-y-4
        max-w-md mx-auto md:mx-0
      "
        >
          <p className="font-inc font-medium text-lg md:text-base text-neutral-700">
            AVAILABLE FOR WORK
          </p>
          <p className="font-ral font-bold text-lg md:text-8xl text-neutral-700">
            NOV'18
          </p>
        </motion.div>
      </div>
    </section>
  );
};
