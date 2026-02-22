import React from "react";
import { Laptop, Truck, Headphones, ArrowUpRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Laptop className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Instant Booking Assistance",
      description:
        "Browse our extensive collection and book your perfect laptop instantly with our seamless online platform.",
      bgColor: "bg-[#FF5A36]", // Matched the orange from your image
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
      title: "Full Year Wise Support ",
      description:
        "Access round-the-clock customer support for any queries, technical issues, or assistance you need.",
      bgColor: "bg-[#FF5A36]",
    },
  ];

  return (
    <section className="w-full pb-8">
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl px-6 py-6 md:px-10 md:py-8 border-2 flex flex-col group cursor-pointer h-full"
          >
            <div className="flex flex-col justify-between flex-grow">
              <div>
                {/* Icon */}
                <div
                  className={`${service.bgColor} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white mb-4`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2 md:mb-4 leading-tight pr-2 md:pr-4 max-w-xs">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed mt-6 md:mt-10">
                {service.description}
              </p>
            </div>

            {/* Arrow Icon */}
            <div className="mt-6 md:mt-auto self-end">
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-gray-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;