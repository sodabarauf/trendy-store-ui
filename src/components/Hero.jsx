'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative overflow-hidden text-center py-24 px-6 bg-gradient-to-b from-pink-100 via-blue-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Decorative Gradient Circles */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-pink-300 opacity-20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-1/3 transform translate-x-1/2 w-[400px] h-[400px] bg-blue-300 opacity-20 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4"
      >
        Welcome to TrendyStore
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8"
      >
        Explore top fashion picks and accessories for your modern lifestyle.
      </motion.p>

      {/* Animated Button */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2, boxShadow: '0px 12px 30px rgba(236, 72, 153, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg"
      >
        Shop Now
      </motion.button>
    </motion.section>
  );
}
