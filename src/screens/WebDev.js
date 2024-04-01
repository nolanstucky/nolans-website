import React, { useState } from 'react';
import './WebDev.css'; // Ensure this CSS file exists
import ProjectCard from '../components/ProjectCard/ProjectCard';
import AnimatedBugatoPotato from '../components/AnimatedBugatoPotato';
import BugatoPotato from '../assets/bugatopotato2.gif'
import Jawbreaker from '../assets/jawbreaker2.gif'
import GlassHouse from '../assets/glasshouse2.gif'
import { Container, Row, Col } from 'react-bootstrap';
import AnimatedButton from '../components/AnimatedButton';
import GameProjectText from '../components/AnimatedText/GameProjectsText';
import PortfolioText from '../components/AnimatedText/PortfolioText';
import WebDevText from '../components/AnimatedText/WebDevText';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectData from '../data';



const WebDev = () => {

    const projects = [
        // Add your project details here
        // Example: { id: 1, title: 'Project 1', description: '...', image: 'path_to_gif_or_image' },
        { id: 2, title: 'Bugato Potato', description: 'I champ track', image: BugatoPotato, screenShot: <AnimatedBugatoPotato /> },
        { id: 2, title: 'Jawbreaker', description: 'I champ track', image: Jawbreaker },
        { id: 2, title: 'Glass House', description: 'I champ track', image: GlassHouse },
        {
            title: "Check Your Fridge",
            image: "https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/check-your-fridge.png?raw=true",
            description: "Check Your Fridge creates a database of food that you have in your fridge. Using Spoonacular API, you can find recipes that use specific ingredients to help you use your food before it expires",
            deployedLink: "https://cryptic-shore-39350.herokuapp.com/",
            githubLink: "https://github.com/lbalbrecht/check-your-fridge",
            technologies: "Node, Express, MySQL, Sequelize, Node Handlebars, Materialize, SpoonacularApi."
        }


    ];

    return (
        <Container fluid>
            <Row className="justify-content-center mb-4 button-row">
                {/* This div will auto-adjust the buttons' layout */}
                <div className="d-flex flex-wrap justify-content-center" style={{ gap: '25px', marginTop: '15px' }}>
                    <AnimatedButton opacity="0" color="grey" width={130} height={40} redirectTo="/games">
                        <GameProjectText />
                    </AnimatedButton>
                    <AnimatedButton opacity="0" color="grey" width={130} height={40} redirectTo="/portfolio">
                        <PortfolioText />
                    </AnimatedButton>
                    <AnimatedButton opacity="0.4" color="#ae4d43" backgroundColor="#ae4d43" width={130} height={40} redirectTo="/webdev" isHoverable={false} hoverScale={1}>
                        <WebDevText />
                    </AnimatedButton>
                    {/* Add more buttons as needed */}
                </div>
            </Row>

            <Row className="project-row">
                {projectData.map((project) => (
                    <Col key={project.id} lg={4} md={6} className="mb-4 d-flex justify-content-center">
                        <ProjectCard project={project} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default WebDev;