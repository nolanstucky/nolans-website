import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text }) => {
  const letters = Array.from(text);

  return (
    <div style={{ display: 'inline-block' }}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * index, duration: 0.5 }}
          style={{ display: 'inline-block', position: 'relative'}}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};