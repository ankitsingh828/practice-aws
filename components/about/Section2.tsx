"use client";

import React from "react";
import { motion } from "framer-motion";
import images1 from "@/public/contact us/images1.jpeg";
import image2 from "@/public/contact us/image2.jpg";

const Section2: React.FC = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2, ease: "easeOut" } },
  };

  return (
    <div className="px-6 py-16 lg:px-28 lg:py-36">
      <div className="flex container mx-auto flex-col md:flex-row justify-around items-center">
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[70%] md:w-[50%] aspect-[3/4] rounded-[4rem] overflow-hidden transform rotate-3 shadow-lg">
            <motion.div
              className="w-full h-full"
              style={{ 
                backgroundImage: `url('${image2.src}')`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
              variants={imageVariants}
            >
              {/* Optional fallback content */}
            </motion.div>
          </div>

          <div className="absolute top-12 left-16 w-[40%] md:w-[30%] aspect-[4/5] rounded-[4rem] overflow-hidden shadow-lg transform rotate-[-5deg]">
            <motion.div
              className="w-full h-full"
              style={{ 
                backgroundImage: `url('${images1.src}')`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
              variants={imageVariants}
            >
              {/* Optional fallback content */}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl lg:text-3xl text-[#F4373D] font-medium">
            <span className="text-3xl lg:text-4xl font-bold">*</span> About Us
          </h3>
          <h1 className="text-2xl lg:text-5xl font-bold text-[#4BC5CF]">
            Your Trusted Partner in Pet Care
          </h1>
          <p className="text-base lg:text-xl text-gray-700 mt-4">
            We are a leading pet care company committed to providing exceptional services and products for your beloved pets. Our extensive range of pet-related services and products ensures that your pets receive the best care possible.
          </p>
          <p className="text-base lg:text-xl text-gray-700 mt-4">
            At our pet company, we believe that a happy pet makes a happy home. That’s why we offer a variety of services including grooming, pet boarding, and veterinary care, as well as a selection of high-quality pet food and accessories. Our dedicated team of pet care professionals is here to assist you with all your pet needs.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
