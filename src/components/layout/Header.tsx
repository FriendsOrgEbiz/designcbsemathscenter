import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../common/Logo';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Class Timings', path: '/timetable' },
    { name: 'Test Batches', path: '/test-batches' },
    { name: 'Methodology', path: '/methodology' },
    { name: 'Testimonials', path: '/testimonials' }, 
    { name: 'Contact', path: '/contact' },
    { name: 'Results', path: '/results' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
            <div className={`transition-all duration-300 ${isScrolled ? 'text-primary-800' : 'text-primary-700'}`}>
              <h1 className="text-lg sm:text-xl font-heading font-bold">DESIGN</h1>
              <p className="text-xs sm:text-sm font-medium -mt-1">CBSE Maths & Science Centre</p>
              <p className="text-xs sm:text-sm font-bold -mt1 text-red-600">(Only For CBSE Syllabus)</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${location.pathname === item.path
                  ? 'text-primary-600 font-semibold'
                  : isScrolled ? 'text-gray-800' : 'text-gray-700'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:block bg-primary-600 hover:bg-primary-700 text-white font-medium text-sm px-4 py-2 rounded-md transition-colors"
          >
            Book Trial Class
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-800" />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-gray-700'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white mt-4 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="py-3 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block py-3 px-2 rounded-md text-sm font-medium ${location.pathname === item.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-800 hover:bg-gray-100'
                      }`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="mt-3 block w-full bg-primary-600 hover:bg-primary-700 text-white font-medium text-center py-3 px-4 rounded-md"
                  onClick={toggleMenu}
                >
                  Book Trial Class
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;