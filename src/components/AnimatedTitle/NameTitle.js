import React from 'react';
import { motion } from 'framer-motion';
import './NameTitle.css'

const NameTitle = (props) => {
  // Calculate the length of the path
  // This value depends on your actual SVG path
  const pathLength = 500; // You might need to adjust this based on your actual path

  const pathVariants = {
    hidden: { 
      strokeDashoffset: pathLength, 
      strokeDasharray: pathLength,
      fill: "rgba(0, 0, 0, 0)" // Starting with a transparent fill
    },
    visible: { 
      strokeDashoffset: 0,
      fill: "none", // Replace with your desired fill color
      transition: { 
        duration: 4, 
        ease: "easeInOut",
        fill: { duration: 4, ease: "easeInOut" } // Explicit transition for fill
      }
    }
  };
  

  return (
    <svg className="name-title" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="140 10 50 60"  {...props}>
      <defs>
        <style>{".cls-56{stroke:#231f20;stroke-width: 0.5px;}"}</style>
      </defs>
      <motion.path
      d="M32.7 54.81c-.28 0-2.15-2.15-5.61-6.45-3.46-4.3-6.31-7.97-8.55-11.01-.32-.44-1.34-1.9-3.06-4.38-2.52-3.68-4.08-5.9-4.68-6.66l-.12 4.62-.06 4.5c0 2.84-.03 5.92-.09 9.24-.06 3.32-.13 5.96-.21 7.92-.04.48-.25.92-.63 1.32s-.77.6-1.17.6c-.44 0-.75-.13-.93-.39-.18-.26-.27-.77-.27-1.53 0-.48.08-1.96.24-4.44.36-4.6.54-8.46.54-11.58 0-2.48.04-4.83.12-7.05.08-2.22.12-3.59.12-4.11l.06-1.74v-.18c0-.44.07-.79.21-1.05.14-.26.43-.39.87-.39h.3c.44 0 1.31.79 2.61 2.37 1.3 1.58 2.95 3.73 4.95 6.45.44.56.86 1.11 1.26 1.65.4.54.78 1.05 1.14 1.53 2.28 2.92 3.48 4.46 3.6 4.62 5.68 7.24 8.78 11.36 9.3 12.36-.08-.32-.22-1.06-.42-2.22-.2-1.16-.39-2.68-.57-4.56-.18-1.88-.27-3.82-.27-5.82 0-3.56-.34-8.26-1.02-14.1-.2-1.92-.3-3.1-.3-3.54 0-1.52.86-2.28 2.58-2.28.4 0 .7.41.9 1.23.2.82.34 2.55.42 5.19.08 2.64.12 6.86.12 12.66 0 1.84.07 3.64.21 5.4.14 1.76.27 3.32.39 4.68.2 1.88.3 3.3.3 4.26l.06 2.16c0 .48-.78.72-2.34.72ZM51.36 54.93c-2.68 0-4.66-.74-5.94-2.22-1.28-1.48-1.92-3.32-1.92-5.52 0-1.92.35-4.3 1.05-7.14.7-2.84 1.69-5.38 2.97-7.62.08-.16.41-.75.99-1.77.58-1.02 1.23-1.8 1.95-2.34.72-.54 1.48-.81 2.28-.81.36 0 .69.09.99.27.3.18.45.41.45.69 0 .08-.11.27-.33.57-.22.3-.39.53-.51.69-1.36 1.64-2.46 3.26-3.3 4.86-1.12 2.04-1.99 4.06-2.61 6.06-.62 2-.93 4.18-.93 6.54 0 3.16 1.92 4.74 5.76 4.74 1.8 0 3.47-.52 5.01-1.56 1.54-1.04 2.77-2.31 3.69-3.81.92-1.5 1.38-2.87 1.38-4.11 0-1.4-.46-2.62-1.38-3.66-.92-1.04-2.18-2.14-3.78-3.3-1.04-.76-1.8-1.38-2.28-1.86s-.72-.88-.72-1.2c0-.48.34-.87 1.02-1.17.68-.3 1.48-.45 2.4-.45.52 0 .86.03 1.02.09.16.06.24.17.24.33 0 .08-.07.21-.21.39-.14.18-.21.33-.21.45s.4.52 1.2 1.2c1.6 1.32 2.94 2.66 4.02 4.02 1.08 1.36 1.62 2.96 1.62 4.8 0 1.56-.58 3.36-1.74 5.4-1.16 2.04-2.8 3.79-4.92 5.25s-4.54 2.19-7.26 2.19ZM73.44 54.21c-.48 0-.93-.57-1.35-1.71-.42-1.14-.63-2.87-.63-5.19.04-4.52.11-9.98.21-16.38.1-6.4.19-11.22.27-14.46.04-1.16.25-2.24.63-3.24s1.05-1.5 2.01-1.5c.32 0 .53.17.63.51.1.34.15.99.15 1.95 0 .04-.01.17-.03.39-.02.22-.03.61-.03 1.17-.72 10.52-1.08 20.78-1.08 30.78 0 1.28.29 2.64.87 4.08.58 1.44.87 2.2.87 2.28 0 .4-.26.72-.78.96s-1.1.36-1.74.36ZM107.88 52.29c0 .48-.2 1.03-.6 1.65-.4.62-.8.93-1.2.93-.68 0-1.2-.42-1.56-1.26-.36-.84-.54-1.82-.54-2.94 0-.96.06-3.84.18-8.64l.06-2.28c0-.92-.24-1.58-.72-1.98-1.8 3.04-3.48 5.68-5.04 7.92s-3.54 4.35-5.94 6.33c-2.4 1.98-4.92 2.97-7.56 2.97-1.28 0-2.27-.4-2.97-1.2-.7-.8-1.05-1.84-1.05-3.12 0-1.6.72-3.79 2.16-6.57 1.44-2.78 3.28-5.6 5.52-8.46 2.24-2.86 4.48-5.21 6.72-7.05 1.48-1.2 2.66-2.01 3.54-2.43.88-.42 1.66-.63 2.34-.63.64 0 1.3.2 1.98.6.68.4 1.26.96 1.74 1.68s.72 1.54.72 2.46c0 1.24-.34 2.42-1.02 3.54l1.02-.3c.44 0 .7.54.78 1.62.04.64.09 1.94.15 3.9a7895.107 7895.107 0 0 0 .27 8.7c.04 1.24.08 2.22.12 2.94.04.28.2.57.48.87.28.3.42.55.42.75Zm-5.22-16.86c.48-1.2.72-2.5.72-3.9 0-.84-.25-1.57-.75-2.19-.5-.62-1.17-.93-2.01-.93-1 0-2.28.68-3.84 2.04-1.8 1.52-3.7 3.55-5.7 6.09s-3.66 5.05-4.98 7.53-1.98 4.44-1.98 5.88c0 1.2.56 1.8 1.68 1.8 2.16 0 4.24-.8 6.24-2.4 2-1.6 3.79-3.51 5.37-5.73 1.58-2.22 3.33-4.95 5.25-8.19ZM132.42 56.67c-.4 0-.74-.09-1.02-.27-.28-.18-.42-.43-.42-.75 0-1.64.12-4.18.36-7.62.24-3.68.36-6.74.36-9.18s-.07-4.29-.21-5.79c-.14-1.5-.47-2.25-.99-2.25-1.36 0-2.85 1.69-4.47 5.07-1.62 3.38-3.47 7.83-5.55 13.35l-.9 2.4c-.16.4-.43.72-.81.96-.38.24-.77.36-1.17.36-.48 0-.8-.04-.96-.12-.16-.08-.26-.32-.3-.72l-.48-4.92-.9-8.64c-.28-3.44-.62-6.44-1.02-9-.12-.6-.18-1.06-.18-1.38 0-.6.26-1.09.78-1.47a2.97 2.97 0 0 1 1.8-.57c.4 0 .69.96.87 2.88.18 1.92.37 5.02.57 9.3l.24 3.18c.32 4.04.5 6.6.54 7.68.12-.24.23-.51.33-.81.1-.3.23-.63.39-.99 2.16-5.6 4.19-10.27 6.09-14.01 1.9-3.74 3.73-5.61 5.49-5.61 1.24 0 2.09 1.05 2.55 3.15.46 2.1.75 4.79.87 8.07.12 3.64.18 8.96.18 15.96 0 .48-.2.89-.6 1.23-.4.34-.88.51-1.44.51ZM170.4 56.49c-2.6 0-4.66-.21-6.18-.63-1.52-.42-2.28-1.01-2.28-1.77 0-.4.29-1.07.87-2.01.58-.94 1.03-1.41 1.35-1.41.48 0 .72.1.72.3 0 .12-.07.26-.21.42-.14.16-.21.32-.21.48 0 .12.25.3.75.54.5.24 1.27.46 2.31.66s2.3.3 3.78.3c2.36 0 4.43-.46 6.21-1.38 1.78-.92 3.15-2.08 4.11-3.48.96-1.4 1.44-2.76 1.44-4.08 0-1.72-.83-3.2-2.49-4.44-1.66-1.24-4.33-2.42-8.01-3.54-3.56-1.16-6.31-2.13-8.25-2.91-1.94-.78-3.51-1.74-4.71-2.88s-1.8-2.53-1.8-4.17c0-2.2 1.24-4.37 3.72-6.51 2.48-2.14 5.54-3.88 9.18-5.22 3.64-1.34 7.02-2.01 10.14-2.01 1.6 0 2.46.32 2.58.96.12.64.18 1.36.18 2.16 0 .6-.22.9-.66.9-.2 0-.43-.07-.69-.21-.26-.14-.49-.25-.69-.33-.24-.08-.52-.16-.84-.24-.32-.08-.78-.12-1.38-.12-2.08 0-4.58.54-7.5 1.62s-5.45 2.42-7.59 4.02c-2.14 1.6-3.21 3.14-3.21 4.62 0 1.2.49 2.24 1.47 3.12.98.88 2.29 1.63 3.93 2.25 1.64.62 3.96 1.39 6.96 2.31 4.4 1.28 7.65 2.72 9.75 4.32 2.1 1.6 3.15 3.56 3.15 5.88 0 2-.67 3.97-2.01 5.91-1.34 1.94-3.22 3.52-5.64 4.74-2.42 1.22-5.17 1.83-8.25 1.83ZM214.26 32.07c-3.68.64-5.74 1-6.18 1.08l-3.9.66c0 2.08.03 4.26.09 6.54.06 2.28.15 4.28.27 6 .16 2.32.44 4.1.84 5.34.4 1.24.62 1.94.66 2.1 0 .4-.25.77-.75 1.11-.5.34-.97.51-1.41.51-.24 0-.44-.07-.6-.21-.16-.14-.3-.37-.42-.69-.24-.56-.47-1.6-.69-3.12-.22-1.52-.39-3.2-.51-5.04-.12-1.64-.21-3.55-.27-5.73-.06-2.18-.09-4.29-.09-6.33-2.24.36-4.54.8-6.9 1.32-2.12.44-3.38.66-3.78.66-.48 0-.93-.14-1.35-.42-.42-.28-.63-.66-.63-1.14 0-.52.18-.86.54-1.02.36-.16.96-.24 1.8-.24.6 0 1.48-.11 2.64-.33 1.16-.22 1.9-.37 2.22-.45 2.68-.52 4.5-.86 5.46-1.02 0-.84-.04-1.94-.12-3.3-.08-1.84-.12-3.24-.12-4.2 0-1.56.05-2.77.15-3.63.1-.86.29-1.63.57-2.31.32-.8.92-1.2 1.8-1.2.36 0 .6.06.72.18s.18.34.18.66c0 .24-.1.94-.3 2.1-.2 1.16-.3 2.7-.3 4.62 0 1.48.04 3.14.12 4.98l.06 1.62c1.8-.28 5.36-1.02 10.68-2.22.32-.08.59-.36.81-.84.22-.48.45-.72.69-.72.44 0 .89.25 1.35.75.46.5.69 1.01.69 1.53 0 .68-.29 1.2-.87 1.56-.58.36-1.63.64-3.15.84ZM244.32 55.53c-.8 0-1.53-.84-2.19-2.52-.66-1.68-1.07-3.42-1.23-5.22-.16-1.72-.28-5.2-.36-10.44-.04-.84-.06-1.69-.06-2.55s-.02-1.59-.06-2.19c-1.16 2.76-2.74 5.9-4.74 9.42-2 3.52-4.01 6.54-6.03 9.06-2.02 2.52-3.67 3.78-4.95 3.78s-2.19-.7-2.61-2.1c-.42-1.4-.63-3.62-.63-6.66 0-2.84.37-6.06 1.11-9.66.74-3.6 1.59-6.34 2.55-8.22.4-.84.74-1.41 1.02-1.71.28-.3.6-.45.96-.45 1 0 1.5.2 1.5.6 0 .2-.2.66-.6 1.38-1.08 2-2.02 4.4-2.82 7.2-.8 2.8-1.2 6.56-1.2 11.28 0 3.16.44 4.74 1.32 4.74 1.04 0 2.45-1.15 4.23-3.45 1.78-2.3 3.55-5.05 5.31-8.25 1.76-3.2 3.1-5.98 4.02-8.34.32-.8.68-2.04 1.08-3.72.12-.68.24-1.17.36-1.47.12-.3.26-.45.42-.45.44 0 .92.18 1.44.54.52.36.78.74.78 1.14 0 1.92.07 5.21.21 9.87.14 4.66.31 7.89.51 9.69.16 1.56.45 2.78.87 3.66s.83 1.57 1.23 2.07c.4.5.6.81.6.93 0 .64-.18 1.14-.54 1.5-.36.36-.86.54-1.5.54ZM265.73 46.89c-2.08 2.52-3.95 4.46-5.61 5.82-1.66 1.36-3.39 2.04-5.19 2.04-1.52 0-2.77-.66-3.75-1.98-.98-1.32-1.47-2.84-1.47-4.56 0-2.56.68-5.8 2.04-9.72 1.36-3.92 3.08-7.32 5.16-10.2 2.08-2.88 4.16-4.32 6.24-4.32.88 0 1.64.32 2.28.96.36.36.7.84 1.02 1.44.32.6.48 1.14.48 1.62 0 .68-.09 1.47-.27 2.37-.18.9-.37 1.35-.57 1.35-.4 0-.66-.22-.78-.66-.12-.44-.2-1-.24-1.68-.12-1.04-.24-1.73-.36-2.07-.12-.34-.3-.51-.54-.51-1.88 0-3.7 1.31-5.46 3.93-1.76 2.62-3.2 5.66-4.32 9.12-1.12 3.46-1.68 6.13-1.68 8.01 0 2.64.88 3.96 2.64 3.96 1.28 0 2.45-.32 3.51-.96 1.06-.64 2.17-1.54 3.33-2.7 2.16-2.2 3.84-4.1 5.04-5.7.08-.12.31-.43.69-.93.38-.5.65-.75.81-.75.48 0 .72.18.72.54 0 .24-.41.98-1.23 2.22-.82 1.24-1.65 2.36-2.49 3.36ZM298.49 31.35c-.32 0-.68-.17-1.08-.51-.4-.34-.68-.51-.84-.51-1.08 0-2.8.74-5.16 2.22-2.36 1.48-4.78 3.22-7.26 5.22-2.48 2-4.38 3.7-5.7 5.1l.06 1.08c3.04 1.4 6.42 2.9 10.14 4.5 3.72 1.6 6.3 2.54 7.74 2.82.56.08 1.12.14 1.68.18s.96.06 1.2.06c.36 0 .66.02.9.06s.36.12.36.24c0 .48-.37.96-1.11 1.44-.74.48-1.85.72-3.33.72-1.32 0-3.11-.49-5.37-1.47-2.26-.98-4.93-2.27-8.01-3.87l-3.78-1.86c.52 5.08.78 7.88.78 8.4 0 .44-.22.8-.66 1.08-.44.28-.92.42-1.44.42-.32 0-.58-.48-.78-1.44-.2-.96-.44-2.86-.72-5.7l-.42-3.66c-.48-.2-.9-.49-1.26-.87s-.54-.73-.54-1.05c0-.48.4-1.04 1.2-1.68-.04-2.16-.15-5.24-.33-9.24-.18-4-.31-6.92-.39-8.76l-.3-8.34c0-1.12.14-2.08.42-2.88.28-.8.9-1.2 1.86-1.2.36 0 .6.07.72.21.12.14.18.41.18.81 0 1.84.13 6.11.39 12.81s.47 11.47.63 14.31c8.92-8.48 15.44-12.72 19.56-12.72.84 0 1.55.15 2.13.45.58.3.87.61.87.93 0 .56-.27 1.15-.81 1.77-.54.62-1.05.93-1.53.93ZM321.77 33.99c-.48 3.52-.74 5.5-.78 5.94-.52 4.92-.89 8.67-1.11 11.25-.22 2.58-.33 4.91-.33 6.99 0 1.72.13 3.08.39 4.08s.54 1.79.84 2.37c.3.58.45.93.45 1.05 0 .36-.32.68-.96.96-.64.28-1.3.42-1.98.42-.52 0-.93-.7-1.23-2.1-.3-1.4-.45-3.58-.45-6.54 0-2.24.22-5.26.66-9.06l.9-8.28a33.417 33.417 0 0 1-3.99 5.97c-1.58 1.9-3.21 2.85-4.89 2.85-1.56 0-2.96-1.36-4.2-4.08-1.24-2.72-2.21-5.8-2.91-9.24-.7-3.44-1.05-5.96-1.05-7.56 0-1 .3-1.5.9-1.5.88 0 1.44.82 1.68 2.46 1.52 11.12 3.64 16.68 6.36 16.68 1.08 0 2.03-.43 2.85-1.29.82-.86 1.79-2.19 2.91-3.99.52-.84 1.08-1.96 1.68-3.36.6-1.4 1.06-2.56 1.38-3.48l.42-6.06c.08-.92.2-1.57.36-1.95.16-.38.48-.57.96-.57.4 0 .8.23 1.2.69.4.46.6.91.6 1.35 0 .92-.22 2.92-.66 6Z"
        className="cls-56"
        strokeWidth="0.9px"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
};

export default NameTitle;


