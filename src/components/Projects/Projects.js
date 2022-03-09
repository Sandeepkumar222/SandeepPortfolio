import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatImage from "../../Assets/chatapp.jpg";
import todo from "../../Assets/todoapp.png";
import transactions from "../../Assets/transactionsapp.jpg";

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
              imgPath={chatImage}
              isBlog={false}
              title="ChattApp"
              description="An end-to-end web application built with nodejs and WebSockets. I used express along with node to make the server work a bit easy and sockets.io to create the live chatting functionality. It's a real-time chat app so multiple users can use this all at once."
              link="https://github.com/Sandeepkumar222/mern-chatapp.git"
              web="https://mern-chattapp.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://images.everydayhealth.com/images/how-to-start-working-out-again-derailed-from-covid-1440x810.jpg"
              }
              isBlog={false}
              title="Fitness Tracker"
              description="Used ReactJS, NodeJS , ExpressJS and MongoDB to build this app. This app helps in tracking daily calorie burnt stats and also allows user to add more exercise, need to add more features, working on it..."
              link="https://github.com/Sandeepkumar222/FitnessTrackerFE.git"
              web="https://6188fd1a83f7e93280a28655--musing-yalow-a09866.netlify.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="React To-do App"
              description="to-do app is a simple web application to create, read, update and delete everyday tasks.Built using ReactJS and used NodeJS and mongoDB as backend"
              link="https://github.com/Sandeepkumar222/to-do-listApp.git"
              web="https://mern-todoo-app.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transactions}
              isBlog={false}
              title="Transactions tracker"
              description="Transactions tracker app is a trasactions ledger used to store trasactions done as per date and stats are generated accordingly .Built using NodeJS and ExpressJS and ReactJS"
              link="https://github.com/Sandeepkumar222/Transaction_tracker.git"
              web="https://transaction-tracker01.herokuapp.com/login"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
