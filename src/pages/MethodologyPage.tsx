import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { Calculator, BookOpen, FileText, CheckCircle, Star } from 'lucide-react';

const MethodologyPage: React.FC = () => {
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
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">Teaching Methodology</h1>
            <p className="text-primary-100 mt-2">Our unique approach to mathematics and science education</p>
          </motion.div>
        </div>
      </div>

      {/* Filling Method Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="The Filling Method"
              subtitle="Our innovative approach to teaching mathematics"
            />
            <p className="text-gray-600 mb-6">
              The Filling Method is a unique pedagogical approach developed by our experienced faculty to make mathematics learning more intuitive and accessible for students of all abilities.
            </p>
            <p className="text-gray-600 mb-6">
              Unlike traditional teaching methods that focus on memorizing formulas, the Filling Method emphasizes conceptual understanding by breaking down complex mathematical problems into manageable steps that students can "fill in" systematically.
            </p>
            <p className="text-gray-600 mb-6">
              This approach helps students visualize problems, develop logical thinking, and build confidence in their mathematical abilities. The method has proven particularly effective for students who previously struggled with mathematics.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">Step-by-step approach to problem-solving</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">Visual representation of mathematical concepts</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">Pattern recognition and logical reasoning development</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">Progressive complexity to build confidence</p>
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
            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Calculator size={20} className="text-primary-600 mr-2" />
                  The Filling Method Process
                </h3>
              </div>

              {/* Step 1 */}
              <div className="relative pl-8 pb-8 border-l-2 border-primary-200">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Concept Visualization</h4>
                <p className="text-gray-600">
                  Students are taught to visualize mathematical concepts through diagrams, charts, and models, creating a mental framework.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative pl-8 pb-8 border-l-2 border-primary-200">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Pattern Recognition</h4>
                <p className="text-gray-600">
                  Students learn to identify recurring patterns and relationships in mathematical problems.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative pl-8 pb-8 border-l-2 border-primary-200">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Template Application</h4>
                <p className="text-gray-600">
                  Using structured templates, students "fill in" the required components to solve problems systematically.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative pl-8">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 4: Mastery Through Practice</h4>
                <p className="text-gray-600">
                  Progressive practice with increasing complexity leads to mastery and confidence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Comprehensive Study Material */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Comprehensive Study Material"
            subtitle="Meticulously curated content from over 10 reference books"
            center
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <BookOpen size={24} className="text-primary-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Our Study Material Features</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-50 rounded-full p-2 mt-1 mr-4 flex-shrink-0">
                      <FileText size={16} className="text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Coverage</h4>
                      <p className="text-gray-600">
                        Our materials cover the entire CBSE syllabus with additional enrichment content for curious learners.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-50 rounded-full p-2 mt-1 mr-4 flex-shrink-0">
                      <FileText size={16} className="text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Curated from Multiple Sources</h4>
                      <p className="text-gray-600">
                        Each topic incorporates content from over 10 reference books, ensuring diverse perspectives and thorough understanding.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-50 rounded-full p-2 mt-1 mr-4 flex-shrink-0">
                      <FileText size={16} className="text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Structured Progression</h4>
                      <p className="text-gray-600">
                        Content is organized in a logical sequence, building from fundamental concepts to advanced applications.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-50 rounded-full p-2 mt-1 mr-4 flex-shrink-0">
                      <FileText size={16} className="text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Practice-Oriented</h4>
                      <p className="text-gray-600">
                        Extensive practice problems with varying difficulty levels to reinforce learning and build confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <img
                src="https://img.freepik.com/premium-photo/children-reading-from-books-together_13339-268320.jpg"
                alt="Study materials"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Teaching Philosophy */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="Our Teaching Philosophy"
          subtitle="Core principles that guide our educational approach"
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
            <div className="flex items-center mb-6">
              <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Star size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Conceptual Clarity</h3>
            </div>
            <p className="text-gray-600">
              We prioritize deep conceptual understanding over mere memorization. Students are encouraged to ask "why" and "how" questions to develop critical thinking skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Star size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Personalized Attention</h3>
            </div>
            <p className="text-gray-600">
              We recognize that each student has unique learning needs and pace. Our approach allows for personalized attention to address individual challenges and build on strengths.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Star size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Result-Oriented</h3>
            </div>
            <p className="text-gray-600">
              While we focus on conceptual understanding, we also ensure that students are well-prepared for board examinations with regular tests and targeted preparation strategies.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MethodologyPage;