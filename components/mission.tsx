"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// 1. Faster, more controlled stagger
const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// 2. Refined “agency” style reveal
const wordVariants = {
  hidden: {
    y: "105%",
    rotateZ: 4,
    filter: "blur(6px)",
    opacity: 0,
  },
  show: {
    y: "0%",
    rotateZ: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 18,
      mass: 0.6,
    },
  },
};

// 3. The Masked AnimatedText Helper
const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split(" ").map((word, idx, arr) => (
        <React.Fragment key={idx}>
          {/* Mask container */}
          <span className="inline-block overflow-hidden pb-2 -mb-2">
            <motion.span 
              variants={wordVariants} 
              className="inline-block origin-top-left"
            >
              {word}
            </motion.span>
          </span>
          {/* Natural word spacing */}
          {idx < arr.length - 1 && " "}
        </React.Fragment>
      ))}
    </span>
  );
};

const MissionSection = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="bg-primary rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-10 lg:p-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 lg:gap-12"
        >
          
          {/* Profile Card */}
          <div className="hidden flex-shrink-0 text-center md:text-left">
            <div className="flex flex-col text-white items-center md:items-start">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden mb-2">
                <Image
                  src="/person.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm md:text-base lg:text-lg">John Anderson</h3>
              <p className="text-xs md:text-sm">Founder</p>
            </div>
          </div>

          <div className="hidden md:block w-px bg-white/30 self-stretch min-h-[120px]" />

          {/* Mission Text with Blurred Reveal */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-white text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl leading-relaxed md:leading-10 lg:leading-11 tracking-wide font-light">
              <AnimatedText 
                text="Our mission is to provide cutting-edge technology with flexible rental solutions, making premium laptops more accessible, affordable, and perfectly suited for every professional and student." 
              />
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
