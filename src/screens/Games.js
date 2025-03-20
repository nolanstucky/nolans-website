import React, { useState } from 'react';
import './Games.css'; // Ensure this CSS file exists
import GameProjectTitleText from '../components/AnimatedText/GameProjectsTitleText';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import AnimatedBugatoPotato from '../components/AnimatedBugatoPotato';
import LolChampTracker from '../assets/LolChampTracker.gif'
import BugatoPotato from '../assets/bugatopotato2.gif'
import Jawbreaker from '../assets/jawbreaker2.gif'
import GlassHouse from '../assets/glasshouse2.gif'
import { Container, Row, Col } from 'react-bootstrap';
import AnimatedButton from '../components/AnimatedButton';
import GameProjectText from '../components/AnimatedText/GameProjectsText';
import PortfolioText from '../components/AnimatedText/PortfolioText';
import WebDevText from '../components/AnimatedText/WebDevText';
import ArtText from '../components/AnimatedText/ArtText';
import 'bootstrap/dist/css/bootstrap.min.css';


const Games = () => {

    const projects = [
        // Add your project details here
        // Example: { id: 1, title: 'Project 1', description: '...', image: 'path_to_gif_or_image' },
        { id: 2, projectTitle: 'Bugato Potato', description: "As the lead game designer and developer of Bugato Potato, a 2D pixel art game created in Unity, I was responsible for crafting all of the game's art by hand, designing intricate game systems, and programming the core mechanics. This innovative game blends tower defense elements with an endless gameplay format, where players protect a growing potato plant from bugs using a pesticide gun. I conceptualized and developed the night-day cycle and the intricate shop system, which are central to the game's unique endurance challenge, as players aim to survive as many days as possible. Working collaboratively with a team of three, my role in bringing this engaging and visually appealing game to life highlights my skills in both creative design and technical game development.", image: BugatoPotato, screenShot: <AnimatedBugatoPotato />, deployedLink: 'https://robitsgames.github.io/BugatoPotato/'},
        { id: 2, projectTitle: 'Jawbreaker', description: '', image: Jawbreaker },
        { id: 2, projectTitle: 'Glass House', description: '', image: GlassHouse },


    ];

    return (
        <Container fluid>
            <Row className="justify-content-center mb-4 button-row">
                {/* This div will auto-adjust the buttons' layout */}
                <div className="d-flex flex-wrap justify-content-center" style={{ gap: '25px', marginTop: '15px' }}>
                    <AnimatedButton opacity="0.4" color="#ae4d43" backgroundColor="#ae4d43" width={130} height={40} redirectTo="/games" isHoverable={false} hoverScale={1}>
                        <GameProjectText />
                    </AnimatedButton>
                    <AnimatedButton opacity="0" color="grey" width={130} height={40} redirectTo="/portfolio">
                        <PortfolioText />
                    </AnimatedButton>
                    <AnimatedButton opacity="0" color="grey" width={130} height={40} redirectTo="/webdev">
                        <WebDevText />
                    </AnimatedButton>
                    {/* Add more buttons as needed */}
                </div>
            </Row>
            
            <Row className="project-row">
                {projects.map((project) => (
                    <Col key={project.id} lg={4} md={6} className="mb-4 d-flex justify-content-center">
                        <ProjectCard project={project} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Games;