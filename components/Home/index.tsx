import React from "react";
import Banner from "./Page";
import FaqSection from "./FaqSection";
import Testimonials from "../Review";
import ServicesSection from "../ServiceSection";
import Gallery from "./Gallery";
import TextSlider from "../textslider";

const Home = () => {
  return (
    <section>
      <Banner />
      <ServicesSection />
      <TextSlider/>
      <Gallery />
      <Testimonials />
      <FaqSection />
    </section>
  );
};

export default Home;

