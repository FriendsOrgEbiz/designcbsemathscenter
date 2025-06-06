import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { 
  Phone, Mail, MapPin, Clock, Send, 
  MessageCircle, BookOpen, Calendar 
} from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  studentClass: string;
  subject: string;
  message: string;
  trialClass: boolean;
}

const ContactPage: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<ContactFormData>();
  
  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
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
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">Contact Us</h1>
            <p className="text-primary-100 mt-2">Get in touch with us for inquiries or to book a trial class</p>
          </motion.div>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="We're here to answer any questions you may have"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="bg-primary-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Phone size={24} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
            <p className="text-gray-600 mb-4">Feel free to call us for any inquiries</p>
            <a 
              href="tel:9585441301" 
              className="text-lg font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              +91 9585441301
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="bg-primary-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Mail size={24} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
            <p className="text-gray-600 mb-4">We'll respond to your email promptly</p>
            <a 
              href="mailto:info@designcbsecentre.com" 
              className="text-lg font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              info@designcbsecentre.com
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="bg-primary-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Clock size={24} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Office Hours</h3>
            <p className="text-gray-600 mb-4">Our center is open:</p>
            <ul className="space-y-2 text-gray-700">
              <li>Monday - Friday: 6:00 AM - 9:00 PM</li>
              <li>Saturday: 4:00 PM - 7:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </motion.div>
        </div>
      </div>
      
      {/* Contact Form and Map */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div 
              className="p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <MessageCircle size={24} className="text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className={`w-full rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+91 98765 43210"
                      {...register('phone', { 
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9+\- ]{10,15}$/,
                          message: 'Invalid phone number'
                        }
                      })}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="studentClass" className="block text-sm font-medium text-gray-700 mb-1">
                      Student's Class
                    </label>
                    <select
                      id="studentClass"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      {...register('studentClass')}
                    >
                      <option value="">Select Class</option>
                      <option value="Class 8">Class 8</option>
                      <option value="Class 9">Class 9</option>
                      <option value="Class 10">Class 10</option>
                      <option value="Class 11">Class 11</option>
                      <option value="Class 12">Class 12</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject of Interest
                    </label>
                    <select
                      id="subject"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      {...register('subject')}
                    >
                      <option value="">Select Subject</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Science">Science (Class 9-10)</option>
                      <option value="Physics">Physics (Class 11-12)</option>
                      <option value="Chemistry">Chemistry (Class 11-12)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="How can we help you?"
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="trialClass"
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 mt-1"
                    {...register('trialClass')}
                  />
                  <label htmlFor="trialClass" className="ml-2 block text-sm text-gray-700">
                    I would like to book a trial class
                  </label>
                </div>
                
                <div>
                  <Button type="submit" variant="primary" className="w-full">
                    <Send size={16} className="mr-2" /> Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50"
            >
              <div className="h-80 lg:h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4517820060585!2d76.99013787380644!3d11.008384954833937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af3faa805f%3A0xb8b3c25e8b0a5eb5!2sSowripalayam%20Main%20Rd%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1717191464000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DEISGN CBSE Centre location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Book Trial Class CTA */}
      <div className="bg-primary-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Book a Free Trial Class Today
              </h2>
              <p className="text-primary-100 mb-6 lg:mb-0">
                Experience our teaching methodology firsthand. Try a class with no obligations and see the difference in our approach.
              </p>
            </div>
            
            <div className="lg:col-span-2 flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="accent" size="lg" className="flex-1">
                <BookOpen size={18} className="mr-2" /> Book Trial Class
              </Button>
              <Button to="/timetable" variant="outline" size="lg" className="flex-1 border-white text-white hover:bg-primary-700">
                <Calendar size={18} className="mr-2" /> View Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;