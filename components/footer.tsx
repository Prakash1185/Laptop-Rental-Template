import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full rounded-xl px-4 pt-20 pb-8 font-google-sans bg-white text-gray-900 border-t border-gray-100">
      
      {/* Top Section: Heading and Pill Navigation */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20">
        
        {/* Left Side: Location & Heading */}
        <div className="flex flex-col items-start max-w-md">
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.15]">
            Ready To Elevate Your Workflow?
          </h2>
        </div>

        {/* Right Side: Navigation Pills */}
        <div className="flex flex-wrap gap-3 max-w-xl lg:justify-end">
          {/* Active Link (Solid Background) */}
          <Link
            href="/"
            className="uppercase px-5 py-2.5 text-xs font-medium flex items-center bg-accent text-white rounded-full border-2 border-accent transition-all duration-300 cursor-pointer"
          >
            Home
          </Link>
          
          {/* Requested Link Style for the rest */}
          <Link
            href="/services"
            className="uppercase px-5 py-2.5 text-xs font-medium flex items-center text-gray-600 hover:bg-accent hover:text-white rounded-full border-2 border-gray-200 transition-all duration-300 cursor-pointer hover:border-accent"
          >
            Services
          </Link>
          <Link
            href="/rentals"
            className="uppercase px-5 py-2.5 text-xs font-medium flex items-center text-gray-600 hover:bg-accent hover:text-white rounded-full border-2 border-gray-200 transition-all duration-300 cursor-pointer hover:border-accent"
          >
            Laptops
          </Link>
          <Link
            href="/tech"
            className="uppercase px-5 py-2.5 text-xs font-medium flex items-center text-gray-600 hover:bg-accent hover:text-white rounded-full border-2 border-gray-200 transition-all duration-300 cursor-pointer hover:border-accent"
          >
            Technology
          </Link>
          <Link
            href="/portal"
            className="uppercase px-5 py-2.5 text-xs font-medium flex items-center text-gray-600 hover:bg-accent hover:text-white rounded-full border-2 border-gray-200 transition-all duration-300 cursor-pointer hover:border-accent"
          >
            IT Portal
          </Link>
          <Link
            href="/testimonials"
            className="uppercase px-5 py-2.5 text-xs font-medium flex items-center text-gray-600 hover:bg-accent hover:text-white rounded-full border-2 border-gray-200 transition-all duration-300 cursor-pointer hover:border-accent"
          >
            Testimonial
          </Link>
          <Link
            href="/contact"
            className="uppercase px-5 py-2.5 text-xs font-medium flex items-center text-gray-600 hover:bg-accent hover:text-white rounded-full border-2 border-gray-200 transition-all duration-300 cursor-pointer hover:border-accent"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Middle Section: Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg text-gray-900 mb-2">Company</h4>
          <Link href="/about" className="text-gray-500 hover:text-accent transition-colors text-sm">About Us</Link>
          <Link href="/team" className="text-gray-500 hover:text-accent transition-colors text-sm">Meet Our Team</Link>
          <Link href="/locations" className="text-gray-500 hover:text-accent transition-colors text-sm">Hub Locations</Link>
          <Link href="/reviews" className="text-gray-500 hover:text-accent transition-colors text-sm">Testimonials</Link>
          <Link href="/careers" className="text-gray-500 hover:text-accent transition-colors text-sm">Careers</Link>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg text-gray-900 mb-2">Rental Services</h4>
          <Link href="/mac" className="text-gray-500 hover:text-accent transition-colors text-sm">MacBook Fleets</Link>
          <Link href="/windows" className="text-gray-500 hover:text-accent transition-colors text-sm">Windows Workstations</Link>
          <Link href="/gamers" className="text-gray-500 hover:text-accent transition-colors text-sm">High-Performance GPUs</Link>
          <Link href="/accessories" className="text-gray-500 hover:text-accent transition-colors text-sm">Monitors & Docks</Link>
          <Link href="/bulk" className="text-gray-500 hover:text-accent transition-colors text-sm">Enterprise Bulk Orders</Link>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg text-gray-900 mb-2">Support</h4>
          <Link href="/contact" className="text-gray-500 hover:text-accent transition-colors text-sm">Contact Us</Link>
          <Link href="/book" className="text-gray-500 hover:text-accent transition-colors text-sm">Request Quote</Link>
          <Link href="/faq" className="text-gray-500 hover:text-accent transition-colors text-sm">FAQ</Link>
          <Link href="/insurance" className="text-gray-500 hover:text-accent transition-colors text-sm">Damage & Insurance</Link>
          <Link href="/login" className="text-gray-500 hover:text-accent transition-colors text-sm">Admin Login</Link>
        </div>



      </div>

      {/* Bottom Section: Copyright & Legal */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-4">
        <p className="text-gray-500 text-xs sm:text-sm">
          © 2026. All Rights Reserved. 
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/terms" className="text-gray-500 hover:text-accent transition-colors text-xs sm:text-sm">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="text-gray-500 hover:text-accent transition-colors text-xs sm:text-sm">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="text-gray-500 hover:text-accent transition-colors text-xs sm:text-sm">
            Cookie Policy
          </Link>
        </div>
      </div>
    <p className='text-center text-gray-600/80 text-sm mt-5'>Site inspiration is taken from various resources available on internet</p>
    </footer>
  );
};

export default Footer;
