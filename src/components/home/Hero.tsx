import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Sparkles, BookOpen, Clock } from 'lucide-react';
import logo from '../images/logo.jpeg'
import teaching2 from '../images/teaching_2.jpeg'

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-400"></div>
        <div className="absolute top-20 -left-24 w-64 h-64 rounded-full bg-primary-500"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-primary-300"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center rounded-full bg-primary-900 px-4 py-1 text-sm font-medium text-primary-100 mb-6">
              <Sparkles size={14} className="mr-1" />
              Premier CBSE Coaching Institute in Coimbatore
            </span>
            <div className="flex justify-center mb-4">
              <img
                src={logo}
                alt="Design CBSE Logo"
                className="h-45 w-80"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Excellence in CBSE <br />Maths & Science Education
            </h1>
            <p className="text-lg text-primary-100 mb-8 max-w-lg">
              We prepare students from classes 8-12 for academic success with our hybrid learning approach and experienced faculty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" size="lg" variant="accent" withArrow>
                Book a Trial Class
              </Button>
              <Button to="/timetable" size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
                View Timetable
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary-600 rounded-lg">
                  <BookOpen size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Hybrid Learning</h3>
                  <p className="text-sm text-primary-200">Online & offline classes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary-600 rounded-lg">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Flexible Schedule</h3>
                  <p className="text-sm text-primary-200">Morning & evening batches</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-accent-400 rounded-full opacity-20 filter blur-3xl"></div>
              <img
                src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg"
                alt="Students in classroom"
                className="rounded-lg shadow-2xl w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;