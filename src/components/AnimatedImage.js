import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/nolanHeadshot.png'; // Path to your image

const AnimatedImage = () => {
    const variants = {
        hidden: { clipPath: 'circle(0% at 50% 50%)' },
        visible: {
            clipPath: 'circle(150% at 50% 50%)',
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.img
            src={profileImage}
            alt="Descriptive Alt Text"
            initial="hidden"
            animate="visible"
            variants={variants}
            style={{ width: '50%', height: 'auto' }} // Adjust size as needed
        />
    );
};

export default AnimatedImage;