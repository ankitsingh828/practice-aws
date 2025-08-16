import Image from 'next/image';
import React from 'react';
import mitsubishi from "@/public/brand logo/mitsubishi.webp"
import toyota from "@/public/brand logo/toyota.png"
import bantley  from "@/public/brand logo/bantley.png"
import audi from "@/public/brand logo/audi.png"
import hyundai from "@/public/brand logo/hyundai.jpg"
import lexus  from "@/public/brand logo/lexus.png"
import nissan from "@/public/brand logo/nissan.png"
import vw from "@/public/brand logo/vw.png"

const Brands: React.FC = () => {
  const brands = [
    {
        image : mitsubishi,
        name : "MITSUBISHI"
    },
    {
        image : toyota,
        name : "TOYOTA"
    },
    {
        image : bantley,
        name : "BANTLEY"
    },
    {
        image : audi,
        name : "AUDI"
    },
    {
        image : hyundai,
        name : "HYUNDAI"
    },
    {
        image : lexus,
        name : "LEXUS"
    },
    {
        image : nissan,
        name : "NISSAN"
    },
    {
        image : vw,
        name : "VOLKSWAGEN"
    },
  ]

  return (
    
    <div className="bg-pink-50 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-medium mb-4 text-orange-600">
          <span className="text-orange-600">*</span> Our Brands
        </h2>
        <p className="text-3xl font-bold mb-8">Trusted by leading brands</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-md flex items-center justify-center py-6"
            >
              <div className="flex flex-col items-center px-4">                
                <Image src={brand.image} alt={brand.name} width={450} height={350}/>                                             
                <p className="text-lg font-medium">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
