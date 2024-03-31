import React from 'react';
import { motion } from 'framer-motion';

const TestMotion = ({ width }) => {
  const halfWidth = width / 2; // Calculate the middle point

  const draw = {
    hidden: { 
      x1: halfWidth,
      x2: halfWidth
    },
    visible: { 
      x1: 0,
      x2: width,
      transition: { duration: 1 }
    },
  };

  return (
    <motion.svg width="100%" height="4" style={{ position: 'absolute', bottom: 0 }}>
      <motion.line
        y1="2"
        y2="2"
        stroke="grey" // Or any color you prefer
        strokeWidth="2"
        variants={draw}
        initial="hidden"
        animate="visible"
      />
    </motion.svg>
  );
};

export default TestMotion;