// src/Pages/Projects.jsx
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { projects } from "../data/projectsData";

// entrance anim (your original)
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Reusable card/row with "pull" effect on scroll
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
  const rowRef = useRef(null);
  const prefersReduced = useReducedMotion();

  // Track this row in the viewport
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start 0.85", "end 0.15"], // plays nice with FadeSection
  });

  // Parallax mappings
  const imgYRaw = useTransform(scrollYProgress, [0, 0.5, 1], [30, -10, -30]);
  const metaYRaw = useTransform(scrollYProgress, [0, 0.5, 1], [20, -6, -20]);
  const scaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0.988, 1.015, 0.988]);

  // Springs (reduced motion fallback)
  const imgY = useSpring(prefersReduced ? 0 : imgYRaw, { stiffness: 180, damping: 18, mass: 0.35 });
  const metaY = useSpring(prefersReduced ? 0 : metaYRaw, { stiffness: 190, damping: 20, mass: 0.35 });
  const scale = useSpring(prefersReduced ? 1 : scaleRaw, { stiffness: 160, damping: 22, mass: 0.4 });

  return (
    <motion.article
      ref={rowRef}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeUp}
      style={{ scale, willChange: "transform" }}
      className={`
        grid items-center gap-8 md:gap-12 transform-gpu
        md:grid-cols-2
        ${flip ? "md:[&>div:nth-child(1)]:order-2 md:[&>div:nth-child(2)]:order-1" : ""}
      `}
    >
      {/* Visual */}
      <motion.div
        style={{ y: imgY, willChange: "transform" }}
        className="group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10"
      >
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} – open live`}
          className="focus:outline-none focus-visible:outline-none"
        >
          <img
            src={img}
            alt={title}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04] will-change-transform"
            loading="lazy"
          />
        </a>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </motion.div>

      {/* Meta */}
      <motion.div style={{ y: metaY, willChange: "transform" }} className="space-y-4 transform-gpu">
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
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition focus:outline-none focus-visible:outline-none"
            >
              Live <span aria-hidden>↗</span>
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition focus:outline-none focus-visible:outline-none"
            >
              Code <span aria-hidden>⌁</span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.article>
  );
}

// 👇 Named export only (no default at bottom)
export function Projects() {
  return (
    <section
      data-theme="dark" // FadeSection writes data-theme for your navbar
      className="full-bleed bg-[#171717] text-white scroll-mt-24 pt-24 pb-64"
      style={{
        "--padY": "clamp(6rem, 6vw, 8rem)",
        "--maxW": "1100px",
        "--rowGap": "clamp(8rem, 4vw, 8rem)",
      }}
    >
      <div className="container py-[var(--padY)]" style={{ maxWidth: "var(--maxW)" }}>
        <motion.h1
          id="Projects"
          className="font-sat font-thin text-5xl md:text-7xl lg:text-8xl text-center mb-12 md:mb-16 pt-8 pb-14"
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
    </section>
  );
}
