import React, { useRef } from 'react';
import './Home.css'; // Ensure this CSS file exists
import AnimatedImage from '../components/AnimatedImage';
import { motion } from 'framer-motion';
import NameTitle from '../components/AnimatedTitle/NameTitle';
import AnimatedSubTitle
    from '../components/AnimatedSubTitle';
import AnimatedSVGImage from '../components/AnimatedSVGImage';
import AnimatedButton from '../components/AnimatedButton';
import WebDevTitle from '../components/AnimatedTitle/WebDevTitle';
import ProjectText from '../components/AnimatedText/ProjectText';
import GameProjectText from '../components/AnimatedText/GameProjectsText';
import PortfolioText from '../components/AnimatedText/PortfolioText';
import WebDevText from '../components/AnimatedText/WebDevText';
import ArtText from '../components/AnimatedText/ArtText';
import OtherStuffText from '../components/AnimatedText/OtherStuffText';
import AnimatedArrow from '../components/AnimatedArrow';
import NolanProfile from '../assets/nolanprofile.png';
import AboutMeText from '../components/AnimatedText/AboutMeText';

const Home = () => {

    const aboutMeRef = useRef(null);

    // Function to scroll to the About Me section
    const scrollToAboutMe = () => {
        aboutMeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (

        <div className="homepage">
            <div className="title-container">
                <NameTitle />
                <WebDevTitle />
            </div>
            <div className="centered-container">
                <div className="content-container">
                    <div className="image-container">
                        <AnimatedSVGImage />


                        <div className="image-button">
                            <AboutMeText/>
                            <AnimatedArrow onClick={scrollToAboutMe} opacity="0" color="grey" backgroundColor="#ae4d43" width={130} height={40}>
                    
                            </AnimatedArrow>
                        </div>
                    </div>

                    <div className="buttons-container" >
                        <div className='button'>
                            <AnimatedButton opacity="0" color="grey" width={130} height={40} redirectTo="/games">
                                <GameProjectText />
                            </AnimatedButton>
                        </div>
                        <div className='button'>
                            <AnimatedButton opacity="0" color="grey" width={130} height={40} redirectTo="/portfolio">
                                <PortfolioText />
                            </AnimatedButton>
                        </div>
                        <div className='button'>
                            <AnimatedButton opacity="0" color="grey" width={130} height={40} redirectTo="/webdev">
                                <WebDevText />
                            </AnimatedButton>
                        </div>
                        <div className='button'>
                            <AnimatedButton opacity="0.7" color="grey" backgroundColor="grey" width={130} height={40} isHoverable={false} hoverScale={1}>
                                <ArtText />
                            </AnimatedButton>
                        </div>
                        <div className='button'>
                            <AnimatedButton opacity="0.7" color="grey" backgroundColor="grey" width={130} height={40} isHoverable={false} hoverScale={1} >
                                <OtherStuffText />
                            </AnimatedButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-me-section" ref={aboutMeRef}>
                <div className="content-wrapper">
                    <div className="left-side">
                        <div className="profile-picture">
                            <img src={NolanProfile} alt="Nolan's Profile Picture" />
                        </div>
                        <div className="social-links"></div>
                    </div>
                    <div className="right-side">
                        <div className="description">
                            <h2>About Me</h2>
                            <h3>_</h3>
                            <h3>I am a software developer with a passion in creating functional and appealing applications. </h3>
                            <h3>Don't worry potential employers I will fill more information here!</h3>
                        </div>
                        <div className="technologies"></div>
                        <div className="projects">
                            <div className="buttons-container2">
                               
                                <div className='button'>
                                    <AnimatedButton opacity="0" color="grey" width={130} height={40} redirectTo="/games">
                                        <GameProjectText />
                                    </AnimatedButton>
                                </div>
                                <div className='button'>
                                    <AnimatedButton opacity="0" color="grey" width={130} height={40} redirectTo="/portfolio">
                                        <PortfolioText />
                                    </AnimatedButton>
                                </div>
                                <div className='button'>
                                    <AnimatedButton opacity="0" color="grey" width={130} height={40} redirectTo="/webdev">
                                        <WebDevText />
                                    </AnimatedButton>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;