

import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import VisionSection from './Section3'
import TestimonialsSlider from '../Review'
import WhyUs from './whyUs'

const About: React.FC = () => {
  return (
    <div>
      <Section1/>
      <WhyUs/> 
      <Section2/>
      <VisionSection/>
      <TestimonialsSlider/>       
    </div>
  )
}

export default About
