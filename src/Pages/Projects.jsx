import React from "react";
import { motion } from "framer-motion";
import FadeSection from "../Components/FadeSection";
import { projects } from "../data/projectsData";

// Anim
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// One reusable card/row
function FeaturedProject({
  title,
  year,
  role,
  img,
  live,
  repo,
  description,
  stack = [],
  flip = false,
}) {
  return (
    <motion.article
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeUp}
      className={`
        grid items-center gap-8 md:gap-12
        md:grid-cols-2
        ${flip ? "md:[&>div:nth-child(1)]:order-2 md:[&>div:nth-child(2)]:order-1" : ""}
      `}
    >
      {/* Visual */}
      <div className="group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
        <a href={live} target="_blank" rel="noopener noreferrer" aria-label={`${title} – open live`}>
          <img
            src={img}
            alt={title}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
        </a>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Meta */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-sm text-[#A1A1A1]">
          <span className="border border-[#A1A1A1] rounded-full px-3 py-1">{year}</span>
          {stack.length > 0 && (
            <span className="border border-[#A1A1A1] rounded-full px-3 py-1">
              {stack.join(" • ")}
            </span>
          )}
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
        {role && <p className="text-base text-neutral-300">{role}</p>}
        {description && (
          <p className="text-base text-neutral-300 max-w-prose">{description}</p>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pt-1">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              Live
              <span aria-hidden>↗</span>
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              Code
              <span aria-hidden>⌁</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <FadeSection
      id="Projects"
      data-theme="dark"
      className="full-bleed bg-[#171717] text-white scroll-mt-24 pt-24 pb-64"
      // Optional “knobs” you can tweak per-page:
      style={{
        "--padY": "clamp(6rem, 6vw, 8rem)",   // top/bottom padding
        "--maxW": "1100px",                   // container max width
        "--rowGap": "clamp(8rem, 4vw, 8rem)", // gap between projects
      }}
    >
      <div
        className="container py-[var(--padY)]"
        style={{ maxWidth: "var(--maxW)" }}
      >
        <motion.h1
          className="font-sat font-thin text-5xl md:text-7xl text-center mb-12 md:mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          PROJECTS
        </motion.h1>

        <div className="grid gap-[var(--rowGap)]">
          {projects.map((p) => (
            <FeaturedProject key={p.title} {...p} />
          ))}
        </div>
      </div>
    </FadeSection>
  );
}
