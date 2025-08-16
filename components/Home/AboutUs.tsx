"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cardContent } from "../../constants/Data";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <main className="p-4 py-7">
      <div className="container mx-auto">
        <section className="mx-auto grid md:grid-cols-2 gap-4 mt-5">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl py-4"
          >
            <h1 className="text-3xl font-bold mb-4 text-[#FF3600]">About Pet lelo services</h1>
            <p className="mb-6 text-black">
              At Pet Lelo, we believe that every pet deserves a loving home and every pet parent deserves the best for their furry companions. Based in Gurugram, we are your trusted partner in all things pet-related. From pet adoption to grooming, training, and healthcare, we’ve got you covered.
            </p>
            <Link href="/about-us" className="px-8 py-2 rounded-xl bg-[#FF3600] text-white font-semibold hover:bg-[#EA580C] transition w-full md:w-auto">
              Learn More
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white md:p-8 text-blue-900"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Pick & Drives?</h2>
            <ul className="space-y-4">
              <li>📋 Transparent, All-Inclusive Pricing</li>
              <li>👥 Dedicated Customer Support Team</li>
              <li>💲 Lowest Price Guarantee</li>
              <li>✅ Flexible and Free Cancellation Options</li>
            </ul>
          </motion.div>
        </section>

        <section>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="grid md:grid-cols-2 gap-4 py-7">
              <h2 className="text-3xl font-bold mb-4 text-[#F4373D]">Pet Lelo Services</h2>
              <p className="mb-6">
                At Pet Lelo, we cater to all your pet needs—buy, care, train, and more. Everything for happy pets and happier owners!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cardContent.map((card, index) => (
                <div key={index} className="bg-rose-50 text-blue-900 p-6 rounded-2xl">
                  <Image
                    src={card.imageSrc}
                    width={400}
                    height={200}
                    alt={`${card.title} - Pick & Drives Services`}
                    className="rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-[#FF3600] mb-2">{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
