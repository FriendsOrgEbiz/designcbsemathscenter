import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import Button from "../common/Button";

import {
  Calculator,
  FlaskRound as Flask,
  Atom,
  FileText,
  ChevronRight,
} from "lucide-react";

interface CourseCardProps {
  title: string;
  grades: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  index: number;
  slug: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  grades,
  description,
  icon,
  iconColor,
  index,
  slug,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card hover className="h-full flex flex-col">
        <div className="p-6 flex-grow">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${iconColor}`}
          >
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-accent-600 font-medium mb-3">{grades}</p>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
        <div className="px-6 pb-6">
          <Link
            to={`/courses#${slug}`}
            className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
          >
            Explore Details <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

const CourseHighlights: React.FC = () => {
  const courses = [
    {
      title: "Mathematics",
      grades: "Classes 8 to 12",
      description:
        "Comprehensive mathematics curriculum following the CBSE syllabus with our unique Filling Method approach.",
      icon: <Calculator size={24} className="text-white" />,
      iconColor: "bg-primary-600",
      slug: "mathematics",
    },
    {
      title: "Science",
      grades: "Classes 9 & 10",
      description:
        "Integrated science program covering Physics, Chemistry, and Biology for CBSE students.",
      icon: <Flask size={24} className="text-white" />,
      iconColor: "bg-secondary-600",
      slug: "science",
    },
    {
      title: "Physics",
      grades: "Classes 11 & 12",
      description:
        "In-depth physics program designed to build strong conceptual understanding and problem-solving skills.",
      icon: <Atom size={24} className="text-white" />,
      iconColor: "bg-accent-600",
      slug: "physics",
    },
    {
      title: "Chemistry",
      grades: "Classes 11 & 12",
      description:
        "Comprehensive chemistry course with focus on theoretical concepts and practical applications.",
      icon: <FileText size={24} className="text-white" />,
      iconColor: "bg-gray-700",
      slug: "chemistry",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Courses"
          subtitle="Specialized programs designed to help students excel in CBSE board examinations"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              grades={course.grades}
              description={course.description}
              icon={course.icon}
              iconColor={course.iconColor}
              index={index}
              slug={course.slug}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/courses" variant="primary" size="lg" withArrow>
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
