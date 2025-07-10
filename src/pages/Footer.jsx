import React from 'react';
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900"> 
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Ibmahendra Ferdiansah. All rights reserved.</p> 
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/Ibmahen" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-white text-lg hover:border-[#FFCC00] transition duration-300">
            <img src={githubIcon} alt="GitHub" className="w-6 h-6 object-contain" />
          </a>
          <a href="https://www.linkedin.com/in/ibmahendraferdiansah" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-white text-lg hover:border-[#FFCC00] transition duration-300">
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 object-contain" />
          </a>
          <a href="mailto:ibmahendraf04@gmail.com" 
             className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-white text-lg hover:border-[#FFCC00] transition duration-300">
            <img src={emailIcon} alt="Email" className="w-6 h-6 object-contain" />
          </a>
        </div>
      </div>
    </footer>
  );
}