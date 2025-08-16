"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div>
      <div
        ref={sectionRef}
        className="flex flex-col lg:flex-row container mx-auto items-center justify-between p-8 lg:p-16 bg-white space-y-8 lg:space-y-0"
      >
        <div ref={contentRef} className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start space-x-2">
            <span className="text-[#F4373D] text-3xl font-bold">*</span>
            <h3 className="text-xl text-[#F4373D] font-semibold">Our Vision</h3>
          </div>
          <h1
            ref={headingRef}
            className="text-4xl font-bold text-gray-900 leading-tight"
          >
            Nurturing Pets, Enriching Lives
          </h1>
          <p className="text-lg text-gray-700">
            At our pet company, our dedicated team is committed to providing
            exceptional care and services to ensure the well-being and happiness
            of your pets. Get to know our vision:
          </p>
          <ul className="space-y-3">
            <li className="flex items-center justify-center lg:justify-start space-x-2">
              <span className="text-[#F4373D] text-2xl">✔️</span>
              <p className="text-lg font-medium text-gray-900">
                Our pets&rsquo; well-being is our top priority
              </p>
            </li>
            <li className="flex items-center justify-center lg:justify-start space-x-2">
              <span className="text-[#F4373D] text-2xl">✔️</span>
              <p className="text-lg font-medium text-gray-900">
                Quality care in every service we provide
              </p>
            </li>
            <li className="flex items-center justify-center lg:justify-start space-x-2">
              <span className="text-[#F4373D] text-2xl">✔️</span>
              <p className="text-lg font-medium text-gray-900">
                A compassionate and knowledgeable team
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;


