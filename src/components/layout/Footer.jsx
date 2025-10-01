import React from 'react';
import { FaFacebook, FaYoutube, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f8ead4] text-gray-700 py-6 m-4 rounded-xl border-2 border-[#d3c8b8]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section: Logo */}
        <div>
          <img src="src/assets/logo.png" alt="Logo" className="w-32 h-32" />
        </div>

        {/* Middle Section: Internal Links */}
        <div className="flex flex-col space-y-2">
          <a href="/" className="block text-gray-700 font-medium hover:text-emerald-500 px-2 py-1 rounded md:inline md:font-bold md:hover:font-extrabold md:hover:underline decoration-wavy decoration-emerald-500 underline-offset-4 transition-all duration-300 ease-in-out">Home</a>
          <a href="/dars" className="block text-gray-700 font-medium hover:text-emerald-500 px-2 py-1 rounded md:inline md:font-bold md:hover:font-extrabold md:hover:underline decoration-wavy decoration-emerald-500 underline-offset-4 transition-all duration-300 ease-in-out">Dars-E-Quran</a>
          <a href="/about" className="block text-gray-700 font-medium hover:text-emerald-500 px-2 py-1 rounded md:inline md:font-bold md:hover:font-extrabold md:hover:underline decoration-wavy decoration-emerald-500 underline-offset-4 transition-all duration-300 ease-in-out">About Us</a>
          <a href="/contact" className="block text-gray-700 font-medium hover:text-emerald-500 px-2 py-1 rounded md:inline md:font-bold md:hover:font-extrabold md:hover:underline decoration-wavy decoration-emerald-500 underline-offset-4 transition-all duration-300 ease-in-out">Contact</a>
        </div>

        {/* Right Section: External Links */}
        <div className="flex flex-col space-y-2">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-emerald-500 transition-all font-bold hover:font-extrabold "
          >
            <FaYoutube /> <span>YouTube</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-emerald-500 transition-all font-bold hover:font-extrabold"
          >
            <FaFacebook /> <span>Facebook</span>
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-emerald-500 transition-all font-bold hover:font-extrabold"
          >
            <FaTelegram /> <span>Telegram</span>
          </a>
          <a
            href="mailto:example@example.com"
            className="flex items-center space-x-2 hover:text-emerald-500 transition-all font-bold hover:font-extrabold"
          >
            <FaEnvelope /> <span>Email</span>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 border-gray-700 pt-4 text-center text-sm">
        <hr className="w-3/4 mx-auto border-1/2 mb-3" />
        <p>All the rights are reserved by <span className='text-emerald-500 font-bold'> DjMC Hostel Mosque Library</span></p>
      </div>
    </footer>
  );
};

export default Footer;