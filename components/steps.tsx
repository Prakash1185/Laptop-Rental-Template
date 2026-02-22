"use client";

import React from "react";
import { motion } from "framer-motion";

/* =========================
   Curtain Reveal (Header)
========================= */

const headingContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const wordReveal = {
  hidden: { y: "100%", rotateZ: 4 },
  show: {
    y: "0%",
    rotateZ: 0,
    transition: {
      type: "spring" as const,
      stiffness: 65,
      damping: 16,
      mass: 0.9,
    },
  },
};

const AnimatedText = ({ text }: { text: string }) => (
  <>
    {text.split(" ").map((word, i, arr) => (
      <React.Fragment key={i}>
        <span className="inline-block overflow-hidden pb-1 -mb-1">
          <motion.span
            variants={wordReveal}
            className="inline-block origin-top-left"
          >
            {word}
          </motion.span>
        </span>
        {i < arr.length - 1 && " "}
      </React.Fragment>
    ))}
  </>
);

/* =========================
   Agency Card Activation
========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const card = {
  hidden: {},
  show: {},
};

const backgroundReveal = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const contentFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.3,
    },
  },
};

const Steps = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 font-sans">

      {/* ===== HEADER ===== */}
      <motion.div
        variants={headingContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mb-12 md:mb-16 px-3"
      >
        <h2 className="text-4xl md:text-[2.75rem] text-gray-900 leading-[1.2] tracking-tight">
          <AnimatedText text="Your Smart Laptop Rental" />
          <br />
          <AnimatedText text="Journey in Three Steps" />
        </h2>
      </motion.div>

      {/* ===== CARDS ===== */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col space-y-6 max-w-4xl mx-auto"
      >
        {/* STEP 1 */}
        <motion.div variants={card} className="relative overflow-hidden rounded-[2rem]">
          <motion.div
            variants={backgroundReveal}
            className="absolute inset-0 bg-primary origin-bottom"
          />
          <motion.div
            variants={contentFade}
            className="relative text-white p-8 md:p-10 min-h-[280px] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl md:text-[1.75rem] font-medium">Step 1:</h3>
              <h4 className="text-2xl md:text-[1.75rem] font-medium">
                Choose Your Ideal Laptop
              </h4>
            </div>
            <p className="text-base font-light opacity-90 leading-relaxed max-w-3xl mt-12">
              Browse our curated collection of high-performance laptops designed
              for students, professionals, and businesses.
            </p>
          </motion.div>
        </motion.div>

        {/* STEP 2 */}
        <motion.div variants={card} className="relative overflow-hidden rounded-[2rem]">
          <motion.div
            variants={backgroundReveal}
            className="absolute inset-0 bg-accent origin-bottom"
          />
          <motion.div
            variants={contentFade}
            className="relative text-white p-8 md:p-10 min-h-[280px] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl md:text-[1.75rem] font-medium">Step 2:</h3>
              <h4 className="text-2xl md:text-[1.75rem] font-medium">
                Customize & Confirm Your Plan
              </h4>
            </div>
            <p className="text-base font-light opacity-90 leading-relaxed max-w-3xl mt-12">
              Select your rental duration, upgrade specifications if needed,
              and confirm your booking in minutes.
            </p>
          </motion.div>
        </motion.div>

        {/* STEP 3 */}
        <motion.div variants={card} className="relative overflow-hidden rounded-[2rem]">
          <motion.div
            variants={backgroundReveal}
            className="absolute inset-0 bg-secondary origin-bottom"
          />
          <motion.div
            variants={contentFade}
            className="relative text-gray-800 p-8 md:p-10 min-h-[280px] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl md:text-[1.75rem] font-medium">Step 3:</h3>
              <h4 className="text-2xl md:text-[1.75rem] font-medium">
                Fast Delivery & Ongoing Support
              </h4>
            </div>
            <p className="text-base font-light opacity-90 leading-relaxed max-w-3xl mt-12">
              Receive your laptop at your doorstep with secure delivery and easy
              setup guidance.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Steps;