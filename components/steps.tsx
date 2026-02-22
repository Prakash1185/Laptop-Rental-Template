import React from "react";

const Steps = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 font-sans">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-[2.75rem] text-gray-900 leading-[1.2] tracking-tight">
          Your Smart Dental Care <br />
          Journey in Three Steps
        </h2>
      </div>

      {/* Steps Container text-left but centered block */}
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        {/* Step 1 */}
        <div className="bg-primary text-white rounded-[2rem] p-8 md:p-10 w-full min-h-[280px] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-[1.75rem] font-medium ">Step 1:</h3>
            <h4 className="text-2xl md:text-[1.75rem] font-medium">
              Book Your Appointment
            </h4>
          </div>
          <p className="text-base font-light opacity-90 leading-relaxed max-w-3xl mt-12">
            Use our advanced AI scheduler to effortlessly find the perfect time
            for your dental visit. Our intelligent system analyzes your
            preferences and clinic availability.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-accent text-white rounded-[2rem] p-8 md:p-10 w-full min-h-[280px] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-[1.75rem] font-medium ">Step 2:</h3>
            <h4 className="text-2xl md:text-[1.75rem] font-medium">
              Get AI-Driven Care
            </h4>
          </div>
          <p className="text-base font-light opacity-90 leading-relaxed max-w-3xl mt-12">
            During your visit, our cutting-edge smart tools actively assist our
            dental professionals in comprehensive diagnostics. This
            state-of-the-art technology guarantees unparalleled precision in
            identifying issues.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-secondary text-gray-800 rounded-[2rem] p-8 md:p-10 w-full min-h-[280px] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-[1.75rem] font-medium">Step 3:</h3>
            <h4 className="text-2xl md:text-[1.75rem] font-medium">
              Receive Follow-Up Support
            </h4>
          </div>
          <p className="text-base font-light opacity-90 leading-relaxed max-w-3xl mt-12">
            After your checkup, our platform continues to support your oral
            health journey. You will receive tailored post-care recommendations,
            timely appointment reminders, and personalized daily care tips—all
            seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
