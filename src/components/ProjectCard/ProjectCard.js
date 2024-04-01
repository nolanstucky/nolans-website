import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ExpandedProject from './ExpandedProject'

const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const cardVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.3, duration: 0.5 }
        },
    };

    const draw = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: { duration: 2 }
        },
    };

    return (
        <>
        {/* Overlay for expanded view */}
        {isExpanded && <div className="backdrop" onClick={toggleExpand} />}

        <motion.div
        className="project-card"
        initial="hidden"
        animate="visible"
        onClick={toggleExpand}
        style={{ 
            position: 'relative', 
            width: '100%', 
            maxWidth: '500px', 
            display: 'flex', 
            flexDirection: 'column', // Stack children vertically
            justifyContent: 'space-between', // Space between image and title
            overflow: 'hidden' // Keeps children within the border radius
        }}
    >
            {/* Container for image and screenshot with fixed height */}
            <div style={{ 
                position: 'relative', 
                width: '100%', 
                 // Fixed height
                overflow: 'hidden', // Hide overflow to maintain aspect ratio
            }}>
                {/* Project image */}
                <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: 'auto', borderRadius: '10px 10px 0 0', padding: '15px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                />
                {/* Animated SVG */}
                <motion.div
                    style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 , padding: '15px'}}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    {project.screenShot}
                </motion.div>
            </div>

            {/* Animated borders */}
            {/* Adjust the position and size to align with the image container */}
            <motion.div
                style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'grey' }}
                variants={draw}
                initial="hidden"
                animate="visible"
            />
            <motion.div
                style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '2px', background: 'grey' }}
                variants={draw}
                initial="hidden"
                animate="visible"
            />
            <motion.div
                style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '2px', background: 'grey' }}
                variants={draw}
                initial="hidden"
                animate="visible"
            />
            <motion.div
                style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '2px', background: 'grey' }}
                variants={draw}
                initial="hidden"
                animate="visible"
            />

            {/* Title container */}
            <motion.div
                style={{ 
                    padding: '5px',
                    
                    textAlign: 'center',
                }}
            >
                <motion.h5 style={{ marginTop: "-15px"}}>{project.title}</motion.h5>
            </motion.div>
        </motion.div>
        {isExpanded && <ExpandedProject project={project} toggleExpand={toggleExpand} />}
        </>
    );
};

export default ProjectCard;