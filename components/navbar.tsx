"use client";

import { SearchIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-2">
      <div className="flex items-center justify-between">
        <div className="">
          <div className="flex gap-3 md:gap-5">
            <div className="w-10 h-8 md:w-12 md:h-10 flex justify-center items-center bg-primary shrink-0">
              <span className="text-white text-2xl font-semibold">LR</span>
            </div>
            <div className="italic text-xs md:text-sm">
              <p>Get your dream laptop on rent at ease</p>
              <p className="block tracking-tight sm:tracking-normal">
                Best prices, flexible plans, and doorstep delivery
              </p>
            </div>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex space-x-3">
          <Link
            href={"/"}
            className="uppercase px-5 flex items-center bg-accent text-white rounded-full transition-all border-2 duration-300 cursor-pointer border-accent"
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="uppercase px-5 flex items-center hover:bg-accent hover:text-white rounded-full border-2 transition-all duration-300 cursor-pointer hover:border-accent"
          >
            Laptops
          </Link>
          <Link
            href={"/"}
            className="uppercase px-5 flex items-center hover:bg-accent hover:text-white rounded-full border-2 transition-all duration-300 cursor-pointer hover:border-accent"
          >
            Desktop
          </Link>
          <Link
            href={"/"}
            className="uppercase px-3 flex items-center hover:bg-accent hover:text-white rounded-full border-2 transition-all duration-300 cursor-pointer hover:border-accent"
          >
            Services
          </Link>
          <Link
            href={"/"}
            className="uppercase px-3 flex items-center rounded-full border-2 transition-all duration-300 cursor-pointer"
          >
            <SearchIcon />
          </Link>
          <Link
            href={"/"}
            className="uppercase px-5 py-2 bg-primary text-white rounded-full border-2 transition-all duration-300 cursor-pointer border-primary"
          >
            Register
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className={`h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-0.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2 py-2">
          <Link
            href={"/"}
            className="uppercase px-5 py-2 bg-accent text-white rounded-full transition-all border-2 duration-300 cursor-pointer border-accent text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="uppercase px-5 py-2 hover:bg-accent hover:text-white rounded-full border-2 transition-all duration-300 cursor-pointer hover:border-accent text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Laptops
          </Link>
          <Link
            href={"/"}
            className="uppercase px-5 py-2 hover:bg-accent hover:text-white rounded-full border-2 transition-all duration-300 cursor-pointer hover:border-accent text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Desktop
          </Link>
          <Link
            href={"/"}
            className="uppercase px-5 py-2 hover:bg-accent hover:text-white rounded-full border-2 transition-all duration-300 cursor-pointer hover:border-accent text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href={"/"}
            className="uppercase px-5 py-2 rounded-full border-2 transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <SearchIcon /> Search
          </Link>
          <Link
            href={"/"}
            className="uppercase px-5 py-2 bg-primary text-white rounded-full border-2 transition-all duration-300 cursor-pointer border-primary text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
