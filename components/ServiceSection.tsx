"use client";
import React from "react";
// import Image from "next/image"; // Import Image component

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  image,
}) => {
  return (
    <div className="border rounded-lg shadow-md bg-white p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow">
      {/* Inline Heading with Image */}
      <div className="flex items-center gap-4">
        <div
          className="h-24 w-24 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "5rem", // Ensures image covers the entire div
            backgroundPosition: "center",
            backgroundRepeat:"no-repeat" // Centers the image inside the div
          }}
        ></div>
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>

      {/* Description and Price */}
      <p className="text-lg text-gray-600">{description}</p>
      <p className="text-md font-medium text-gray-800">{price}</p>
      <a
        href="https://wa.me/+919220779891"
        className="text-blue-500 font-semibold hover:underline"
      >
        Get Service →
      </a>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Pet and Pet Nutrition",
      description: "We help you getting your pet and we provide you the best pet food supply!",
      price: "Prices may vary",
      image: "/imgservice/petnutrition.jpg", // Corrected path
    },
    {
      title: "Walking & Sitting",
      description: "Professional walking and sitting services for your pets.",
      price: "From ₹4500/month for 20 min",
      image: "/imgservice/dogwalking.jpg", // Corrected path
    },
    {
      title: "Pet Grooming",
      description: "Expert grooming to keep your pets healthy and stylish.",
      price: "From ₹800/complex",
      image: "/imgservice/gromming.jpg", // Corrected path
    },
    {
      title: "Pet Training",
      description: "Professional training to teach your pets good habits.",
      price: "From ₹7000",
      image: "/imgservice/pettraining.jpg", // Corrected path
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive care to keep your pets healthy.",
      price: "From ₹600/visit",
      image: "/imgservice/healthandwellness.jpg", // Corrected path
    },
    {
      title: "Pet Hotel",
      description: "Comfortable lodging for your pets while you’re away.",
      price: "From ₹800/day",
      image: "/imgservice/pethotel.jpg", // Corrected path
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Section Heading */}
        <h1
          className="text-5xl font-extrabold text-center mb-6"
          style={{ color: "#4BC5CF" }}
        >
          Our Services
        </h1>
        {/* Subheading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          All Pet Care Services
        </h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
