import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900"> 
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Ibmahendra Ferdiansah. All rights reserved.</p> 
      </div>
    </footer>
  );
}