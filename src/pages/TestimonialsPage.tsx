import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import { Star, Quote, MessageCircle, Star as StarOutline } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  grade: string;
  year: string;
  rating: number;
  text: string;
  image?: string;
  subject?: string;
}

const TestimonialsPage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    class: "",
    subject: "",
    rating: 0,
    testimonial: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRating = (star: number) => {
    setFormData((prev) => ({ ...prev, rating: star }));
    console.log("Selected rating:", star);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    console.log("Form submitted:", formData);
    // You can send formData to your backend here
  };

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Arjun Sharma",
      grade: "Class 12",
      year: "2022-23",
      subject: "Mathematics",
      rating: 5,
      text: "The mathematics filling method taught at DESIGN helped me understand complex concepts that seemed impossible before. I secured 98/100 in my board exams and got selected in my dream engineering college. The teachers are extremely supportive and the study materials are comprehensive.",
      image:
        "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Priya Nair",
      grade: "Class 10",
      year: "2022-23",
      subject: "Science",
      rating: 5,
      text: "The teachers are incredibly supportive and the study materials are comprehensive. My science scores improved dramatically after joining the institute. The regular test batches helped me identify my weaknesses and work on them. I scored 95% in Science and attribute my success to DESIGN's systematic approach.",
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Rohit Menon",
      grade: "Class 11",
      year: "2021-22",
      subject: "Physics",
      rating: 4,
      text: "The physics classes are exceptional. Complex topics are explained with great clarity using real-world examples. The teachers ensure that we understand the concepts thoroughly before moving to the next topic. The hybrid learning model worked great for me as I could attend classes both online and offline based on my convenience.",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Ananya Patel",
      grade: "Class 9",
      year: "2022-23",
      subject: "Mathematics",
      rating: 5,
      text: "I used to struggle with mathematics, but the filling method made it so much easier to understand. The teachers are patient and explain concepts thoroughly. The step-by-step approach helped me build my confidence. I'm now among the top performers in my class and actually enjoy solving math problems!",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Vikram Singh",
      grade: "Class 12",
      year: "2021-22",
      subject: "Chemistry",
      rating: 5,
      text: "The chemistry classes at DESIGN are excellent. The teachers make complex organic chemistry seem easy with their unique teaching methods. The study material is very comprehensive and covers even the most difficult topics in a simple manner. I scored 96 in chemistry and got selected in a top medical college.",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "Shreya Desai",
      grade: "Class 10",
      year: "2021-22",
      subject: "Mathematics",
      rating: 4,
      text: "The mathematics classes helped me overcome my fear of the subject. The filling method is truly effective and makes problem-solving systematic and easy. Regular tests helped me track my progress. The teachers are always available to clear doubts even outside class hours.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      name: "Aditya Kumar",
      grade: "Class 11",
      year: "2022-23",
      subject: "Physics",
      rating: 5,
      text: "Physics was always challenging for me until I joined DESIGN. The teachers explain complex topics with such clarity that even the most difficult concepts become easy to understand. The practice problems and regular tests are extremely helpful. I'm confident of scoring well in my board exams.",
      image:
        "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      name: "Meera Iyer",
      grade: "Class 8",
      year: "2022-23",
      subject: "Mathematics",
      rating: 5,
      text: "I joined DESIGN in class 8 to build a strong foundation in mathematics. The teachers are excellent and make learning fun. The filling method has helped me develop a structured approach to problem-solving. I look forward to continuing my education here through high school.",
      image:
        "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const filteredTestimonials =
    selectedSubject === "all"
      ? testimonials
      : testimonials.filter((t) => t.subject === selectedSubject);

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
              Student Testimonials
            </h1>
            <p className="text-primary-100 mt-2">
              Success stories from our students
            </p>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What Our Students Say"
          subtitle="Hear from students who have experienced our unique teaching methods"
          center
        />

        {/* Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
            <button
              onClick={() => setSelectedSubject("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${selectedSubject === "all"
                  ? "bg-primary-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedSubject("Mathematics")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${selectedSubject === "Mathematics"
                  ? "bg-primary-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              Mathematics
            </button>
            <button
              onClick={() => setSelectedSubject("Science")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${selectedSubject === "Science"
                  ? "bg-primary-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              Science
            </button>
            <button
              onClick={() => setSelectedSubject("Physics")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${selectedSubject === "Physics"
                  ? "bg-primary-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              Physics
            </button>
            <button
              onClick={() => setSelectedSubject("Chemistry")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${selectedSubject === "Chemistry"
                  ? "bg-primary-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              Chemistry
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="p-6 flex-grow">
                  <Quote size={36} className="text-primary-100 mb-4" />

                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                    )}

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.grade}, {testimonial.year}
                      </p>

                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < testimonial.rating
                                ? "text-accent-500 fill-accent-500"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Submit Testimonial */}
      <div className="bg-gray-50 py-16 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Share Your Story"
            subtitle="We'd love to hear about your experience with us"
            center
          />

          <div className="max-w-2xl mx-auto mt-12 bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <MessageCircle size={24} className="text-primary-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">
                Submit Your Testimonial
              </h3>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="class"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Class & Year
                  </label>
                  <input
                    type="text"
                    id="class"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Class 10, 2022-23"
                    value={formData.class}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Rating
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="focus:outline-none"
                      onClick={() => handleRating(star)}
                    >
                      {/* <Star size={24} 
                      className={star <= rating ? 'text-yellow-400' : 'text-gray-300'} /> */}
                      {star <= formData.rating ? (
                        <Star
                          fill="currentColor"
                          className="text-yellow-400"
                          size={24}
                        />
                      ) : (
                        <StarOutline className="text-gray-300" size={24} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="testimonial"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Testimonial
                </label>
                <textarea
                  id="testimonial"
                  rows={5}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Share your experience with us..."
                  value={formData.testimonial}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Submit Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
