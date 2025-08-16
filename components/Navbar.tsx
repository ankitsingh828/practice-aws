"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <nav className="flex items-center justify-between container mx-auto py-1 lg:py-3 px-2 lg:px-8 relative" aria-label="Main Navigation">
        <div className="flex items-center">
          <Link href="/" aria-label="Homepage - Pet Lelo">
            <div
              className="h-16 w-16 sm:h-32 sm:w-32 rounded-full" // Responsive logo size
              style={{ backgroundImage: "url(/logo/petlogo1.jpg)", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            ></div>
          </Link>
        </div>
        
        <div className="flex items-center space-x-2 md:hidden">
          <button onClick={toggleMenu} aria-controls="mobile-menu" aria-expanded={isOpen} aria-label="Toggle Menu" className="text-black focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex flex-grow items-center justify-center font-semibold text-2xl space-x-8">
          <Link href="/" title="Home" className="text-black hover:text-#4BC5CF">Home</Link>
          <Link href="/about-us" title="About Us" className="about-us-link text-black hover:text-#4BC5CF">About Us</Link>
          <Link href="/our-services" title="Our Services" className="text-black hover:text-#4BC5CF">Our Services</Link>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href="tel:+919220779891" aria-label="Call Now" className="px-8 py-2 text-xl rounded-full bg-[#F4373D] text-white font-bold transition">
            Call Now
          </Link>
          <button
            aria-label="Next slide"
            className="flex items-center justify-center bg-[#F4373D] text-white w-12 h-12 p-2 rounded-full transition-transform duration-300 transform group-hover:rotate-0 rotate-45"
          >
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}
          role="dialog"
          aria-label="Mobile Navigation"
        >
          <div className="flex justify-between p-4">
            <span className="text-xl font-bold text-[#F4373D]">Pet Lelo</span>
            <button onClick={toggleMenu} aria-label="Close Menu" className="text-black focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-2 p-4 text-2xl">
            <Link href="/" title="Home" className="text-black hover:text-[#F4373D]">Home</Link>
            <Link href="/about-us" title="About Us" className="about-us-link text-black hover:text-[#F4373D]">About Us</Link>
            <Link href="/our-services" title="Our Services" className="text-black hover:text-[#F4373D]">Our Services</Link>
          </div>
        </div>
      </nav>

      <hr className="border-t border-gray-300 my-2 w-4/5 mx-auto" />
    </header>
  );
};

export default Navbar;