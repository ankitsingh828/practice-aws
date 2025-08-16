"use client";

import React from "react";
import { motion } from "framer-motion";
import headerBG from '/public/banners/serviceimage.png';

const Section1: React.FC = () => {
  return (
    <section className="w-full mx-auto">
      <div
        className="banner-background relative py-10 flex items-center justify-start" // Ensure alignment to the left
        style={{
          backgroundImage: `url('${headerBG.src}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
          borderRadius: '0',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col text-left p-8 lg:p-20 bg-white/80 shadow-lg rounded-lg" // Added more padding, background, and shadow
          style={{
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          <h1 className="text-5xl font-bold mt-2 text-[#4BC5CF]">
            Services
          </h1>
          <p className="text-xl font-medium mt-4 text-black">
            The Best Care for Your Furry Friends
          </p>
          <p className="text-lg mt-4 leading-6 text-black">
            At Petlelo, we provide top-quality services to ensure your pets receive the best care possible. Our experienced and compassionate team offers a range of services including grooming, boarding, training, and veterinary care. We are dedicated to creating a safe and comfortable environment for your pets, making their well-being our top priority. Trust Petlelo for all your pet care needs, and give your furry friends the love and attention they deserve.
          </p>
        </motion.div>
      </div>
      <style jsx>{`
        @media (min-width: 1024px) {
          .banner-background {
            padding: 40px 20px; // Increased padding for desktop
          }
          .bg-white/80 {
            padding: 40px; // Extra padding for text box
          }
        }
        @media (max-width: 768px) {
          .bg-white/80 {
            padding: 20px; // Adjusted padding for mobile screens
            background-color: rgba(255, 255, 255, 0.9); // Slightly opaque background for readability
          }
          .text-5xl { font-size: 2.5rem !important; }
          .text-xl { font-size: 1.25rem !important; }
          .text-lg { font-size: 1rem !important; }
          .leading-6 { line-height: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Section1;

