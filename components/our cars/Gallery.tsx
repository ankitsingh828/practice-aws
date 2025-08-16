// "use client";
// import React from "react";

// const images = [
//   { img: "/gallery/groomingImage.jpg", titleImg: "Dog Grooming" },
//   { img: "/gallery/catImage.jpg", titleImg: "Cat with Collar" },
//   { img: "/gallery/rabbitsImage.jpg", titleImg: "Two Rabbits" },
//   { img: "/gallery/dogsWalkingImage.jpg", titleImg: "Dogs Walking Outdoors" },
//   { img: "/gallery/whiteDogImage.jpg", titleImg: "White Dog" },
//   { img: "/gallery/dogBathImage.jpg", titleImg: "Dog Bath" },
// ];

// const Gallery: React.FC = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto text-center mb-12 px-4">
//         <h2 className="text-3xl sm:text-4xl font-bold text-[#4BC5CF]">Our Gallery</h2>
//         <p className="mt-4 text-gray-600 font-bold">
//           Some of our best pictures captured for you
//         </p>
//       </div>
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative w-full h-64 md:h-72 bg-cover bg-center rounded-lg transition-transform duration-300 hover:scale-105"
//             style={{
//               backgroundImage: `url(${image.img})`,
//             }}
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import React from 'react';

const Gallery = () => {
  return (
    <div className='text-center py-10'>
      <h1 className='font-semibold text-3xl sm:text-5xl text-[#4BC5CF] p-4'>Our Gallery</h1>
      <h2 className='font-semibold text-xl sm:text-3xl text-[#000] p-2'>Some Of Our Best Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 w-11/12 lg:w-4/5 mx-auto">
        {/* Images */}
        {[
          "/gallery/groomingImage.jpg",
          "/gallery/catImage.jpg",
          "/gallery/rabbitsImage.jpg",
          "/gallery/dogsWalkingImage.jpg",
          "/gallery/whiteDogImage.jpg",
          "/gallery/dogBathImage.jpg"
        ].map((imgSrc, index) => (
          <div
            key={index}
            className="h-64 md:h-80 bg-cover bg-center rounded-lg transition-transform duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${imgSrc})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;



