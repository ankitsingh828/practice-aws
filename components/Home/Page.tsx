"use client";

import React from "react";
import { motion } from "framer-motion";

// Uncomment and use if needed
// const Form = dynamic(() => import("./Form"), { ssr: false, loading: () => <div>Loading...</div> });

const Banner: React.FC = () => {
  return (
    <section className="w-full mx-auto">
      <div
        className="banner-background relative py-10 flex items-center justify-center"
        style={{
          backgroundImage: `url('/background/backgroundimage.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '0',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center text-center p-4 lg:p-16"
          style={{
            width: '100%',
            maxWidth: '1200px',
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for better contrast
          }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 lg:mb-8 text-[#F4373D] capitalize">
            Welcome to Petlelo
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#4BC5CF] mb-6 lg:mb-8">
            The World&apos;s Best Team for Pet Care Services
          </h1>
          <p className="text-black font-medium text-base md:text-lg lg:text-xl xl:text-2xl pb-6 lg:pb-8">
            Discover top-notch services tailored for your pet. From luxurious grooming sessions to personalized walking routines, Petlelo ensures your pet receives the best care. Join our community of happy pets and owners today!
          </p>
          {/* <button className="bg-[#4BC5CF] text-white py-2 px-6 lg:py-2 lg:px-4 rounded-full font-bold mt-4 lg:mt-6" style={{ fontSize: '1rem' }}>
            Our Service
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;



