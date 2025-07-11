import React from "react";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/phone.png";
import instagramIcon from "../assets/instagram.png";

const IconCircle = ({ children }) => (
  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4 flex-shrink-0">
    {children}
  </div>
);

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-h-screen flex flex-col items-center bg-[#0a101e] py-16 px-6"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Changed mb-55 to mb-16 for standard and clearer spacing */}
        <h2 className="text-5xl font-bold text-[#FFCC00] text-center mb-16">
          Contact
        </h2>

        <div className="space-y-8 mb-12 justify-center items-center">
          {/* Email Section: Added responsive flex (flex-col on small, flex-row on sm+) and adjusted gap/margins */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-12 gap-4 sm:gap-6 text-center sm:text-left">
            <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
              <img
                src={emailIcon}
                alt="Email"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
              <h2 className="text-gray-300 text-lg">ibmahendraf04@gmail.com</h2>
            </div>
          </div>

          {/* Phone Section: Changed mb-60 and removed mr-13, added responsive flex, adjusted gap/margins */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-16 sm:mb-20 gap-4 sm:gap-6 text-center sm:text-left mr-18 sm:mr-18">
            <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
              <img
                src={phoneIcon}
                alt="Phone"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Phone</h3> {/* Corrected mb2 to mb-2 */}
              <h2 className="text-gray-300 text-lg">+62 882 3283 5269</h2>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-white text-center mb-4">
          Visit my social profile and get connected
        </h3>

        {/* Social Media Buttons: Adjusted sizes for better responsiveness */}
        <div className="flex space-x-3 md:space-x-4 justify-center">
          <a
            href="https://github.com/Ibmahen"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#FFCC00] transition duration-300"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-6 h-6 md:w-7 md:h-7 object-contain"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ibmahendraferdiansah"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#FFCC00] transition duration-300"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-6 h-6 md:w-7 md:h-7 object-contain"
            />
          </a>
          <a
            href="mailto:ibmahendraf04@gmail.com"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#FFCC00] transition duration-300"
          >
            <img
              src={emailIcon}
              alt="Email"
              className="w-6 h-6 md:w-7 md:h-7 object-contain"
            />
          </a>
          <a
            href="https://www.instagram.com/ibma.hen"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#FFCC00] transition duration-300"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-6 h-6 md:w-7 md:h-7 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
}