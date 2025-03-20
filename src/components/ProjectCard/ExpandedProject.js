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


    const renderImages = () => {
        const images = project.image; // Use the correct property from your project data
        if (!images) return null; // Guard clause if no images
    
        // Ensure 'images' is always an array for consistency
        const imagesArray = Array.isArray(images) ? images : [images];
        const imageCount = imagesArray.length;
    
        // Calculate image width based on the number of images
        let imageStyle;
        switch (imageCount) {
            case 1:
                // Specific style for a single image
                imageStyle = {aspectRatio: 16/9, maxWidth: '50%', height: 'auto', objectFit: 'cover', marginBottom: '15px' };
                break;
            case 2:
                // For two images, each takes half the container width
                imageStyle = {aspectRatio: 16/9, width: 'calc(50% - 10px)', height: 'auto', objectFit: 'cover', marginBottom: '15px' };
                break;
            case 4:
                // Adjust for exactly four images to fit in a 2x2 grid
                imageStyle = {aspectRatio: 16/9, width: 'calc(32% - 10px)', height: 'auto', objectFit: 'cover', marginBottom: '15px' };
                break;
            default:
                // Default case for other numbers of images
                imageStyle = {aspectRatio: 16/9, width: 'calc(50% - 10px)', height: 'auto', objectFit: 'cover', marginBottom: '15px' };
                break;
        }
    
        return imagesArray.map((image, index) => (
            <img key={index} src={image} alt={`Project detail ${index}`} style={imageStyle} />
        ));
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
                    {/* Images Row */}
                    {/* Image Container */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'flex-start', marginBottom: '20px' }}>
                        {renderImages()}
                    </div>

                    {/* Title and Description */}
                    <div style={{ textAlign: 'left' }}>
                        <h5>{project.projectTitle}</h5>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <p>{project.description}</p>
                    </div>

                    {/* Technologies */}
                    <div style={{ position: 'absolute', bottom: '70px', left: '20px' }}>
                        <p>{project.technologies}</p>
                    </div>

                    {/* Links */}
                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', gap: '10px' }}>
                        <a href={project.deployedLink}>Live Site</a>
                        <a href={project.githubLink}>GitHub</a>
                    </div>

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