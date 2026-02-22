"use client";

import React from "react";
import { Laptop, Truck, Headphones, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

/* Parent stagger system */
const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/* Card mask reveal (curtain lift style, no bounce) */
const cardVariants = {
  hidden: {
    y: "8%",
    opacity: 0,
  },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const, // cinematic ease
    },
  },
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Laptop className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Instant Booking Assistance",
      description:
        "Browse our extensive collection and book your perfect laptop instantly with our seamless online platform.",
      bgColor: "bg-[#FF5A36]",
    },
    {
      icon: <Truck className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Doorstep Delivery Provided",
      description:
        "Get your chosen laptop delivered right to your doorstep with fast and secure shipping services.",
      bgColor: "bg-[#FF5A36]",
    },
    {
      icon: <Headphones className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Full Year Wise Support",
      description:
        "Access round-the-clock customer support for any queries, technical issues, or assistance you need.",
      bgColor: "bg-[#FF5A36]",
    },
  ];

  return (
    <section className="w-full pb-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
      >
        {services.map((service, index) => (
          <div key={index} className="overflow-hidden">
            {/* Mask wrapper */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-xl px-6 py-6 md:px-10 md:py-8 border-2 flex flex-col h-full"
            >
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <div
                    className={`${service.bgColor} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white mb-4`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2 md:mb-4 leading-tight pr-2 md:pr-4 max-w-xs">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed mt-6 md:mt-10">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 md:mt-auto self-end">
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-gray-900 opacity-70" />
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;