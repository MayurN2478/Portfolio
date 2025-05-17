import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import IoT from "../../Assets/Projects/IoT.jpg";
import squid from "../../Assets/Projects/squid.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IoT}
              isBlog={false}
              title="Smart Safet and Accident Prevent System for Curve roads using IoT"
              description="Developed to enhance road safety by alerting drivers about potential blind spots and oncoming vehicles on
                          sharp curves, where visibility is often limited. "/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={squid}
              isBlog={false}
              title="Squid Game"
              description="A fun and interactive Python-based game inspired by the popular Red Light, Green Light challenge from the Squid Game series.This project demonstrates my ability to combine logic, basic game development concepts, and Python libraries to create an engaging terminal-based user experience."
              ghLink="https://github.com/MayurN2478/Squid-Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Book Publication Website"
              description="I designed a fully responsive and user-friendly Book Publication Website as part of a freelance project. The goal was to create a clean, modern, and accessible platform for showcasing books, authors, and publication details."         
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
