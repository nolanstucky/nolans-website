import React, { useRef } from 'react';
import './Home.css'; // Ensure this CSS file exists
import AnimatedImage from '../components/AnimatedImage';
import { motion } from 'framer-motion';
import AnimatedTitle from '../components/AnimatedTitle';
import AnimatedSubTitle
 from '../components/AnimatedSubTitle';
import AnimatedSVGImage from '../components/AnimatedSVGImage';
import AnimatedButton from '../components/AnimatedButton';
import ProjectText from '../components/AnimatedText/ProjectText';
import GameProjectText from '../components/AnimatedText/GameProjectsText';
import PortfolioText from '../components/AnimatedText/PortfolioText';
import WebDevText from '../components/AnimatedText/WebDevText';
import ArtText from '../components/AnimatedText/ArtText';
import OtherStuffText from '../components/AnimatedText/OtherStuffText';
import AnimatedArrow from '../components/AnimatedArrow';


const Home = () => {

    const aboutMeRef = useRef(null);

    // Function to scroll to the About Me section
    const scrollToAboutMe = () => {
      aboutMeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        
        <div className="homepage">
            <div className="title-container">
                <AnimatedTitle />
                <AnimatedSubTitle/>
            </div>
            <div className="centered-container">
                <div className="content-container">
                    <div className="image-container">
                        <AnimatedSVGImage/>

                        <div className="image-button">
                            <AnimatedArrow onClick={scrollToAboutMe} opacity="0" color="grey" backgroundColor="#ae4d43"  width={130} height={40}>
                            </AnimatedArrow>
                        </div>
                    </div>

                    <div className="buttons-container" >
                        <div className='button'>
                        <AnimatedButton opacity="0" color="grey" width={130} height={40} redirectTo="/games">
                            <GameProjectText/>
                        </AnimatedButton>
                        </div>
                        <div className='button'>
                        <AnimatedButton opacity="0" color="grey"  width={130} height={40} redirectTo="/portfolio">
                            <PortfolioText/>
                        </AnimatedButton>
                        </div>
                        <div className='button'>
                        <AnimatedButton opacity="0" color="grey"  width={130} height={40} redirectTo="/webdev">
                            <WebDevText/>
                        </AnimatedButton>
                        </div>
                        <div className='button'>
                        <AnimatedButton opacity="0.7" color="grey" backgroundColor="grey" width={130} height={40} isHoverable={false} hoverScale={1}>
                            <ArtText/>
                        </AnimatedButton>
                        </div>
                        <div className='button'>
                        <AnimatedButton opacity="0.7" color="grey" backgroundColor="grey" width={130} height={40} isHoverable={false} hoverScale={1} >
                            <OtherStuffText/>
                        </AnimatedButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-me-section" ref={aboutMeRef}>
                <h2>About Me</h2>
                <p>Here's a little bit about myself...</p>
                {/* Include any other components or content you want here */}
            </div>
        </div>
    );
};

export default Home;