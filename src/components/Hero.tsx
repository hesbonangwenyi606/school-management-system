import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/6916e3723b152b4908e63d05_1763107780800_c030d644.webp"
          alt="School"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <motion.div 
          className="max-w-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-5xl font-bold mb-6">
            Empowering Education Through Smart Management
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Streamline your school operations with our comprehensive platform. 
            Track attendance, manage grades, and connect with parents - all in one place.
          </p>
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button 
              onClick={onGetStarted}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </button>
            <button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Watch Demo
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
