import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Calendar, Clock, CheckCircle, PenTool, BookOpen, FileCheck } from 'lucide-react';

const TestBatchesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-primary-800 py-12 mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">Test Batches</h1>
            <p className="text-primary-100 mt-2">Regular assessments to track progress and improve performance</p>
          </motion.div>
        </div>
      </div>
      
      {/* Overview Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              title="Regular Assessment Program" 
              subtitle="Our approach to continuous evaluation and improvement"
            />
            <p className="text-gray-600 mb-6">
              At DEISGN CBSE Maths & Science Centre, we believe that regular testing is essential for identifying strengths and weaknesses in a student's understanding. Our structured test batches are designed to simulate exam conditions and provide valuable feedback to both students and teachers.
            </p>
            <p className="text-gray-600 mb-6">
              Each test is carefully crafted to assess conceptual understanding, application skills, and problem-solving abilities. Detailed performance analysis helps in addressing specific areas that need improvement.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">Questions based on latest CBSE patterns</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">Detailed performance analysis and feedback</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">Focus on time management and exam techniques</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">Personalized improvement strategies</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary-200 rounded-full opacity-50 filter blur-3xl"></div>
            <img 
              src="https://images.pexels.com/photos/5905559/pexels-photo-5905559.jpeg" 
              alt="Students taking test" 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Test Schedule Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Test Batch Schedules" 
            subtitle="Regular assessment sessions by class level"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <div className="p-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-50 mb-6">
                    <span className="text-xl font-bold text-primary-600">10</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Class 10 Test Batches</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Calendar size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Every Saturday</span>
                    </div>
                    <div className="flex items-start">
                      <Clock size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">4:00 PM - 7:00 PM (any one hour)</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Students can choose any one-hour slot within the given time frame. Tests are designed to mimic board exam conditions and cover recent topics.
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-3">Test Coverage</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <PenTool size={16} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                        Weekly syllabus coverage
                      </li>
                      <li className="flex items-start">
                        <PenTool size={16} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                        Monthly revision tests
                      </li>
                      <li className="flex items-start">
                        <PenTool size={16} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                        Full syllabus tests before exams
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <div className="p-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-50 mb-6">
                    <span className="text-xl font-bold text-primary-600">8-9</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Class 8 & 9 Test Batches</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Calendar size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Alternate Fridays</span>
                    </div>
                    <div className="flex items-start">
                      <Clock size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">5:00 PM - 6:00 PM</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Tests are conducted every alternate Friday to assess progress and reinforce learning. The focus is on building strong fundamentals and developing proper exam techniques.
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-3">Test Coverage</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <PenTool size={16} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                        Bi-weekly topic tests
                      </li>
                      <li className="flex items-start">
                        <PenTool size={16} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                        Quarterly cumulative assessments
                      </li>
                      <li className="flex items-start">
                        <PenTool size={16} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                        Foundation-building exercises
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <div className="p-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-50 mb-6">
                    <span className="text-xl font-bold text-primary-600">11-12</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Class 11 & 12 Test Batches</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Calendar size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Every Saturday</span>
                    </div>
                    <div className="flex items-start">
                      <Clock size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">4:00 PM - 7:00 PM (any one hour)</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Higher secondary students can select a convenient one-hour slot for weekly assessment. Tests are designed to match board exam patterns and prepare students for competitive exams.
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-3">Test Coverage</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <PenTool size={16} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                        Chapter-wise assessments
                      </li>
                      <li className="flex items-start">
                        <PenTool size={16} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                        Board pattern mock tests
                      </li>
                      <li className="flex items-start">
                        <PenTool size={16} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                        Advanced problem-solving sessions
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle 
          title="Benefits of Regular Testing" 
          subtitle="How our assessment program helps students excel"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="bg-primary-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <BookOpen size={24} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Identify Knowledge Gaps</h3>
            <p className="text-gray-600">
              Regular testing helps identify specific areas where students need additional help, allowing for targeted intervention before exams.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="bg-primary-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Clock size={24} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Improve Time Management</h3>
            <p className="text-gray-600">
              Practice under timed conditions helps students develop strategies for completing exams within the allotted time, reducing exam anxiety.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="bg-primary-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <FileCheck size={24} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Build Exam Confidence</h3>
            <p className="text-gray-600">
              Familiarity with test conditions increases confidence and reduces stress during actual board examinations.
            </p>
          </motion.div>
        </div>
        
        <div className="text-center mt-12">
          <Button to="/contact" variant="primary" size="lg">
            Book a Trial Class
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestBatchesPage;