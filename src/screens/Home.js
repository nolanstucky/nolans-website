import React from 'react';
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

const Home = () => {
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
                        <AnimatedButton opacity="0.5" color="#ae4d43" backgroundColor="#ae4d43" width={180} height={40} redirectTo="/games">
                            <GameProjectText/>
                        </AnimatedButton>
                        </div>
                    </div>

                    <div className="buttons-container" >
                        <div className='button'>
                        <AnimatedButton opacity="0" color="grey" width={130} height={40} redirectTo="/games">
                            <GameProjectText/>
                        </AnimatedButton>
                        </div>
                        <div className='button'>
                        <AnimatedButton opacity="0" color="grey"  width={130} height={40} >
                            <PortfolioText/>
                        </AnimatedButton>
                        </div>
                        <div className='button'>
                        <AnimatedButton opacity="0" color="grey" width={130} height={40} >
                            <WebDevText/>
                        </AnimatedButton>
                        </div>
                        <div className='button'>
                        <AnimatedButton opacity="0" color="grey" width={130} height={40} isHoverable={false}>
                            <ArtText/>
                        </AnimatedButton>
                        </div>
                        <div className='button'>
                        <AnimatedButton opacity="0" color="grey" width={130} height={40} >
                            <OtherStuffText/>
                        </AnimatedButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-me-section">
                <h2>About Me</h2>
                <p>Here's a little bit about myself...</p>
                {/* Include any other components or content you want here */}
            </div>
        </div>
    );
};

export default Home;