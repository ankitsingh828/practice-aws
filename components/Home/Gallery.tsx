// "use client";
// import React from "react";
// import Image from "next/image";

// const images = [
//   { src: "/gallery/groomingImage.jpg", alt: "Dog Grooming" },
//   { src: "/gallery/catImage.jpg", alt: "Cat with Collar" },
//   { src: "/gallery/rabbitsImage.jpg", alt: "Two Rabbits" },
//   { src: "/gallery/dogsWalkingImage.jpg", alt: "Dogs Walking Outdoors" },
//   { src: "/gallery/whiteDogImage.jpg", alt: "White Dog" },
//   { src: "/gallery/dogBathImage.jpg", alt: "Dog Bath" },
// ];

// const Gallery: React.FC = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto text-center mb-12">
//         <h2 className="text-4xl font-bold text-[#4BC5CF]">Our Gallery</h2>
//         <p className="mt-4 text-gray-600 font-bold">
//           Some of our best pictures captured for you
//         </p>
//       </div>
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative w-full h-72"
//             style={{ position: "relative", width: "100%", height: "18rem" }}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               className="rounded-lg"
//               fill
//               style={{ objectFit: "cover" }}
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Gallery;



// import React from 'react';

// const Gallery = () => {
//   return (
//     <div className='text-center'>
//       <h1 className='font-semibold text-5xl text-[#4BC5CF] p-4'>Our Gallery</h1>
//       <h2  className='font-semibold text-3xl text-[#000] p-2'>Some Of Our Best Services</h2>
//     <div className="grid grid-cols-3 gap-4 p-4 w-4/5 mx-auto">
//       {/* Row 1 */}
//       <div className="h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/groomingImage.jpg)' }}></div>
//       <div className="h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/catImage.jpg)' }}></div>
//       <div className="h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/rabbitsImage.jpg)' }}></div>

//       {/* Row 2 */}
//       <div className="h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/dogsWalkingImage.jpg)' }}></div>
//       <div className="h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/whiteDogImage.jpg)' }}></div>
//       <div className="h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/dogBathImage.jpg)' }}></div>
//     </div>
//     </div>
//   );
// }

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

