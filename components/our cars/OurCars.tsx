import React from "react";
import Section1 from "./Section1";
import ServicesSection from "../ServiceSection";
import Gallery from "./Gallery";
import TextSlider from "../textslider";

const OurCars: React.FC = () => {
  return (
    <div>
      <Section1 />
      <ServicesSection />
      <TextSlider/>
      <Gallery />
    </div>
  );
};

export default OurCars;
