"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// 1. The container coordinates the stagger timing
const containerVariants = {
  hidden: { opacity: 1 }, // Note: Container itself doesn't fade, the masks handle visibility
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger speed between words
      delayChildren: 0.2,   // Wait a moment for background to start scaling
    },
  },
};

// 2. The Curtain Pull-up Effect
const wordVariants = {
  // Start pushed down exactly its own height, hidden by the parent's overflow mask
  hidden: { y: "100%", rotateZ: 5 }, // Added a tiny 5-degree rotation for that exact agency "swing" up
  show: {
    y: "0%",
    rotateZ: 0,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 14,
      mass: 1,
    },
  },
};

// 3. The AnimatedText Helper (Now creates individual line-masks for each word!)
const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split(" ").map((word, idx, arr) => (
        <React.Fragment key={idx}>
          {/* This outer span acts as the "window" or "mask" */}
          <span className="inline-block overflow-hidden pb-1 -mb-1"> 
            <motion.span 
              variants={wordVariants} 
              // inline-block is required so transforms apply correctly
              className="inline-block origin-top-left" 
            >
              {word}
            </motion.span>
          </span>
          {/* Preserves normal space between words */}
          {idx < arr.length - 1 && " "}
        </React.Fragment>
      ))}
    </span>
  );
};

// Main Component
const HeroSection = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden mt-4 sm:mt-8">
      
      {/* Background Cinematic Zoom */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }} 
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero4.jpg"
          alt="Laptop rental service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      {/* Content Container (Wraps the text components to trigger stagger) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative h-full flex flex-col justify-end px-4 sm:px-6 md:px-10 z-10"
      >
        {/* Subtitle */}
        <p className="text-white/90 text-xs sm:text-sm md:text-base mb-1 sm:mb-2 font-light">
          <AnimatedText text="Affordable, flexible, and convenient—" />
          <br className="hidden sm:block" />
          <AnimatedText text="powered by quality devices and trusted by professionals." />
        </p>

        {/* Main Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light max-w-5xl mb-8 sm:mb-10 md:mb-12">
          <AnimatedText text="Instant Laptop" />
          <br />
          <AnimatedText text="Rental Service" />
          <br />
          <AnimatedText className="" text="Using Smart Solutions" />
        </h1>
      </motion.div>
      
    </section>
  );
};

export default HeroSection;
