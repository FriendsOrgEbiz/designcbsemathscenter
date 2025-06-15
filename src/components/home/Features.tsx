import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import {
  Users, Award, BookOpen, Calculator,
  Clock, BadgeCheck, Target, Sparkles
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Users size={24} />,
      title: "Experienced Faculty",
      description: "Learn from highly qualified educators with years of experience in CBSE curriculum."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Comprehensive Study Material",
      description: "Access to meticulously compiled study materials from over 10 reference books."
    },
    {
      icon: <Calculator size={24} />,
      title: "Filling Method",
      description: "Unique methodology that helps students master mathematical concepts efficiently."
    },
    {
      icon: <Clock size={24} />,
      title: "Flexible Timing",
      description: "Morning and evening batch options to suit your schedule and preference."
    },
    {
      icon: <Target size={24} />,
      title: "Regular Tests",
      description: "Weekly test sessions to evaluate progress and identify improvement areas."
    },
    {
      icon: <BadgeCheck size={24} />,
      title: "Proven Results",
      description: "Track record of producing top-scoring students in CBSE examinations."
    },
    {
      icon: <Award size={24} />,
      title: "CBSE Focused",
      description: "Curriculum designed specifically for CBSE board examinations."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Hybrid Learning",
      description: "Seamless combination of online and offline teaching methods."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose Us"
          subtitle="We provide comprehensive support to help students excel in CBSE mathematics and science subjects"
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;