import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import CourseHighlights from '../components/home/CourseHighlights';
import CTASection from '../components/home/CTASection';
import TestimonialSlider from '../components/home/TestimonialSlider';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <CourseHighlights />
      <CTASection />
      {/* <TestimonialSlider /> */}
    </>
  );
};

export default HomePage;