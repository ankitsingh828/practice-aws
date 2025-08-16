"use client";
import React, { useEffect, useRef } from "react";
import { FaPaw, FaHeadset, FaLeaf, FaRegSmile } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoPawOutline } from "react-icons/io5";
import { BsHeartFill } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  cardRefs.current = [];

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const setCardRef = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D4F1F9] py-24 px-4 my-8 rounded-3xl"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-[#F4373D] font-bold text-lg">* WHY CHOOSE US</p>
          <h2 className="text-4xl font-extrabold mt-2">
            WHY CHOOSE OUR PET COMPANY?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div
            ref={setCardRef}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center items-center h-16 w-16 mx-auto bg-[#FFF0EC] rounded-full">
              <FaPaw className="h-10 w-10 text-[#F4373D]" />
            </div>
            <h3 className="mt-4 lg:text-xl text-lg font-bold">QUALITY CARE</h3>
            <p className="mt-2 text-gray-600">
              Top-notch services ensuring the well-being of your pets.
            </p>
          </div>

          <div
            ref={setCardRef}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center items-center h-16 w-16 mx-auto bg-[#FFF0EC] rounded-full">
              <FaHeadset className="h-10 w-10 text-[#F4373D]" />
            </div>
            <h3 className="mt-4 lg:text-xl text-lg font-bold">24/7 SUPPORT</h3>
            <p className="mt-2 text-gray-600">
              We&apos;re here for you and your pets anytime, anywhere.
            </p>
          </div>

          <div
            ref={setCardRef}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center items-center h-16 w-16 mx-auto bg-[#FFF0EC] rounded-full">
              <FaLeaf className="h-10 w-10 text-[#F4373D]" />
            </div>
            <h3 className="mt-4 lg:text-xl text-lg font-bold">
              NATURAL PRODUCTS
            </h3>
            <p className="mt-2 text-gray-600">
              We offer a range of eco-friendly and natural pet products.
            </p>
          </div>

          <div
            ref={setCardRef}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center items-center h-16 w-16 mx-auto bg-[#FFF0EC] rounded-full">
              <FaRegSmile className="w-10 h-10 text-[#F4373D]" />
            </div>
            <h3 className="mt-4 lg:text-xl text-lg font-bold">HAPPY PETS</h3>
            <p className="mt-2 text-gray-600">
              Ensuring your pets are always happy and healthy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div
            ref={setCardRef}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center items-center h-16 w-16 mx-auto bg-[#FFF0EC] rounded-full">
              <CiLocationOn className="h-10 w-10 text-[#F4373D]" />
            </div>
            <h3 className="mt-4 lg:text-xl text-lg font-bold">
              CONVENIENT LOCATIONS
            </h3>
            <p className="mt-2 text-gray-600">
              Multiple locations to serve you better.
            </p>
          </div>

          <div
            ref={setCardRef}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center items-center h-16 w-16 mx-auto bg-[#FFF0EC] rounded-full">
              <IoPawOutline className="h-10 w-10 text-[#F4373D]" />
            </div>
            <h3 className="mt-4 lg:text-xl text-lg font-bold">
              VETERINARY CARE
            </h3>
            <p className="mt-2 text-gray-600">
              Access to top veterinary care for your pets.
            </p>
          </div>

          <div
            ref={setCardRef}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center items-center h-16 w-16 mx-auto bg-[#FFF0EC] rounded-full">
              <BsHeartFill className="h-10 w-10 text-[#F4373D]" />
            </div>
            <h3 className="mt-4 lg:text-xl text-lg font-bold">
              LOVING ENVIRONMENT
            </h3>
            <p className="mt-2 text-gray-600">
              A caring and loving environment for all pets.
            </p>
          </div>

          <div
            ref={setCardRef}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center items-center h-16 w-16 mx-auto bg-[#FFF0EC] rounded-full">
              <FaHeadset className="w-10 h-10 text-[#F4373D]" />
            </div>
            <h3 className="mt-4 lg:text-xl text-lg font-bold">EXPERT ADVICE</h3>
            <p className="mt-2 text-gray-600">
              Expert advice and support for all your pet-related queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
