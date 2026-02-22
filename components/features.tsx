"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/* === Curtain System (Same Language As Hero/Mission) === */

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <span className={className}>
      {text.split(" ").map((word, idx, arr) => (
        <React.Fragment key={idx}>
          <span className="inline-block overflow-hidden pb-1 -mb-1">
            <motion.span
              variants={wordVariants}
              className="inline-block origin-top-left"
            >
              {word}
            </motion.span>
          </span>
          {idx < arr.length - 1 && " "}
        </React.Fragment>
      ))}
    </span>
  );
};

const Features = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const maxScrollLeft = current.scrollWidth - current.clientWidth;

      const cardWidth =
        current.children[0]?.clientWidth || current.offsetWidth / 2;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      if (direction === "right") {
        if (Math.ceil(current.scrollLeft) >= maxScrollLeft - 10) {
          current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      } else {
        if (current.scrollLeft <= 10) {
          current.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
        } else {
          current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      }
    }
  };
  const features = [
    {
      title: "Smart Laptop Selection And Configuration",
      description:
        "Get customized laptop recommendations with real-time AI tracking for faster, more accurate results.",
      image: "/hero.jpg",
    },
    {
      title: "Smart AI Performance Design For Perfect Results",
      description:
        "Visualize your new setup instantly using intelligent, personalized 3D previews before any rental begins.",
      image: "/hero2.jpg",
    },
    {
      title: "Seamless Doorstep Delivery & Setup",
      description:
        "Enjoy hassle-free delivery and professional setup right at your doorstep, ensuring you're ready to work instantly.",
      image: "/hero4.jpg",
    },
    {
      title: "Smart Laptop Selection And Configuration",
      description:
        "Get customized laptop recommendations with real-time AI tracking for faster, more accurate results.",
      image: "/hero.jpg",
    },
    {
      title: "Smart AI Performance Design For Perfect Results",
      description:
        "Visualize your new setup instantly using intelligent, personalized 3D previews before any rental begins.",
      image: "/hero2.jpg",
    },
    {
      title: "Seamless Doorstep Delivery & Setup",
      description:
        "Enjoy hassle-free delivery and professional setup right at your doorstep, ensuring you're ready to work instantly.",
      image: "/hero4.jpg",
    },
  ];
  return (
    <section className="w-full bg-primary px-5 sm:px-8 md:px-10 py-10 md:py-16 rounded-xl">
      {/* Header Section with Curtain Reveal */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-6"
      >
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light max-w-2xl leading-tight">
          <AnimatedText text="Personalized Care Through" />
          <br className="hidden md:block" />
          <AnimatedText text="Smart Technology" />
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-primary shrink-0"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Cards Container (Unchanged) */}
      <div
        ref={scrollContainerRef}
        className="flex flex-row gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-3 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 w-[85vw] sm:w-[400px] md:w-[600px] lg:w-[calc(55%-1rem)] snap-center shrink-0 min-h-[auto] md:min-h-[420px]"
          >
            {/* Text Content */}
            <div className="flex flex-col justify-between md:w-[40%] order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight mb-4 md:mb-0">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full md:w-[55%] h-[240px] md:h-[340px] lg:h-[380px] rounded-xl overflow-hidden shrink-0 order-1 md:order-2">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
