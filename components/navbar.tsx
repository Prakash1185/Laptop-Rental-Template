"use client";

import { SearchIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // The parent container gets "perspective" so the 3D rotation looks realistic
  const navContainerVariants = {
    hidden: { opacity: 0, perspective: 1000 },
    show: {
      opacity: 1,
      perspective: 1000,
      transition: {
        staggerChildren: 0.1, // slightly longer stagger so you really feel each one load
        delayChildren: 0.1,
      },
    },
  };

  // The 3D Fold-in Effect
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      rotateX: -80, // Element starts pitched backwards
      transformOrigin: "top" // Acts as a hinge at the top of the element
    },
    show: {
      opacity: 1,
      rotateX: 0, // Flips flat into the screen
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 14, // Low damping means it settles with a satisfying, weighty lock-in
      },
    },
  };

  return (
    <motion.nav 
      variants={navContainerVariants}
      initial="hidden"
      animate="show"
      className="py-2"
    >
      <div className="flex items-center justify-between">
        
        {/* Logo and Subtitle */}
        <motion.div variants={itemVariants}>
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
        </motion.div>

        {/* Desktop links */}
        <div className="hidden lg:flex space-x-3">
          {/* We wrap individual buttons in motion.div so they rotate independently */}
          <motion.div variants={itemVariants}>
            <Link
              href={"/"}
              className="uppercase px-5 flex items-center bg-accent text-white rounded-full transition-all border-2 duration-300 cursor-pointer border-accent h-full py-2"
            >
              Home
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              href={"/"}
              className="uppercase px-5 flex items-center hover:bg-accent hover:text-white rounded-full border-2 transition-all duration-300 cursor-pointer hover:border-accent h-full py-2"
            >
              Laptops
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              href={"/"}
              className="uppercase px-5 flex items-center hover:bg-accent hover:text-white rounded-full border-2 transition-all duration-300 cursor-pointer hover:border-accent h-full py-2"
            >
              Desktop
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              href={"/"}
              className="uppercase px-3 flex items-center hover:bg-accent hover:text-white rounded-full border-2 transition-all duration-300 cursor-pointer hover:border-accent h-full py-2"
            >
              Services
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              href={"/"}
              className="uppercase px-3 flex items-center rounded-full border-2 transition-all duration-300 cursor-pointer h-full py-2"
            >
              <SearchIcon size={20} />
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              href={"/"}
              className="uppercase px-5 py-2 bg-primary text-white flex items-center rounded-full border-2 transition-all duration-300 cursor-pointer border-primary h-full"
            >
              Register
            </Link>
          </motion.div>
        </div>

        {/* Mobile hamburger button */}
        <motion.button
          variants={itemVariants}
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
        </motion.button>
      </div>

      {/* Mobile menu handled by AnimatePresence */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:hidden overflow-hidden mt-4"
          >
            <motion.div 
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
              }}
              className="flex flex-col space-y-2 py-2"
            >
              {/* Applying the same 3D hinge effect to mobile drop down links */}
              <motion.div variants={itemVariants}>
                <Link href={"/"} className="uppercase px-5 py-2 bg-accent text-white rounded-full transition-all border-2 duration-300 cursor-pointer border-accent text-center block" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href={"/"} className="uppercase px-5 py-2 hover:bg-accent hover:text-white rounded-full border-2 transition-all duration-300 cursor-pointer hover:border-accent text-center block" onClick={() => setIsMenuOpen(false)}>Laptops</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href={"/"} className="uppercase px-5 py-2 hover:bg-accent hover:text-white rounded-full border-2 transition-all duration-300 cursor-pointer hover:border-accent text-center block" onClick={() => setIsMenuOpen(false)}>Desktop</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href={"/"} className="uppercase px-5 py-2 hover:bg-accent hover:text-white rounded-full border-2 transition-all duration-300 cursor-pointer hover:border-accent text-center block" onClick={() => setIsMenuOpen(false)}>Services</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href={"/"} className="uppercase px-5 py-2 rounded-full border-2 transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-2" onClick={() => setIsMenuOpen(false)}><SearchIcon size={20} /> Search</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href={"/"} className="uppercase px-5 py-2 bg-primary text-white rounded-full border-2 transition-all duration-300 cursor-pointer border-primary text-center block" onClick={() => setIsMenuOpen(false)}>Register</Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
