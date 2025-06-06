import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  grade: string;
  text: string;
  rating: number;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Arjun Sharma",
    grade: "Class 12 (2022-23)",
    text: "The mathematics filling method taught at DEISGN helped me understand complex concepts that seemed impossible before. I secured 98/100 in my board exams.",
    rating: 5,
    image: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Priya Nair",
    grade: "Class 10 (2022-23)",
    text: "The teachers are incredibly supportive and the study materials are comprehensive. My science scores improved dramatically after joining the institute.",
    rating: 5,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Rohit Menon",
    grade: "Class 11 (2021-22)",
    text: "The physics classes are exceptional. Complex topics are explained with great clarity using real-world examples. Highly recommend for CBSE students.",
    rating: 4,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Ananya Patel",
    grade: "Class 9 (2022-23)",
    text: "I used to struggle with mathematics, but the filling method made it so much easier to understand. The teachers are patient and explain concepts thoroughly.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Student Testimonials" 
          subtitle="Hear what our students have to say about their experience with us"
          center
        />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Slider */}
          <div className="relative overflow-hidden py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <Quote size={48} className="text-primary-100 mb-6" />
                
                <p className="text-lg text-gray-700 mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="flex items-center">
                  {testimonials[currentTestimonial].image && (
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  )}
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentTestimonial].grade}
                    </p>
                    
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < testimonials[currentTestimonial].rating ? 'text-accent-500 fill-accent-500' : 'text-gray-300'} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Prev/Next Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;