import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle";
import { Award, BookOpen, Sparkles, Users, School } from "lucide-react";

const AboutPage: React.FC = () => {
  const handleGetDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          const destinationLat = 10.999977; // Replace with your actual latitude
          const destinationLng = 76.995217; // Replace with your actual longitude

          const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}`;

          window.open(mapsUrl, "_blank");
        },
        (error) => {
          alert(
            "Unable to access your location. Please enable location services."
          );
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

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
              About Us
            </h1>
            <p className="text-primary-100 mt-2">
              Learn more about DESIGN CBSE Maths & Science Centre
            </p>
          </motion.div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="Who We Are"
              subtitle="Premier coaching institute specializing in CBSE mathematics and science education"
            />
            <p className="text-gray-600 mb-6">
              DESIGN CBSE Maths & Science Centre was established with a vision
              to provide quality education to students following the CBSE
              curriculum. Located in Coimbatore, we specialize in teaching
              Mathematics and Science subjects to students from classes 8 to 12.
            </p>
            <p className="text-gray-600 mb-6">
              Our team consists of experienced educators who are passionate
              about teaching and committed to helping students achieve academic
              excellence. We believe in a structured and methodical approach to
              learning, which has helped numerous students score exceptionally
              well in their board examinations.
            </p>
            <p className="text-gray-600">
              At DESIGN, we focus exclusively on the CBSE syllabus, ensuring
              that our teaching methods and study materials are perfectly
              aligned with the board's requirements and examination patterns.
            </p>
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
              src="https://img.freepik.com/premium-photo/vibrant-side-view-portrait-male-teacher-helping-student-using-computer-college-classroom-copy_236854-39188.jpg"
              alt="Our institute"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Our Mission & Values */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Mission & Values"
            subtitle="Guiding principles that define our approach to education"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Sparkles size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To empower students with strong conceptual understanding and
                problem-solving skills that help them excel in their academics
                and beyond.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                We are committed to maintaining high standards of education
                through continuous improvement of our teaching methods and study
                materials.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Student-Centered
              </h3>
              <p className="text-gray-600">
                We prioritize the individual needs of each student, providing
                personalized attention and guidance to help them reach their
                full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionTitle
          title="Our Location"
          subtitle="Conveniently located in Coimbatore"
          center
        />

        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <School size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    DESIGN CBSE Maths & Science Centre
                    (Only For CBSE Syllabus)
                  </h3>
                  <p className="text-gray-600">
                    24, Karthik Nagar, (Near Kendriya Vidyalaya & Swathi Poly Clinic),
                    <br />
                    Sowripalayam Main Road, Coimbatore-641028
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-6 border-b border-gray-200">
                <div className="mb-4 md:mb-0 flex items-center">
                  <div className="bg-primary-50 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <BookOpen size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Contact Number</p>
                    <p className="text-base font-medium">+91 9585441301</p>
                  </div>
                </div>

                {/* COMMENTED BECAUSE UNABLE TO IMPLEMENT THE GOOGLE MAP FUNCTION */}
                {/* <button
                  onClick={handleGetDirections}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Get Directions
                </button> */}

              </div>

              {/* Map */}
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465.32897836298446!2d76.99925402928959!3d11.007633267135226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859d1bf259d8b%3A0x3c6ae5996f89e3e1!2sDesign%20Cbse%20Maths%20Centre!5e1!3m2!1sen!2sin!4v1750128398380!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DESIGN CBSE Maths & Science Centre location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
