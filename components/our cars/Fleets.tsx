"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cars } from "@/constants/Data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Fleets: React.FC = () => {
  const fleetSectionRef = useRef<HTMLDivElement | null>(null);
  const fleetItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (fleetSectionRef.current) {
      gsap.fromTo(
        fleetItemsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: fleetSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div>
      <div ref={fleetSectionRef} className="mt-20 container mx-auto">
        <div className="text-center space-y-2 mb-2">
          <h3 className="text-2xl text-orange-700 font-medium">
            <span className="text-3xl font-bold">*</span>Fleet
          </h3>
          <p className="lg:text-4xl text-2xl font-bold text-gray-800">
            Best of our fleet
          </p>
          <p className="lg:text-xl text-lg text-gray-700">
            Choose the best range of low to high-end cars
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Cars.map((car, index) => (
            <div
              ref={(el) => {
                if (el) {
                  fleetItemsRef.current[index] = el;
                }
              }}
              className="flex flex-col p-6 items-center mb-6 rounded-xl bg-white hover:shadow-lg transition-shadow border"
              key={index}
            >
              <Image
                src={car.image}
                alt={car.name}
                className="h-40 w-auto object-contain"
                width={200}
                height={150}
              />
              <h3 className="text-xl font-semibold mt-2 text-gray-800">
                {car.name}
              </h3>
              <div className="mt-4 flex items-center justify-between w-full">
                <div>
                  <h3 className="font-bold text-gray-800">FROM</h3>
                  <span className="lg:text-xl sm:text-lg text-orange-700 font-bold">
                    {car.price}
                  </span>
                </div>
                <Link href="/" legacyBehavior>
                  <button className="px-8 py-2 rounded-3xl bg-[#FF3600] text-white font-bold hover:bg-[#EA580C] mt-4 transition w-full md:w-auto">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fleets;
