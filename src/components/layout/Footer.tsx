import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo white />
              <div>
                <h3 className="text-lg font-heading font-bold">DESIGN</h3>
                <p className="text-sm font-medium -mt-1 text-primary-200">CBSE Maths & Science Centre</p>
                <p className="text-xs sm:text-sm font-bold -mt1 text-white-600">(Only For CBSE Syllabus)</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              Premier coaching institute offering quality education in CBSE Mathematics and Science for students from Class 8 to 12.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-white hover:text-primary-200 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-200 transition-colors">
                <Instagram size={20} />
              </a> */}
              <a href="https://youtube.com/@designcbsemathscentre4277?feature=shared" className="text-white hover:text-primary-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/timetable" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Class Timings
                </Link>
              </li>
              <li>
                <Link to="/methodology" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Teaching Methodology
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/results" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Mathematics (Class 8-12)
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Science (Class 9-10)
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Physics (Class 11-12)
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Chemistry (Class 11-12)
                </Link>
              </li>
              <li>
                <Link to="/test-batches" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Test Batches
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-300 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  24, Karthik Nagar, (Near Kendriya Vidyalaya & Swathi Poly Clinic), Sowripalayam Main Road, Coimbatore-641028
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-300 mr-3 flex-shrink-0" />
                <a href="tel:9585441301" className="text-sm text-gray-300 hover:text-white transition-colors">
                  +91 9585441301
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-300 mr-3 flex-shrink-0" />
                <a href="mailto:jagadeesanal@gmail.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                  jagadeesanal@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-primary-300 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Monday - Friday<br />
                  Morning: 6:00 AM - 7:00 AM and <br />
                  Evening: 3:00 PM - 9:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="pt-8 border-t border-primary-800">
          <p className="text-sm text-center text-gray-400">
            &copy; {new Date().getFullYear()} DESIGN CBSE Maths & Science Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;