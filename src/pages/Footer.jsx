import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8"> 
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Ibmahendra Ferdiansah. All rights reserved.</p> 
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-[#FFCC00] hover:text-yellow-400 transition">GitHub</a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="text-[#FFCC00] hover:text-yellow-400 transition">LinkedIn</a>
          <a href="mailto:your@email.com" className="text-[#FFCC00] hover:text-yellow-400 transition">Email</a>
        </div>
      </div>
    </footer>
  );
}
