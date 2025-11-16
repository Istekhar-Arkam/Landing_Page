import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <h1 className="text-3xl font-bold 2xl:ml-14 text-black">Expelee</h1>
          </motion.div>
          <div className="flex justify-between items-center h-16  w-[700px]">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12 text-black font-semibold">
              <a href="#home" className=" hover:text-primary transition-colors">
                Home
              </a>
              <a
                href="#about"
                className=" hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className=" hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className=" hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block ">
              <button className="bg-primary text-black px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-4 text-black">
              <a href="#home" className="  transition-colors">
                Home
              </a>
              <a
                href="#about"
                className=" hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className=" hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className=" hover:text-primary transition-colors"
              >
                Contact
              </a>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors w-full">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
