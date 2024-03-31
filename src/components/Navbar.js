import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TestMotion from './TestMotion';
import AnimatedText from './AnimatedText';

const Navbar = () => {
  const navbarWidth = window.innerWidth;

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const AnimatedText = ({ text }) => {
    const letters = Array.from(text);
  
    return (
      <div style={{ display: 'inline-block' }}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.1 * index, // Stagger the animation of each letter
              duration: 0.5,
              ease: "easeOut"
            }}
            style={{ display: 'inline-block', position: 'relative' }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <nav style={{ ...styles.navbar, position: 'relative' }}>
      <TestMotion width={navbarWidth} />
      <div style={styles.linkContainer}>
        <Link to="/" style={styles.link}>
          <AnimatedText text="Home" />
        </Link>
        <div style={styles.separator}></div>
        <Link to="/projects" style={styles.link}>
          <AnimatedText text="Projects" />
          
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

const borderColor = 'grey';

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0px',
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: borderColor,
    textDecoration: 'none',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  separator: {
    height: '80%', // Adjust the height as needed
    width: '1px',
    backgroundColor: borderColor,
    margin: '0 10px',
  }
};