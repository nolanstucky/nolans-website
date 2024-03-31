import React from 'react';
import { motion } from 'framer-motion';

const ExpandedProject = ({ project, toggleExpand }) => {
    const expandedVariant = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.3, duration: 0.5 }
        },
    };

    const drawBorder = {
        hidden: { scaleX: 0, scaleY: 0 },
        visible: {
            scaleX: 1,
            scaleY: 1,
            transition: { duration: 1, ease: "easeInOut" }
        },
    };

    // Handle click on overlay to ensure it only closes when clicking outside the card
    const handleOverlayClick = (e) => {
        if (e.target.id === 'overlay') {
            toggleExpand();
        }
    };

    return (
        <>
            {/* Overlay */}
            <div
                id="overlay"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onClick={handleOverlayClick}
            >
                <motion.div
                    className="expanded-project"
                    variants={expandedVariant}
                    initial="hidden"
                    animate="visible"
                    style={{
                        position: 'relative',
                        width: '80%',
                        height: '80%',
                        maxWidth: '1500px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        
                        overflow: 'hidden',
                        padding: '20px',
                        zIndex: 1001,
                        
                    }}
                >
                    {/* Image, description, and other details */}
                    <img src={project.image} alt={project.title} style={{ width: '50%', height: 'auto' }} />
                    <h2>{project.title}</h2>
                    {/* Add more content as needed */}

                    {/* Animated borders */}
                    <motion.div
                        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'black' }}
                        variants={drawBorder}
                        initial="hidden"
                        animate="visible"
                    />
                    <motion.div
                        style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '2px', background: 'black' }}
                        variants={drawBorder}
                        initial="hidden"
                        animate="visible"
                    />
                    <motion.div
                        style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '2px', background: 'black' }}
                        variants={drawBorder}
                        initial="hidden"
                        animate="visible"
                    />
                    <motion.div
                        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '2px', background: 'black' }}
                        variants={drawBorder}
                        initial="hidden"
                        animate="visible"
                    />
                </motion.div>
            </div>
        </>
    );
};

export default ExpandedProject;