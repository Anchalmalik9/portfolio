import React from 'react';
import { motion } from 'framer-motion';

const FadeSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className="relative z-10 w-full"
    >
      {children}
    </motion.div>
  );
};

export default FadeSection;
