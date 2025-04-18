import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logo.png'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Wave Divider */}
        <div className="w-full h-16 overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 74"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,37L48,43.7C96,50,192,63,288,58.7C384,54,480,33,576,32.7C672,33,768,54,864,58.7C960,63,1056,50,1152,41.2C1248,33,1344,28,1392,26.2L1440,24L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z"
              fill="#FBBF24"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12 bg-gradient-to-b from-yellow-500 to-yellow-600">
          {/* About Column */}
          <motion.div 
            className="text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
             <div className="bg-black p-1 rounded-full">
               <img src={logo} alt="logo" className="h-8 w-8 object-contain" />
              </div>

              <h3 className="font-bold text-xl">Unirise</h3>
            </div>
            <p className="mb-4">
              An educational awareness initiative helping students make informed academic choices.
            </p>
            <p className="font-semibold">  El Milia, Jijel</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#event" className="hover:underline">Events</a></li>
              <li><a href="#team" className="hover:underline">Our Team</a></li>
              <li><a href="#register" className="hover:underline">Register</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>El Milia, Jijel, Algeria</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:unii.risee@gmail.com" className="hover:underline">unii.risee@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+213552226054</span>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div 
            className="text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.instagram.com/_unirise_/profilecard/?igsh=MWQ3djBzMDF0djZzdg==" target="_blank" rel="noopener noreferrer" className="bg-black p-2 rounded-full text-yellow-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/uni-rise/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="bg-black p-2 rounded-full text-yellow-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:info@uniriseclub.com" className="bg-black p-2 rounded-full text-yellow-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm">
              Subscribe to our newsletter for updates
            </p>
            <div className="mt-2 flex">
              <input type="email" placeholder="Your email" className="p-2 rounded-l-md w-full text-black" />
              <button className="bg-black text-yellow-400 px-4 rounded-r-md hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="py-6 text-center text-sm bg-black">
          <p>© 2024 Unirise Club. All rights reserved by <a href="https://dz.linkedin.com/in/aymen-boumezbeur-497284202" className="text-yellow-400 hover:underline">AYMEN BOUMEZBEUR</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;