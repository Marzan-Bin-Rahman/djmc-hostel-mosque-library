import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaTelegramPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex justify-center mt-32 mb-12 mx-4">
      <div className="border-2 border-[#d3c8b8] bg-[#f8ead4] rounded-xl p-8 flex flex-col md:flex-row w-full">
        {/* Left Column - Logo */}
        <div className="flex justify-center items-center mb-6 md:mb-0 md:mr-8">
          <img
            src="https://i.postimg.cc/QHx6SLjv/logo.png"
            alt="Logo"
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
          />
        </div>

        {/* Right Column - Contact Info */}
        <div className="flex flex-col justify-center content-center space-y-4">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-xl text-gray-700 mr-4" />
            <span className="text-gray-700">Dr. Yousuf Ali Boys Hostel, Dinajpur Medical College</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-xl text-gray-700 mr-4" />
            <span className="text-gray-700">email@example.com</span>
          </div>
          <div className="flex items-center">
            <FaTelegramPlane className="text-xl text-gray-700 mr-4" />
            <span className="text-gray-700">@telegramhandle</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;