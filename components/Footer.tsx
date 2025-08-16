"use client";
import React from 'react';
import footerImage from "@/public/bottom/fotterimage.png";
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className='lg:p-14 w-[95%] mx-auto'>
      <div
        className="relative text-white lg:py-14 lg:px-10 lg:rounded-3xl p-4 border-4 border-gray-300 border-y-8" 
        style={{
          backgroundImage: `url(${footerImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0 bg-white opacity-70 lg:rounded-3xl" 
          style={{
            zIndex: -1,
          }}
        ></div>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4 container ms-auto gap-12 text-center md:text-left">
          <div>
            <h2 className="text-5xl font-bold text-[#F4373D]">Pet Lelo</h2>
            <p className="mt-4 pr-4 text-black">
              Your one-stop solution for all pet needs. From buying pets to grooming, training, and care services, we make pet ownership easy and joyful. At Pet Lelo, we’re dedicated to happy pets and happy owners!
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#4BC5CF]">CONTACT US</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="mailto:petlelo123@gmail.com" className="hover:underline text-black">petlelo123@gmail.com</a></li>
              <li><a href="tel:09220779891" className="hover:underline text-black">09220779891</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#4BC5CF]">SERVICES</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/" className="hover:underline font-medium text-black">HOME</Link></li>
              <li><Link href="/about-us" className="hover:underline font-medium text-black">ABOUT</Link></li>
              <li><Link href="/our-services" className="hover:underline font-medium text-black">OUR SERVICES</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#4BC5CF]">FOLLOW US</h3>
            <div className="mt-4 md:mt-4 flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com/share/15igX3C1aj/" className="hover:text-gray-400">
                <FaFacebookF className='text-4xl text-[#F4373D]' />
              </a>
              <a href="https://www.instagram.com/petlelo.in?igsh=MTBxZjZ4djRpMWpxaw==" className="hover:text-gray-400">
                <FaInstagram className='text-4xl text-[#F4373D]' />
              </a>
            </div>
            <div className="flex justify-center md:justify-start mt-4">
            <div
  className=" h-32 w-32 rounded-full"
  style={{ backgroundImage: "url(/logo/petlogo1.jpg)", backgroundSize:"8rem", backgroundPosition:"center" }} // Correct path
></div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 flex justify-center items-center text-black">
          <p>© 2025 Pet Lelo. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
