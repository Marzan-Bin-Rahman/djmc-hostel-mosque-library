import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 backdrop-blur-md shadow-md rounded-full bg-[#f8ead4]">
            {/* Logo */}
            <div className="flex-shrink-0">
                <img src="src/assets/logo.png" alt="Logo" className="w-15 h-15 " />
            </div>

            {/* Links */}
            <ul
                className={`${isMenuOpen ? "block mt-2 rounded-lg" : "hidden"
                    } absolute top-full left-0 md:mt-0 w-full bg-[#f8ead4]  backdrop-blur-2xl md:static md:flex md:space-x-6 md:bg-transparent md:justify-center`}
            >
                <li className="relative group">
                    <a
                        href="/"
                        className="block text-gray-700 font-medium hover:text-emerald-500 px-2 py-1 rounded md:inline md:font-bold md:hover:font-extrabold md:hover:underline decoration-wavy decoration-emerald-500 underline-offset-4 transition-all duration-300 ease-in-out"
                    >
                        Home
                    </a>
                </li>
                <li className="relative group">
                    <a
                        href="/about"
                        className="block text-gray-700 font-medium hover:text-emerald-500 px-2 py-1 rounded md:inline md:font-bold md:hover:font-extrabold md:hover:underline decoration-wavy decoration-emerald-500 underline-offset-4 transition-all duration-300 ease-in-out"
                    >
                        About Us
                    </a>
                </li>
                <li className="relative group">
                    <a
                        href="/contact"
                        className="block text-gray-700 font-medium hover:text-emerald-500 px-2 py-1 rounded md:inline md:font-bold md:hover:font-extrabold md:hover:underline decoration-wavy decoration-emerald-500 underline-offset-4 transition-all duration-300 ease-in-out"
                    >
                        Contact
                    </a>
                </li>
            </ul>

            {/* Button */}
            <button className="hidden md:block px-4 py-2 bg-emerald-500 text-white font-medium rounded-full shadow hover:bg-emerald-600 transition whitespace-nowrap cursor-not-allowed opacity-50">
                Get Started
            </button>

            {/* Hamburger Menu */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-emerald-500 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill=""
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        ></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
