import React, { useState } from 'react';
import './Projects.css'; // Ensure this CSS file exists
import ProjectTitleText from '../components/AnimatedText/ProjectTitleText';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import AnimatedBugatoPotato from '../components/AnimatedBugatoPotato';
import LolChampTracker from '../assets/LolChampTracker.gif'
import BugatoPotato from '../assets/bugatopotato2.gif'
import Jawbreaker from '../assets/jawbreaker2.gif'
import GlassHouse from '../assets/glasshouse2.gif'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Projects = () => {

    const projects = [
        // Add your project details here
        // Example: { id: 1, title: 'Project 1', description: '...', image: 'path_to_gif_or_image' },
        { id: 2, title: 'Bugato Potato', description: 'I champ track', image: BugatoPotato, screenShot: <AnimatedBugatoPotato/>},
        { id: 2, title: 'Jawbreaker', description: 'I champ track', image: Jawbreaker},
        { id: 2, title: 'Glass House', description: 'I champ track', image: GlassHouse},


    ];

    return (
        <Container fluid>
            <Row className="justify-content-center mb-4 title-container" >
                <Col>
                    <ProjectTitleText/>
                </Col>
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

export default Projects;