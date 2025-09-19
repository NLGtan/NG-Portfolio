import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import FadeSection from "../Components/FadeSection";
import { Blob } from "../Components/blobs/Blob1";
import pic from "./img/homeimg.png";

export const Home = () => {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();
  const controlsButton = useAnimation();

  useEffect(() => {
    controlsText.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    controlsImage.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    controlsButton.start({ x: 0, opacity: 1, transition: { duration: 0.6 } });

    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 250) {
        controlsText.start({
          x: -200,
          opacity: 0,
          transition: { duration: 0.8 },
        });
        controlsImage.start({
          x: 200,
          opacity: 0,
          transition: { duration: 0.8 },
        });
        controlsButton.start({
          x: -100,
          opacity: 0,
          transition: { duration: 0.7 },
        });
      } else {
        controlsText.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
        controlsImage.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.8 },
        });
        controlsButton.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.5 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controlsText, controlsImage, controlsButton]);

  return (
    <FadeSection
      id="About me"
      theme="light"
      className="
    full-bleed bg-white
    md:min-h-[calc(100svh-var(--nav-h))]
    flex md:items-center
    scroll-mt-24
    pb-12
  "
    >
      <div
        className="
          container
          grid md:grid-cols-2
          gap-12 md:gap-20
          items-center
          place-items-center
          md:py-0 pt-24 pb-64
        "
      >
        {/* === Text side === */}
        <motion.div
          animate={controlsText}
          initial={{ x: -200, opacity: 0 }}
          className="
            space-y-6 
            flex flex-col justify-center 
            items-center md:items-start 
            text-center md:text-left 
            max-w-xl md:max-w-2xl
            mx-auto
          "
        >
          <h1 className="font-pop font-bold text-4xl md:text-6xl lg:text-7xl">
            Hi! I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Neithan
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-700 max-w-lg md:max-w-xl">
            A <span className="font-bold">passionate full stack developer</span>{" "}
            with a knack for crafting seamless, user-friendly digital
            experiences. Explore my work and see how I can bring your vision to
            life.
          </p>

          <motion.button
            animate={controlsButton}
            initial={{ x: 0, opacity: 0 }}
            className="
              font-pop font-bold no-underline text-black 
              border-2 border-black rounded-full 
              px-8 py-3 text-sm md:text-base 
              bg-transparent cursor-pointer shadow 
              transition-all duration-500 
              hover:bg-gradient-to-r hover:from-[#ED738F] hover:to-[#AB45CA] 
              hover:text-white hover:border-transparent
            "
          >
            Download CV
          </motion.button>
        </motion.div>

        {/* === Image side === */}
        <motion.div
          animate={controlsImage}
          initial={{ x: 200, opacity: 0 }}
          className="relative flex justify-center items-center"
        >
          <img
            src={pic}
            alt="Portrait"
            className="
              z-10 
              w-[min(38vw,420px)]
              h-auto max-w-[320px]
              object-contain 
              animate-levitate2
            "
          />
          <Blob />
        </motion.div>
      </div>
    </FadeSection>
  );
};
