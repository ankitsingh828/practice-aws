"use client";
import React from "react";
import aboutBG from "@/public/banners/aboutus.jpg";

console.log("Image path:", aboutBG.src);

const Section1: React.FC = () => {
  return (
    <div
      className="section1-background flex flex-col lg:flex-row justify-between items-center py-6 lg:py-8 h-[70vh] lg:w-[95%] lg:my-4 md:rounded-[3rem] pb-10"
      style={{
        backgroundImage: `url(${aboutBG.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-14 flex flex-col justify-center h-full text-left">
        <div className="max-w-3xl text-left">
          <p className="text-[#F4373D] font-semibold uppercase tracking-wide text-2xl">
            About
          </p>
          <h1 className="text-6xl md:text-7xl font-extrabold mt-2 text-[#4BC5CF]">
            About Us
          </h1>
          <p className="text-3xl font-medium mt-4 text-black">
            Your Trusted Partner for All Things Pet
          </p>
          <p className="text-xl mt-4 leading-relaxed text-black">
            From finding the perfect pet to providing top-notch pet-related services, we are dedicated to making your pet’s life happy and healthy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
