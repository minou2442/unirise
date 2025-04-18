import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; 

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#event' },
    { name: 'Team', href: '#team' },
    { name: 'Register', href: '#register' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-black p-1 rounded-full">
             <img src={logo} alt="logo" className="h-8 w-8 object-contain" />
          </div>

          <div className="text-white font-bold text-xl flex items-center">
            UniRise
            <Sparkles className="h-4 w-4 text-yellow-400 ml-1" />
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex space-x-8 items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-yellow-400 ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#register" 
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105"
          >
            Join Us
          </a>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white p-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-black shadow-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-yellow-400 transition-colors py-2 border-b border-gray-800"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#register" 
              className="bg-yellow-400 text-black py-2 px-4 rounded-full text-center mt-2"
              onClick={toggleMenu}
            >
              Join Us
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;