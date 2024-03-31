import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PortfolioText = ({ isHovered }) => {
    const pathLength = 500; // Adjust based on your SVG path
    const [firstAnimationComplete, setFirstAnimationComplete] = useState(false);

    useEffect(() => {
        if (isHovered) {
            setFirstAnimationComplete(true);
        }
    }, [isHovered]);

    const pathVariants = {
        hidden: {
            strokeDashoffset: pathLength,
            strokeDasharray: pathLength,
            fill: "rgba(0, 0, 0, 0)"
        },
        visible: {
            strokeDashoffset: [pathLength, 0], // Animate from full length to 0
            fill: "none",
            stroke: "#231f20",
            transition: {
                duration: firstAnimationComplete ? 1 : 4,
                ease: "easeInOut"
            }
        },
        hovered: {
            strokeDashoffset: [pathLength, 0],
            fill: "none",
            stroke: "#ae4d43",
            transition: {
                duration: 1,
                ease: "easeInOut",
            }
        }
    };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="-90 -30 390 200.63" >
      <defs>
        <style>{".cls-71{stroke-width:2px;}"}</style>
      </defs>
      <motion.path
        d="M21.84 36.39c-1.24.56-2.5 1.08-3.78 1.56-1.28.48-2.12.78-2.52.9.2 4.88.3 9.04.3 12.48 0 1.12.13 2.03.39 2.73.26.7.39 1.15.39 1.35 0 .44-.22.81-.66 1.11-.44.3-.9.45-1.38.45-.6 0-.98-.42-1.14-1.26 0-.08-.05-.44-.15-1.08-.1-.64-.15-1.54-.15-2.7 0-3.12-.12-8.24-.36-15.36-.12-3.6-.18-6.16-.18-7.68 0-1.28.02-2.47.06-3.57.04-1.1.06-1.85.06-2.25-2.52.68-4.7 1.38-6.54 2.1-.6.28-1.44.74-2.52 1.38-.48.28-.95.54-1.41.78-.46.24-.81.36-1.05.36-.32 0-.6-.14-.84-.42-.24-.28-.36-.62-.36-1.02 0-.52.76-1.17 2.28-1.95 1.52-.78 3.37-1.53 5.55-2.25 2.18-.72 4.19-1.26 6.03-1.62 2.16-.4 4.56-.6 7.2-.6 3.64 0 6.5.47 8.58 1.41s3.12 2.35 3.12 4.23c0 2.36-.96 4.39-2.88 6.09-1.92 1.7-4.6 3.31-8.04 4.83Zm-.78-14.16c-1.84 0-3.72.12-5.64.36-.04.32-.09 1.06-.15 2.22-.06 1.16-.09 2.26-.09 3.3l.06 4.38c.04.96.06 2.18.06 3.66.84-.08 2.62-.68 5.34-1.8 2.64-1.16 4.86-2.45 6.66-3.87 1.8-1.42 2.7-2.93 2.7-4.53 0-1.36-.86-2.32-2.58-2.88-1.72-.56-3.84-.84-6.36-.84ZM44.52 54.93c-2.68 0-4.66-.74-5.94-2.22-1.28-1.48-1.92-3.32-1.92-5.52 0-1.92.35-4.3 1.05-7.14.7-2.84 1.69-5.38 2.97-7.62.08-.16.41-.75.99-1.77.58-1.02 1.23-1.8 1.95-2.34.72-.54 1.48-.81 2.28-.81.36 0 .69.09.99.27.3.18.45.41.45.69 0 .08-.11.27-.33.57-.22.3-.39.53-.51.69-1.36 1.64-2.46 3.26-3.3 4.86-1.12 2.04-1.99 4.06-2.61 6.06-.62 2-.93 4.18-.93 6.54 0 3.16 1.92 4.74 5.76 4.74 1.8 0 3.47-.52 5.01-1.56 1.54-1.04 2.77-2.31 3.69-3.81.92-1.5 1.38-2.87 1.38-4.11 0-1.4-.46-2.62-1.38-3.66-.92-1.04-2.18-2.14-3.78-3.3-1.04-.76-1.8-1.38-2.28-1.86s-.72-.88-.72-1.2c0-.48.34-.87 1.02-1.17.68-.3 1.48-.45 2.4-.45.52 0 .86.03 1.02.09.16.06.24.17.24.33 0 .08-.07.21-.21.39-.14.18-.21.33-.21.45s.4.52 1.2 1.2c1.6 1.32 2.94 2.66 4.02 4.02 1.08 1.36 1.62 2.96 1.62 4.8 0 1.56-.58 3.36-1.74 5.4-1.16 2.04-2.8 3.79-4.92 5.25s-4.54 2.19-7.26 2.19ZM81.84 31.17c-.28 0-.55-.12-.81-.36s-.55-.58-.87-1.02c-.28-.4-.65-.74-1.11-1.02-.46-.28-.93-.42-1.41-.42-1.16 0-2.72 1.53-4.68 4.59C71 36 69.08 39.85 67.2 44.49c.04.92.11 2.08.21 3.48.1 1.4.17 2.44.21 3.12l.18 2.4c0 .56-.12 1.05-.36 1.47-.24.42-.68.63-1.32.63-.68 0-1.12-.91-1.32-2.73-.2-1.82-.32-4.47-.36-7.95-.04-.88-.07-2.14-.09-3.78-.02-1.64-.07-3.6-.15-5.88-.12-3.44-.18-5.9-.18-7.38 0-.92.56-1.38 1.68-1.38.68 0 1.09.29 1.23.87.14.58.21 1.69.21 3.33v9.54c1.2-3.08 2.5-5.74 3.9-7.98s2.77-3.95 4.11-5.13c1.34-1.18 2.53-1.77 3.57-1.77.88 0 1.72.2 2.52.6.8.4 1.44.91 1.92 1.53s.72 1.21.72 1.77c0 .36-.25.77-.75 1.23-.5.46-.93.69-1.29.69ZM110.7 32.07c-3.68.64-5.74 1-6.18 1.08l-3.9.66c0 2.08.03 4.26.09 6.54.06 2.28.15 4.28.27 6 .16 2.32.44 4.1.84 5.34.4 1.24.62 1.94.66 2.1 0 .4-.25.77-.75 1.11-.5.34-.97.51-1.41.51-.24 0-.44-.07-.6-.21-.16-.14-.3-.37-.42-.69-.24-.56-.47-1.6-.69-3.12-.22-1.52-.39-3.2-.51-5.04-.12-1.64-.21-3.55-.27-5.73-.06-2.18-.09-4.29-.09-6.33-2.24.36-4.54.8-6.9 1.32-2.12.44-3.38.66-3.78.66-.48 0-.93-.14-1.35-.42-.42-.28-.63-.66-.63-1.14 0-.52.18-.86.54-1.02.36-.16.96-.24 1.8-.24.6 0 1.48-.11 2.64-.33 1.16-.22 1.9-.37 2.22-.45 2.68-.52 4.5-.86 5.46-1.02 0-.84-.04-1.94-.12-3.3-.08-1.84-.12-3.24-.12-4.2 0-1.56.05-2.77.15-3.63.1-.86.29-1.63.57-2.31.32-.8.92-1.2 1.8-1.2.36 0 .6.06.72.18s.18.34.18.66c0 .24-.1.94-.3 2.1-.2 1.16-.3 2.7-.3 4.62 0 1.48.04 3.14.12 4.98l.06 1.62c1.8-.28 5.36-1.02 10.68-2.22.32-.08.59-.36.81-.84.22-.48.45-.72.69-.72.44 0 .89.25 1.35.75.46.5.69 1.01.69 1.53 0 .68-.29 1.2-.87 1.56-.58.36-1.63.64-3.15.84ZM140.58 19.41c-.28 0-.49-.13-.63-.39s-.27-.61-.39-1.05c-.44-1.36-1.11-2.51-2.01-3.45-.9-.94-1.87-1.41-2.91-1.41-2.8 0-4.81 1.89-6.03 5.67-1.22 3.78-1.83 8.21-1.83 13.29 1.2-.08 2.55-.27 4.05-.57 1.5-.3 2.49-.49 2.97-.57 2.84-.6 4.72-.9 5.64-.9.8 0 1.2.36 1.2 1.08 0 .56-.12 1.16-.36 1.8-.24.64-.6.96-1.08.96-.4 0-.8-.08-1.2-.24-.56-.24-1.32-.36-2.28-.36-.64 0-1.96.2-3.96.6l-4.8.72c0 1 .12 3.78.36 8.34.4 7.04.6 12.66.6 16.86 0 .76-.08 1.29-.24 1.59-.16.3-.48.45-.96.45-.56 0-.98-.32-1.26-.96-.28-.64-.42-1.36-.42-2.16 0-4.6-.3-11.82-.9-21.66l-.12-1.92c-.32.04-1.35.22-3.09.54-1.74.32-3.01.48-3.81.48-.44 0-.81-.1-1.11-.3-.3-.2-.45-.5-.45-.9 0-1 .36-1.52 1.08-1.56 1.04-.04 2.3-.13 3.78-.27s2.62-.29 3.42-.45c0-6.56.89-11.89 2.67-15.99 1.78-4.1 4.43-6.15 7.95-6.15 1.28 0 2.47.32 3.57.96 1.1.64 1.98 1.42 2.64 2.34.66.92.99 1.76.99 2.52 0 .48-.11 1.11-.33 1.89-.22.78-.47 1.17-.75 1.17ZM149.88 54.93c-2.68 0-4.66-.74-5.94-2.22-1.28-1.48-1.92-3.32-1.92-5.52 0-1.92.35-4.3 1.05-7.14.7-2.84 1.69-5.38 2.97-7.62.08-.16.41-.75.99-1.77s1.23-1.8 1.95-2.34 1.48-.81 2.28-.81c.36 0 .69.09.99.27.3.18.45.41.45.69 0 .08-.11.27-.33.57-.22.3-.39.53-.51.69-1.36 1.64-2.46 3.26-3.3 4.86-1.12 2.04-1.99 4.06-2.61 6.06-.62 2-.93 4.18-.93 6.54 0 3.16 1.92 4.74 5.76 4.74 1.8 0 3.47-.52 5.01-1.56 1.54-1.04 2.77-2.31 3.69-3.81s1.38-2.87 1.38-4.11c0-1.4-.46-2.62-1.38-3.66-.92-1.04-2.18-2.14-3.78-3.3-1.04-.76-1.8-1.38-2.28-1.86-.48-.48-.72-.88-.72-1.2 0-.48.34-.87 1.02-1.17.68-.3 1.48-.45 2.4-.45.52 0 .86.03 1.02.09.16.06.24.17.24.33 0 .08-.07.21-.21.39-.14.18-.21.33-.21.45s.4.52 1.2 1.2c1.6 1.32 2.94 2.66 4.02 4.02 1.08 1.36 1.62 2.96 1.62 4.8 0 1.56-.58 3.36-1.74 5.4s-2.8 3.79-4.92 5.25-4.54 2.19-7.26 2.19ZM171.96 54.21c-.48 0-.93-.57-1.35-1.71s-.63-2.87-.63-5.19c.04-4.52.11-9.98.21-16.38.1-6.4.19-11.22.27-14.46.04-1.16.25-2.24.63-3.24s1.05-1.5 2.01-1.5c.32 0 .53.17.63.51.1.34.15.99.15 1.95 0 .04-.01.17-.03.39-.02.22-.03.61-.03 1.17-.72 10.52-1.08 20.78-1.08 30.78 0 1.28.29 2.64.87 4.08.58 1.44.87 2.2.87 2.28 0 .4-.26.72-.78.96s-1.1.36-1.74.36ZM182.64 17.85c-.68 0-1.37-.28-2.07-.84-.7-.56-1.05-1.02-1.05-1.38 0-.44.21-.86.63-1.26.42-.4.85-.6 1.29-.6.6.2 1.1.52 1.5.96.32.32.68.74 1.08 1.26s.6.84.6.96c0 .6-.66.9-1.98.9Zm1.8 38.04c-.56-.04-.97-.94-1.23-2.7-.26-1.76-.53-5.1-.81-10.02-.16-3.24-.3-6.41-.42-9.51-.12-3.1-.2-5.49-.24-7.17 0-.44.07-.77.21-.99.14-.22.41-.33.81-.33.92 0 1.5.38 1.74 1.14.24.76.36 2.22.36 4.38l-.06 7.08c0 4.04.12 7.28.36 9.72 0 .12.18 1.4.54 3.84.28 1.68.42 2.8.42 3.36 0 .4-.17.71-.51.93-.34.22-.73.31-1.17.27ZM200.64 54.93c-2.68 0-4.66-.74-5.94-2.22-1.28-1.48-1.92-3.32-1.92-5.52 0-1.92.35-4.3 1.05-7.14.7-2.84 1.69-5.38 2.97-7.62.08-.16.41-.75.99-1.77.58-1.02 1.23-1.8 1.95-2.34.72-.54 1.48-.81 2.28-.81.36 0 .69.09.99.27s.45.41.45.69c0 .08-.11.27-.33.57-.22.3-.39.53-.51.69-1.36 1.64-2.46 3.26-3.3 4.86-1.12 2.04-1.99 4.06-2.61 6.06-.62 2-.93 4.18-.93 6.54 0 3.16 1.92 4.74 5.76 4.74 1.8 0 3.47-.52 5.01-1.56 1.54-1.04 2.77-2.31 3.69-3.81s1.38-2.87 1.38-4.11c0-1.4-.46-2.62-1.38-3.66-.92-1.04-2.18-2.14-3.78-3.3-1.04-.76-1.8-1.38-2.28-1.86s-.72-.88-.72-1.2c0-.48.34-.87 1.02-1.17.68-.3 1.48-.45 2.4-.45.52 0 .86.03 1.02.09.16.06.24.17.24.33 0 .08-.07.21-.21.39-.14.18-.21.33-.21.45s.4.52 1.2 1.2c1.6 1.32 2.94 2.66 4.02 4.02 1.08 1.36 1.62 2.96 1.62 4.8 0 1.56-.58 3.36-1.74 5.4s-2.8 3.79-4.92 5.25-4.54 2.19-7.26 2.19Z"
        className="cls-71"
        variants={pathVariants}
        initial="hidden"
        animate={isHovered ? "hovered" : "visible"}
      />
    </svg>
  );
};

export default PortfolioText;

