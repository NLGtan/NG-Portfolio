import React from "react";
import { motion } from "framer-motion";
import FadeSection from "../Components/FadeSection";
import { Blob2 } from "../Components/blobs/Blob2";
import { Blob3 } from "../Components/blobs/Blob3";

import img1 from "./img/skillimg1.png";
import img2 from "./img/skillimg2.png";

import py from "./img/Python.png";
import js from "./img/js.png";
import html from "./img/html.png";
import css from "./img/css.png";
import re from "./img/React.png";
import md from "./img/Mongodb.png";
import fig from "./img/Figma.png";
import fm from "./img/framer.png";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const slideLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};
const slideRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export function Skills() {
  return (
    <>
      {/* ============== SKILLS (dark page) ============== */}
      <FadeSection
        id="Skills"
        theme="dark"
        className="full-bleed bg-[#171717] text-white scroll-mt-24"
        /* —— TWEAK KNOBS for this page —— */
        style={{
          "--padY": "clamp(16rem, 6vw, 8rem)", // vertical padding
          "--colGap": "clamp(2.5rem, 5vw, 8rem)", // column gap
          "--imgMax": "340px", // image desktop cap
          "--imgVW": "40vw", // image fluid width
          "--maxW": "1200px", // grid max width
          "--textPadL": "clamp(0rem, 4vw, 2.5rem)", // extra left pad on text

          // NEW: per-section nudgers (image + blob)
          "--imgOffsetX": "0px",
          "--imgOffsetY": "0px",
          "--blobOffsetX": "0px",
          "--blobOffsetY": "0px",
          "--blobScale": "1",
        }}
      >
        <div className="container relative min-h-[calc(100svh-var(--nav-h))] py-[var(--padY)]">
          <motion.h1
            className="font-sat font-thin text-5xl md:text-7xl lg:text-8xl text-center mb-10 md:mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
          >
            SKILLS
          </motion.h1>

          <div
            className="
              grid items-center
              gap-10 md:gap-[var(--colGap)]
              md:grid-cols-2
              justify-items-center md:justify-items-start
              text-center md:text-left
              mx-auto
            "
            style={{ maxWidth: "var(--maxW)" }}
          >
            {/* Left — text */}
            <div className="space-y-6 max-w-[48ch] lg:pl-[var(--textPadL)]">
              <motion.h3
                className="font-sat font-bold text-3xl md:text-4xl lg:text-5xl"
                variants={slideLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
              >
                my expertise.
              </motion.h3>

              <motion.p
                className="font-sat text-base md:text-lg text-neutral-200"
                variants={slideLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
              >
                I specialize in building scalable web applications from the
                ground up. My skill set spans front-end technologies like HTML,
                CSS, and JavaScript frameworks, as well as back-end development
                with Node.js, Python, and database management.
              </motion.p>

              <motion.ul
                className="font-sat font-bold text-2xl md:text-3xl space-y-3 pt-2"
                variants={slideLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
              >
                {[
                  "Web Development",
                  "Web Design",
                  "UI/UX Design",
                  "Full Stack Dev",
                  "ML/AI",
                ].map((item) => (
                  <li
                    key={item}
                    className="font-pop text-neutral-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 transform hover:translate-x-3 transition-all duration-300"
                  >
                    {item}
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Right — image + blob (with offsets) */}
            <motion.div
              className="relative flex justify-center"
              variants={slideRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* non-animated wrapper that we nudge */}
              <div
                className="
                  relative flex justify-center
                  /* mobile: keep centered (no offsets) */
                  [--imgOffsetX:0px] [--imgOffsetY:0px]
                  [--blobOffsetX:0px] [--blobOffsetY:0px] [--blobScale:1]
                  /* desktop: gentle nudges */
                  md:[--imgOffsetX:0.75rem] md:[--imgOffsetY:0rem]
                  md:[--blobOffsetX:0rem] md:[--blobOffsetY:0.5rem] md:[--blobScale:1.08]
                  lg:[--imgOffsetX:8rem] lg:[--blobOffsetY:0.75rem]
                "
                style={{
                  transform: `translate(var(--imgOffsetX), var(--imgOffsetY))`,
                  willChange: "transform",
                }}
              >
                <img
                  src={img1}
                  alt="Skills visual"
                  className="
                    z-10
                    /* smaller cap on phones; fluid+cap from md */
                    w-[min(50vw,var(--imgMax))] md:w-[min(var(--imgVW),var(--imgMax))]
                    h-auto object-contain
                    animate-levitate2
                  "
                />

                {/* Blob with its own offset/scale */}
                <div
                  className="absolute -z-10 inset-0 flex items-center justify-center pointer-events-none"
                  style={{
                    transform: `translate(var(--blobOffsetX), var(--blobOffsetY)) scale(var(--blobScale))`,
                    willChange: "transform",
                  }}
                >
                  <Blob2 />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </FadeSection>

      {/* ============== TOOLBOX (light page) ============== */}
      <FadeSection
        id="Toolbox"
        theme="light"
        className="full-bleed bg-white text-black relative"
        /* —— TWEAK KNOBS for this page —— */
        style={{
          "--padY": "clamp(16rem, 6vw, 8rem)",
          "--colGap": "clamp(2.5rem, 5vw, 8rem)",
          "--imgMax": "340px",
          "--imgVW": "40vw",
          "--maxW": "1200px",
          "--textPadL": "clamp(0rem, 4vw, 2.5rem)",

          // NEW: per-section nudgers (image + blob)
          "--imgOffsetX": "0px",
          "--imgOffsetY": "0px",
          "--blobOffsetX": "0px",
          "--blobOffsetY": "0px",
          "--blobScale": "1",
        }}
      >
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

        <div className="container min-h-[calc(100svh-var(--nav-h))] py-[var(--padY)]">
          <div
            className="
              grid items-center
              gap-12 md:gap-[var(--colGap)]
              md:grid-cols-2
              justify-items-center md:justify-items-start
              text-center md:text-left
              mx-auto
            "
            style={{ maxWidth: "var(--maxW)" }}
          >
            {/* Left — image + blob (with offsets) */}
            <motion.div
              className="relative flex justify-center order-last md:order-first"
              variants={slideLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* non-animated wrapper that we nudge */}
              <div
                className="
                  relative flex justify-center
                  [--imgOffsetX:0px] [--imgOffsetY:0px]
                  [--blobOffsetX:0px] [--blobOffsetY:0px] [--blobScale:1]
                  md:[--imgOffsetX:-0.5rem] md:[--imgOffsetY:0rem]
                  md:[--blobOffsetX:-0.25rem] md:[--blobOffsetY:0.5rem] md:[--blobScale:1.06]
                  lg:[--imgOffsetX:2rem] lg:[--blobOffsetY:0.75rem]
                "
                style={{
                  transform: `translate(var(--imgOffsetX), var(--imgOffsetY))`,
                  willChange: "transform",
                }}
              >
                <img
                  src={img2}
                  alt="Toolbox visual"
                  className="
                    z-10
                    w-[min(50vw,var(--imgMax))] md:w-[min(var(--imgVW),var(--imgMax))]
                    h-auto object-contain
                    animate-levitate4
                  "
                />

                <div
                  className="absolute -z-10 inset-0 flex items-center justify-center pointer-events-none"
                  style={{
                    transform: `translate(var(--blobOffsetX), var(--blobOffsetY)) scale(var(--blobScale))`,
                    willChange: "transform",
                  }}
                >
                  <Blob3 />
                </div>
              </div>
            </motion.div>

            {/* Right — tools */}
            <div className="space-y-6 max-w-[60ch] lg:pl-[var(--textPadL)]">
              <motion.h3
                className="font-sat font-bold text-3xl md:text-4xl lg:text-5xl"
                variants={slideRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
              >
                my digital tool box.
              </motion.h3>

              <motion.p
                className="font-sat text-base md:text-lg lg:text-xl text-neutral-700"
                variants={slideRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
              >
                A curated set of tools to streamline full-stack development—from
                front-end design to back-end infrastructure and deployment.
              </motion.p>

              <motion.div
                variants={slideRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  <ul className="space-y-4">
                    {[
                      { img: py, label: "Python", lev: "animate-levitate1" },
                      {
                        img: js,
                        label: "JavaScript",
                        lev: "animate-levitate2",
                      },
                      { img: html, label: "HTML", lev: "animate-levitate1" },
                      { img: css, label: "CSS", lev: "animate-levitate2" },
                    ].map(({ img, label, lev }) => (
                      <li
                        key={label}
                        className="icon flex items-center gap-3 md:gap-4 pb-1 font-pop text-neutral-500 font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 transform hover:translate-x-3 transition-all duration-300"
                      >
                        <img
                          src={img}
                          alt={label}
                          className={`w-12 h-12 md:w-14 md:h-14 object-contain ${lev}`}
                        />
                        {label}
                      </li>
                    ))}
                  </ul>

                  <ul className="space-y-4">
                    {[
                      { img: re, label: "React", lev: "animate-levitate2" },
                      { img: md, label: "MongoDB", lev: "animate-levitate1" },
                      { img: fig, label: "Figma", lev: "animate-levitate2" },
                      {
                        img: fm,
                        label: "Framer Motion",
                        lev: "animate-levitate1",
                      },
                    ].map(({ img, label, lev }) => (
                      <li
                        key={label}
                        className="icon flex items-center gap-3 md:gap-4 pb-1 font-pop text-neutral-500 font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 transform hover:translate-x-3 transition-all duration-300"
                      >
                        <img
                          src={img}
                          alt={label}
                          className={`w-12 h-12 md:w-14 md:h-14 object-contain ${lev}`}
                        />
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </FadeSection>
    </>
  );
}
