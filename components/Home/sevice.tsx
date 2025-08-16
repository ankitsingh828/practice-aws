"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Replace these imports with your downloaded images
import dogWalking from "@/public/imgservice/dogwalking.jpg";
import grooming from "@/public/imgservice/gromming.jpg";
import healthAndWellness from "@/public/imgservice/healthandwellness.jpg";
import petHotel from "@/public/imgservice/pethotel.jpg";
import petNutrition from "@/public/imgservice/petnutrition.jpg";
import petTraining from "@/public/imgservice/pettraining.jpg";

const services = [
  {
    id: 1,
    title: "Walking",
    image: dogWalking,
    whatsappLink: "https://wa.me/918123456789"
  },
  {
    id: 2,
    title: "Grooming",
    image: grooming,
    whatsappLink: "https://wa.me/918123456789"
  },
  {
    id: 3,
    title: "Health & Wellness",
    image: healthAndWellness,
    whatsappLink: "https://wa.me/918123456789"
  },
  {
    id: 4,
    title: "Pet Hotel",
    image: petHotel,
    whatsappLink: "https://wa.me/918123456789"
  },
  {
    id: 5,
    title: "Pet",
    image: petNutrition,
    whatsappLink: "https://wa.me/918123456789"
  },
  {
    id: 6,
    title: "Pet Training",
    image: petTraining,
    whatsappLink: "https://wa.me/918123456789"
  },
];
const ServiceSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#4BC5CF]">Our Services</h2>
          <p className="mt-4 text-gray-600">Discover the best services we offer for your pets.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.id} href={service.whatsappLink} legacyBehavior>
              <a target="_blank" className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <Image src={service.image} alt={service.title} className="w-full h-auto object-cover transition-opacity hover:opacity-75"/>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-gray-600">connect .</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;


