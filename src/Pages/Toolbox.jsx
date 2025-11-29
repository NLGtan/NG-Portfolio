// src/Pages/Toolbox.jsx
import React from "react";
import { motion } from "framer-motion";
import { Blob3 } from "../Components/blobs/Blob3";

import img2 from "./img/skillimg2.png";
import py from "./img/Python.png";
import js from "./img/js.png";
import html from "./img/html.png";
import css from "./img/css.png";
import re from "./img/React.png";
import md from "./img/Mongodb.png";
import fig from "./img/Figma.png";
import fm from "./img/framer.png";

const slideLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};
const slideRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function Toolbox() {
  return (
    <section
      id="Toolbox"
      data-theme="light"
      className="full-bleed bg-[#fdfff8] text-black relative"
      style={{
        "--padY": "clamp(16rem, 6vw, 8rem)",
        "--colGap": "clamp(2.5rem, 5vw, 8rem)",
        "--imgMax": "340px",
        "--imgVW": "40vw",
        "--maxW": "1200px",
        "--textPadL": "clamp(0rem, 4vw, 2.5rem)",
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
          {/* Left — image */}
          <motion.div
            className="relative flex justify-center order-last md:order-first"
            variants={slideLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div
              className="
                relative flex justify-center
                [--imgOffsetX:0px] [--imgOffsetY:0px]
                [--blobOffsetX:0px] [--blobOffsetY:0px] [--blobScale:1]
                md:[--imgOffsetX:-0.5rem]
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
                  w-[min(50vw,var(--imgMax))]
                  md:w-[min(var(--imgVW),var(--imgMax))]
                  h-auto object-contain animate-levitate4
                "
              />

              <div
                className="absolute -z-10 inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  transform: `translate(var(--blobOffsetX), var(--blobOffsetY)) scale(var(--blobScale))`,
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
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 sm:ml-16 md:ml-0">
                {[
                  { img: py, label: "Python", lev: "animate-levitate1" },
                  { img: js, label: "JavaScript", lev: "animate-levitate2" },
                  { img: html, label: "HTML", lev: "animate-levitate1" },
                  { img: css, label: "CSS", lev: "animate-levitate2" },
                  { img: re, label: "React", lev: "animate-levitate2" },
                  { img: md, label: "MongoDB", lev: "animate-levitate1" },
                  { img: fig, label: "Figma", lev: "animate-levitate2" },
                  { img: fm, label: "Framer Motion", lev: "animate-levitate1" },
                ].map(({ img, label, lev }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 sm:gap-3 md:gap-4 pb-2
                      font-pop text-neutral-500 font-semibold
                      hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500
                      transform hover:translate-x-1 sm:hover:translate-x-2 md:hover:translate-x-3
                      transition-all duration-300
                      text-sm sm:text-base md:text-lg"
                  >
                    <img
                      src={img}
                      alt={label}
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 object-contain ${lev}`}
                    />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </section>
  );
}
