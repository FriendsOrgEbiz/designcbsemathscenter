import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import teachingImage from '../components/images/teaching_1.jpeg'
import {
  Calculator,
  FlaskRound as Flask,
  Atom,
  FileText,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

interface CourseCardProps {
  title: string;
  icon: React.ReactNode;
  iconBg: string;
  description: string;
  classes: string[];
  features: string[];
  index: number;
  slug: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  icon,
  iconBg,
  description,
  classes,
  features,
  index,
  slug,
}) => {
  return (
    <motion.div
      id={slug}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full" hover>
        <div className="p-6">
          <div
            className={`w-14 h-14 rounded-lg ${iconBg} flex items-center justify-center mb-6`}
          >
            {icon}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold uppercase text-gray-500 mb-3">
              Available For
            </h4>
            <div className="flex flex-wrap gap-2">
              {classes.map((cls, i) => (
                <span
                  key={i}
                  className="bg-primary-50 text-primary-700 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {cls}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold uppercase text-gray-500 mb-3">
              Key Features
            </h4>
            <div className="space-y-2">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mt-0.5 mr-2 flex-shrink-0"
                  />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Button to="/timetable" className="w-full">
            <span className="flex items-center justify-center">
              View Schedule <ChevronRight size={16} className="ml-1" />
            </span>
          </Button>


        </div>
      </Card>
    </motion.div>
  );
};

const CoursesPage: React.FC = () => {
  const courses: CourseCardProps[] = [
    {
      title: "Mathematics",
      slug: "mathematics",
      icon: <Calculator size={28} className="text-white" />,
      iconBg: "bg-primary-600",
      description:
        "Comprehensive mathematics curriculum following the CBSE syllabus with our unique Filling Method approach that makes understanding concepts easier.",
      classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
      features: [
        "Unique Filling Method for easier understanding",
        "Comprehensive study materials from 10+ reference books",
        "Regular tests and assessments",
        "Focus on board exam preparation",
        "Problem-solving techniques and shortcuts",
      ],
      index: 0,
    },
    {
      title: "Science",
      slug: "science",
      icon: <Flask size={28} className="text-white" />,
      iconBg: "bg-secondary-600",
      description:
        "Integrated science program covering Physics, Chemistry, and Biology for CBSE students with focus on conceptual clarity and practical applications.",
      classes: ["Class 9", "Class 10"],
      features: [
        "Integrated approach to all science subjects",
        "Practical demonstrations for key concepts",
        "Focus on NCERT and board exam questions",
        "Regular practice tests and assignments",
        "Special attention to diagrams and illustrations",
      ],
      index: 1,
    },
    {
      title: "Physics",
      slug: "physics",
      icon: <Atom size={28} className="text-white" />,
      iconBg: "bg-accent-500",
      description:
        "In-depth physics program designed to build strong conceptual understanding and problem-solving skills for CBSE students.",
      classes: ["Class 11", "Class 12"],
      features: [
        "Conceptual approach to complex topics",
        "Numerical problem-solving practice",
        "Focus on derivations and their applications",
        "Regular tests aligned with CBSE pattern",
        "Special guidance for board exam preparation",
      ],
      index: 2,
    },
    {
      title: "Chemistry",
      slug: "chemistry",
      icon: <FileText size={28} className="text-white" />,
      iconBg: "bg-gray-700",
      description:
        "Comprehensive chemistry course with focus on theoretical concepts, chemical equations, and their practical applications.",
      classes: ["Class 11", "Class 12"],
      features: [
        "Balanced approach to organic and inorganic chemistry",
        "Focus on chemical equations and reactions",
        "Special attention to NCERT examples and exercises",
        "Regular practice for numerical problems",
        "Tailored study material for board preparation",
      ],
      index: 3,
    },
  ];

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
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Our Courses
            </h1>
            <p className="text-primary-100 mt-2">
              Specialized programs to help students excel in CBSE examinations
            </p>
          </motion.div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Explore Our Programs"
          subtitle="Comprehensive courses designed specifically for CBSE students from Class 8 to 12"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {courses.map((course, index) => (
            <div id={course.slug} className="scroll-mt-32">
              <CourseCard
                key={index}
                title={course.title}
                icon={course.icon}
                iconBg={course.iconBg}
                description={course.description}
                classes={course.classes}
                features={course.features}
                slug={course.slug}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Teaching Approach */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                title="Our Teaching Approach"
                subtitle="What makes our courses effective and result-oriented"
              />

              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-2 mt-1 mr-4">
                    <CheckCircle size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Customized Study Materials
                    </h4>
                    <p className="text-gray-600">
                      Our study materials are created by expert educators who
                      carefully compile the most important concepts and
                      questions from over 10 reference books.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-2 mt-1 mr-4">
                    <CheckCircle size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Regular Testing & Assessment
                    </h4>
                    <p className="text-gray-600">
                      Weekly tests help students evaluate their understanding
                      and prepare them for the exam environment. Detailed
                      feedback is provided to address weaknesses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-2 mt-1 mr-4">
                    <CheckCircle size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Hybrid Learning Model
                    </h4>
                    <p className="text-gray-600">
                      We offer both online and offline classes, allowing
                      students to choose the mode that works best for them. The
                      content and quality remain consistent across both formats.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-2 mt-1 mr-4">
                    <CheckCircle size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Board Exam Focus
                    </h4>
                    <p className="text-gray-600">
                      Our teaching is strategically aligned with CBSE
                      examination patterns, ensuring students are thoroughly
                      prepared for their board exams.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={teachingImage}
                // "https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg"
                alt="Teaching approach"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
