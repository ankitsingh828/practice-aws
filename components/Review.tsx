"use client";

import React, { useState, useRef } from "react";
// import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

// import revImg1 from "@/public/contact us/revImg1.webp";
// import revImg2 from "@/public/contact us/revImg2.webp";
// import revImg3 from "@/public/contact us/revImg3.webp";

interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  // image: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ankit Singh",
    feedback:
      "Pet Lelo provides exceptional pet grooming services. My dog looks fantastic and the staff were so friendly and professional.",
    // image: revImg1,
  },
  {
    id: 2,
    name: "Arya Rana",
    feedback:
      "I was so impressed with the quality of care at Pet Lelo. The facilities are top-notch and my cat received the best treatment possible.",
    // image: revImg2,
  },
  {
    id: 3,
    name: "Aanchal Diwedi",
    feedback:
      "Pet Lelo's training services are amazing. My puppy learned so much and the trainers are incredibly patient and knowledgeable.",
    // image: revImg3,
  },
  {
    id: 4,
    name: "Anuj Chauhan",
    feedback:
      "The boarding facilities at Pet Lelo are excellent. I felt so comfortable leaving my pet there while I was on vacation. They took great care of him.",
    // image: revImg1,
  },
  {
    id: 5,
    name: "Amit Sharma",
    feedback:
      "Pet Lelo's veterinary care is outstanding. The vets are highly skilled and they genuinely care about the well-being of the pets.",
    // image: revImg2,
  },
];

const Testimonials: React.FC = () => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const [showFullText, setShowFullText] = useState<{ [key: number]: boolean }>({});

  const toggleReadMore = (id: number) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit) + "...";
  };

  return (
    <section className="bg-white py-16 w-full">
      <div className="text-center mb-10 mx-auto container">
        <span className="text-[#F4373D] text-xl font-semibold">* Testimonials</span>
        <h2 className="text-4xl font-bold text-[#4BC5CF] mt-2">
          WHAT PEOPLE SAY!
        </h2>
        <p className="text-lg text-center px-4 text-black">
          Discover exceptional pet care services with Pet Lelo! Read what our satisfied customers have to say about their smooth experiences, friendly staff, well-maintained facilities, and hassle-free service process. Join the happy customers and choose us for your pet care needs!
        </p>
        <button className="px-8 py-3 rounded-3xl bg-[#F4373D] text-white font-bold hover:bg-[#EA580C] mt-8 transition lg:w-full w-auto mx-4">
  <Link
    href="/about-us"
    aria-label="Read more customer reviews on the About Us page"
    className="block text-center"
  >
    More Reviews
  </Link>
</button>

      </div>

      <div className="container mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation === "object") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex space-x-1 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <span key={index} className="text-[#F4373D] text-xl">
                        ★
                      </span>
                    ))}
                </div>
                <p className="text-black mb-6">
                  {showFullText[testimonial.id]
                    ? testimonial.feedback
                    : truncateText(testimonial.feedback, 100)}
                </p>
                {testimonial.feedback.length > 100 && (
                  <button
                    onClick={() => toggleReadMore(testimonial.id)}
                    className="text-[#F4373D] font-semibold hover:underline"
                  >
                    {showFullText[testimonial.id] ? "Show Less" : "Read More"}
                  </button>
                )}
                <div className="flex items-center space-x-4 mt-4">
                  {/* <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  /> */}
                  <div>
                    <p className="text-lg font-bold text-black">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center mt-6 space-x-4">
          <div
            ref={prevRef}
            className="flex items-center justify-center bg-[#F4373D] text-white w-12 h-12 p-2 rounded-full hover:bg-[#EA580C] transition duration-300"
          >
            <FaArrowLeft className="w-5 h-5" />
          </div>
          <div
            ref={nextRef}
            className="flex items-center justify-center bg-[#F4373D] text-white w-12 h-12 p-2 rounded-full hover:bg-[#EA580C] transition duration-300"
          >
            <FaArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
