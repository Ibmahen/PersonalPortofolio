import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for mobile menu

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <div className="bg-white/10 backdrop-blur-md sticky top-0 z-20 shadow-md">
      <div className="flex justify-between md:text-lg font-medium text-white items-center px-5 md:px-10 py-5">
        <div>
          <button className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-[60px] h-[50px] object-contain"
            />
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {/* Replace with an actual hamburger icon */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-5 md:gap-x-10">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            Skill
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#certificates" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("certificates");
            }}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            Certificates
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Navigation Links (conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white/10 backdrop-blur-md pb-5">
          <a onClick={(e) => { e.preventDefault(); scrollToSection("home"); }} className="py-2 hover:text-[#FFCC00] transition duration-300 ease-in-out">Home</a>
          <a onClick={(e) => { e.preventDefault(); scrollToSection("about"); }} className="py-2 hover:text-[#FFCC00] transition duration-300 ease-in-out">About</a>
          <a onClick={(e) => { e.preventDefault(); scrollToSection("skills"); }} className="py-2 hover:text-[#FFCC00] transition duration-300 ease-in-out">Skill</a>
          <a onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }} className="py-2 hover:text-[#FFCC00] transition duration-300 ease-in-out">Projects</a>
          <a onClick={(e) => { e.preventDefault(); scrollToSection("certificates"); }} className="py-2 hover:text-[#FFCC00] transition duration-300 ease-in-out">Certificates</a>
          <a onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className="py-2 hover:text-[#FFCC00] transition duration-300 ease-in-out">Contact</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;