import React from "react";

const Steps = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 font-sans">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-[2.75rem] text-gray-900 leading-[1.2] tracking-tight">
          Your Smart Laptop Rental <br />
          Journey in Three Steps
        </h2>
      </div>

      {/* Steps Container */}
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        {/* Step 1 */}
        <div className="bg-primary text-white rounded-[2rem] p-8 md:p-10 w-full min-h-[280px] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-[1.75rem] font-medium">Step 1:</h3>
            <h4 className="text-2xl md:text-[1.75rem] font-medium">
              Choose Your Ideal Laptop
            </h4>
          </div>
          <p className="text-base font-light opacity-90 leading-relaxed max-w-3xl mt-12">
            Browse our curated collection of high-performance laptops designed
            for students, professionals, and businesses. Filter by specs,
            performance needs, and rental duration to find your perfect match.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-accent text-white rounded-[2rem] p-8 md:p-10 w-full min-h-[280px] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-[1.75rem] font-medium">Step 2:</h3>
            <h4 className="text-2xl md:text-[1.75rem] font-medium">
              Customize & Confirm Your Plan
            </h4>
          </div>
          <p className="text-base font-light opacity-90 leading-relaxed max-w-3xl mt-12">
            Select your rental duration, upgrade specifications if needed, and
            confirm your booking in minutes. Our flexible plans ensure you only
            pay for what you truly need.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-secondary text-gray-800 rounded-[2rem] p-8 md:p-10 w-full min-h-[280px] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-[1.75rem] font-medium">Step 3:</h3>
            <h4 className="text-2xl md:text-[1.75rem] font-medium">
              Fast Delivery & Ongoing Support
            </h4>
          </div>
          <p className="text-base font-light opacity-90 leading-relaxed max-w-3xl mt-12">
            Receive your laptop at your doorstep with secure delivery and easy
            setup guidance. Our dedicated support team stays available
            throughout your rental period for any assistance or upgrades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
