import React from "react";
import Image from "next/image";

const MissionSection = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-0">
      <div className="bg-primary rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-10 lg:p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 lg:gap-12">
          
          {/* Profile Card */}
          <div className="hidden flex-shrink-0 text-center md:text-left">
            <div className="flex flex-col text-white items-center md:items-start">
              
              {/* Profile Image */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden mb-2">
                <Image
                  src="/person.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-sm md:text-base lg:text-lg">
                John Anderson
              </h3>
              <p className="text-xs md:text-sm">
                Founder
              </p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-white/30 self-stretch min-h-[120px]" />

          {/* Mission Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-white text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl leading-relaxed md:leading-10 lg:leading-11 tracking-wide font-light">
              Our mission is to provide cutting-edge technology with flexible rental solutions, making premium laptops more accessible, affordable, and perfectly suited for every professional and student. Lorem ipsum, dolor sit amet consectetur.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;