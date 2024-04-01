import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AnimatedButton = ({ opacity, color, backgroundColor, width, height, children, redirectTo, isHoverable=true, hoverScale=1.15 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [firstDraw, setFirstDraw] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (firstDraw && isHovered) {
      setFirstDraw(false);
    }
  }, [isHovered, firstDraw]);

  // Define the animation variants
  const draw = {
    hidden: { scaleX: 0, scaleY: 0, backgroundColor: color },
    visible: {
      scaleX: firstDraw ? 1 : [1, 0, 1],
      scaleY: firstDraw ? 1 : [1, 0, 1],
      backgroundColor: color,
      transition: firstDraw ? { duration: 1, } : { duration: 0.1 }
    },
    hovered: {
      scaleX: [1, 0, 1], // scale down to 0 then back to 1
      scaleY: [1, 0, 1],
      backgroundColor: [color, color, '#ae4d43'], // change to red in the second phase
      transition: { duration: 0.3, times: [0, 0.5, 1], backgroundColor: { delay: 0.2 } }, // times array maps the transition to the scaleX/scaleY values
    }
  };

  const backgroundVariants = {
    hidden: { 
      opacity: 0,
      backgroundColor: "#FFFFFF",
    },

    visible: {
      opacity: opacity, 
      backgroundColor: backgroundColor,
      transition: { duration: 3 },
    },

    hovered: { opacity: opacity, backgroundColor: '#ae4d43' } // This could be a dynamic prop
  };

  const handleClick = () => {
    // Redirection logic
    navigate(redirectTo);
  };

  return (
    <motion.div
      style={{ position: 'relative', width, height }}
      onHoverStart={() => setIsHovered(isHoverable)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: hoverScale }} 
      transition={{ type: 'spring', stiffness: 300 }} 
      onClick={handleClick}
    >
      {/* Background */}
      <motion.div
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, transformOrigin: 'center' }}
        variants={backgroundVariants}
        initial="hidden"
        animate={isHovered ? "hovered" : "visible"}
      />

      {/* Top Border */}
      <motion.div
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 2 }}
        variants={draw}
        initial="hidden"
        animate={isHovered ? "hovered" : "visible"}
      />
      {/* Right Border */}
      <motion.div
        style={{ position: 'absolute', top: 0, right: 0, width: 2, height: '100%' }}
        variants={draw}
        initial="hidden"
        animate={isHovered ? "hovered" : "visible"}
      />
      {/* Bottom Border */}
      <motion.div
        style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: 2 }}
        variants={draw}
        initial="hidden"
        animate={isHovered ? "hovered" : "visible"}
      />
      {/* Left Border */}
      <motion.div
        style={{ position: 'absolute', bottom: 0, left: 0, width: 2, height: '100%' }}
        variants={draw}
        initial="hidden"
        animate={isHovered ? "hovered" : "visible"}
      />
      
      {React.cloneElement(children, { isHovered })}
     
    </motion.div>
  );
};

export default AnimatedButton;