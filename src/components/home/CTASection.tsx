import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { BookOpen, Clock, CheckCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Image */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent-400 rounded-full opacity-20 filter blur-3xl"></div>
            <img 
              src="https://images.pexels.com/photos/6283979/pexels-photo-6283979.jpeg" 
              alt="Student studying" 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          
          {/* Right side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Get Started with a Free Trial Class
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Experience our teaching methodology firsthand. Book a free trial class today and see how we can help your child excel in mathematics and science.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-accent-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-primary-100">Experience our unique "Filling Method" for mathematics</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-accent-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-primary-100">Meet our experienced faculty members</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-accent-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-primary-100">Preview our comprehensive study materials</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-accent-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-primary-100">Choose between online and in-person sessions</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" size="lg" variant="accent" withArrow>
                Book a Trial Class
              </Button>
              <Button to="/timetable" size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
                View Schedule
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;