"use client";

import React from "react";
import { motion } from "framer-motion";

/* ===== Curtain System ===== */

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const wordVariants = {
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

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <>
      {text.split(" ").map((word, i, arr) => (
        <React.Fragment key={i}>
          <span className="inline-block overflow-hidden pb-1 -mb-1">
            <motion.span
              variants={wordVariants}
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
};

const Reviews = () => {
  return (
    <div className="w-full py-16 font-google-sans">
      
      <div className="flex flex-col md:flex-row w-full rounded-[2rem] overflow-hidden shadow-lg">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-primary relative flex justify-center items-end pt-16 px-8 min-h-[400px] md:min-h-[500px]">
          
          <div className="relative w-full max-w-[280px] bg-white rounded-t-[2.5rem] sm:rounded-t-[3rem] border-[8px] sm:border-[12px] border-b-0 border-gray-800 translate-y-[5%] shadow-2xl overflow-hidden shadow-black/20">
            
            <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-gray-800 rounded-full z-10"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=400&q=80" 
              alt="Dashboard App Confirmation" 
              className="w-full h-[500px] object-cover object-top"
            />
          </div>

        </div>

        {/* Right Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="w-full md:w-1/2 bg-accent text-white p-10 sm:p-14 md:p-16 lg:p-20 flex flex-col justify-center min-h-[400px] md:min-h-[500px] z-20"
        >
          
          {/* Reviewer Info */}
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <div className="w-14 h-14 rounded-full border-2 border-white/30 overflow-hidden shadow-sm flex-shrink-0 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" 
                alt="Sarah Jenkins" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <h4 className="font-medium text-lg sm:text-xl tracking-wide">
                <AnimatedText text="Sarah Jenkins" />
              </h4>
              <p className="text-white/80 text-sm font-light mt-0.5">
                <AnimatedText text="CTO, TechFlow Startup" />
              </p>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-[1.35rem] sm:text-2xl md:text-[1.75rem] mb-12 sm:mb-16 tracking-wide">
            <AnimatedText text='I was nervous about renting a fleet of laptops for our new hires, but the smart portal made everything smooth and precise. Fast delivery, zero hassle, and the hardware performed flawlessly out of the box!' />
          </p>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 mt-auto md:mt-0">
            <button 
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous Review"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/>
              </svg>
            </button>
            
            <button 
              className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Next Review"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Reviews;