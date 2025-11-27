// src/Pages/SkillsIntro.jsx
import React from "react";
import { motion } from "framer-motion";
import { Blob2 } from "../Components/blobs/Blob2";

import img1 from "./img/skillimg1.png";

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

export default function SkillsIntro() {
  return (
    <section
      theme="dark"
      className="full-bleed bg-[#171717] text-white scroll-mt-24"
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
      <div className="container relative min-h-[calc(100svh-var(--nav-h))] py-[var(--padY)]">
        <motion.h1
          id="Skills"
          className="font-sat font-thin text-5xl md:text-7xl lg:text-8xl text-center mb-10 md:mb-16 pt-10"
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
          {/* Left text */}
          <div className="space-y-6 max-w-none lg:pl-[var(--textPadL)]">
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
              I specialize in building modern, scalable digital products across
              web, mobile, and emerging technologies. My expertise spans
              end-to-end development—from crafting intuitive UI/UX experiences
              to developing robust full-stack applications. I work with
              front-end technologies, back-end systems, mobile frameworks, and
              Web3 tools to create user-centric and high-performance solutions.
            </motion.p>

            <motion.ul
              className="font-sat font-bold text-2xl md:text-3xl space-y-3 pt-2 md:ml-10"
              variants={slideLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
            >
              {[
                "Web Development",
                "Mobile Development",
                "Web3/Blockchain",
                "Full Stack Developer",
                "UI/UX Design",
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

          {/* Right — image + blob */}
          <motion.div
            className="relative flex justify-center"
            variants={slideRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div
              className="
                relative flex justify-center
                [--imgOffsetX:0px] [--imgOffsetY:0px]
                [--blobOffsetX:0px] [--blobOffsetY:0px] [--blobScale:1]
                md:[--imgOffsetX:0.75rem]
                md:[--blobOffsetY:0.5rem] md:[--blobScale:1.08]
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
                  w-[min(50vw,var(--imgMax))]
                  md:w-[min(var(--imgVW),var(--imgMax))]
                  h-auto object-contain animate-levitate2
                "
              />

              <div
                className="absolute -z-10 inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  transform: `translate(var(--blobOffsetX), var(--blobOffsetY)) scale(var(--blobScale))`,
                }}
              >
                <Blob2 />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
