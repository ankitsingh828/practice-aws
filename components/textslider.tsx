"use client";

import { useState, useEffect } from "react";

const TextSlider: React.FC = () => {
  const texts = [
    "We also sell pets! 🐶",
    "Dogs, Cats, Birds, Fish & More! 🐾 ",
    "From Fur to Feathers, We Have It All! 🦜🐕🐢",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto text-center">
        {/* Text Slider */}
        <div className="relative w-full overflow-hidden h-16 flex justify-center items-center">
          <p
            key={currentIndex}
            className="text-2xl md:text-5xl font-bold text-gray-800 transition-all duration-700"
            style={{
              opacity: 1,
              transform: "translateY(0px)",
              animation: "slideFade 3s ease-in-out infinite",
            }}
          >
            {texts[currentIndex]}
          </p>
        </div>
      </div>

      {/* Animation Keyframes (Inline) */}
      <style>
        {`
          @keyframes slideFade {
            0% { opacity: 0; transform: translateY(20px); }
            10% { opacity: 1; transform: translateY(0px); }
            90% { opacity: 1; transform: translateY(0px); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
        `}
      </style>
    </section>
  );
};

export default TextSlider;
