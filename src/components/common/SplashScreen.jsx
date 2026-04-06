import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <motion.div
      key="splash"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      // Changed background to ph-blue
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ph-blue"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide uppercase">
          Philippine Sports Commission
        </h1>
        <motion.div 
          className="mt-6 w-48 h-1.5 bg-white/20 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* Changed loading bar to ph-yellow */}
          <motion.div 
            className="h-full bg-ph-yellow rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;