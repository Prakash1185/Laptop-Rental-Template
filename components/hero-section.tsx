import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden mt-4 sm:mt-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero4.jpg"
          alt="Laptop rental service"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end px-4 sm:px-6 md:px-10">
        {/* Subtitle */}
        <p className="text-white/90 text-xs sm:text-sm md:text-base mb-1 sm:mb-2 font-light">
          Affordable, flexible, and convenient—
          <br className="hidden sm:block" />
          powered by quality devices and trusted by professionals.
        </p>

        {/* Main Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light max-w-5xl mb-8 sm:mb-10 md:mb-12">
          Instant Laptop
          <br />
          Rental Service
          <br />
          <span className="">Using Smart Solutions</span>
        </h1>
      </div>

      {/* Side Card */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-6 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16 bg-secondary rounded-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 items-center gap-3 sm:gap-4 max-w-95 md:max-w-xl hidden">
        {/* Text Content */}
        <div className="flex-1 space-y-3 sm:space-y-5">
          <div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-800 mb-1">
              50<span className="text-accent">+</span>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base tracking-tight">
              Happy Customers
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-2 sm:mt-3 inline-block bg-accent hover:bg-accent/90 text-white text-xs md:text-sm px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full transition-all duration-300"
          >
            RENT NOW
          </Link>
        </div>

        {/* Image */}
        <div className="relative w-20 h-28 sm:w-24 sm:h-36 md:w-24 md:h-36 shrink-0">
          <Image
            src="/person.jpg"
            alt="Customer service representative"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
