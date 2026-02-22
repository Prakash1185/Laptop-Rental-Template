import React from 'react';

const GridShow = () => {
  return (
    <div className="w-full py-16 font-google-sans ">
      
      {/* Top Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
        
        {/* Left Card: Main Image */}
        {/* Adjusted to be shorter on mobile, then scale up */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[480px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative shadow-sm">
          <img
            src="/hero.jpg"
            alt="Professional working on a laptop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Card: Context & CTA */}
        {/* Changed from fixed h to min-h on mobile, and dynamic padding */}
        <div className="bg-[#edf5fc] rounded-[1.5rem] sm:rounded-[2rem] p-8 sm:p-10 md:p-14 flex flex-col justify-center items-start shadow-sm min-h-[350px] md:h-[480px]">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-4 sm:mb-5">
            Equip Your Team <br className="hidden sm:block" />
            With Premium Laptops.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-sm leading-relaxed">
            From short-term projects to long-term deployments, renting top-tier hardware is essential to maintain workflow efficiency.
          </p>
          <button className="bg-accent text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-wider hover:bg-accent/90 transition-all shadow-md mt-auto sm:mt-0 w-full sm:w-auto">
            RENT A LAPTOP NOW
          </button>
        </div>
        
      </div>

      {/* Bottom Grid Section (4 Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 px-4">
        
        {/* Column 1: MacBooks */}
        <div className="flex flex-col">
          {/* Overlapping Avatars */}
          <div className="flex mb-4 sm:mb-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-white bg-gray-200 overflow-hidden relative z-20 shadow-sm">
               <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&q=80" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-white bg-gray-200 overflow-hidden relative z-10 -ml-3 sm:-ml-4 shadow-sm">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">MacBooks Pro & Air</h3>
          <p className="text-gray-500 text-sm leading-relaxed pr-2">
            Your go-to choice for creative professionals, developers, and those who demand seamless ecosystem integration.
          </p>
        </div>

        {/* Column 2: Windows Workstations */}
        <div className="flex flex-col">
          {/* 3 Overlapping Avatars */}
          <div className="flex mb-4 sm:mb-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-white bg-gray-200 overflow-hidden relative z-30 shadow-sm">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-white bg-gray-200 overflow-hidden relative z-20 -ml-3 sm:-ml-4 shadow-sm">
               <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-white bg-gray-200 overflow-hidden relative z-10 -ml-3 sm:-ml-4 shadow-sm">
               <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">Windows Workstations</h3>
          <p className="text-gray-500 text-sm leading-relaxed pr-2">
            Experts in heavy computing, data analysis, and running enterprise applications with uncompromising power.
          </p>
        </div>

        {/* Column 3: Gaming Laptops */}
        <div className="flex flex-col">
          <div className="flex mb-4 sm:mb-5">
             <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-white bg-gray-200 overflow-hidden relative z-20 shadow-sm">
               <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-white bg-gray-200 overflow-hidden relative z-10 -ml-3 sm:-ml-4 shadow-sm">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">Gaming Laptops</h3>
          <p className="text-gray-500 text-sm leading-relaxed pr-2">
            High-refresh-rate screens and dedicated GPUs tailored for intense graphical tasks and smooth rendering.
          </p>
        </div>

        {/* Column 4: Business Notebooks */}
        <div className="flex flex-col">
          <div className="flex mb-4 sm:mb-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-white bg-gray-200 overflow-hidden relative z-20 shadow-sm">
               <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">Business Notebooks</h3>
          <p className="text-gray-500 text-sm leading-relaxed pr-2">
            Specializing in lightweight designs, extended battery life, and security features for the on-the-go professional.
          </p>
        </div>

      </div>
    </div>
  );
};

export default GridShow;
