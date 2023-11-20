import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Sandeep's Resume.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
  <Resumecontent
              title="Software Engineer at Mahathi Software pvt ltd"
              date="Mar 2023 - Present"
              content={[
                "Working on the development of a Health domain application",
                " Worked on provoiding real time video calling and dahboards for provider ease which included ranslated designs and wireframes into a highly responsive user interface and reusable components using Pexip, Material UI and Tailwind",
                "Used Pexip and Azure Calling Services to enable video calling services",
                "Proactively identifying and resolving software bugs, ensuring high-quality, reliable product delivery and Handling new feature requests and bugs encountered in specific versions and performing regression activities and doing changes accordingly.",
              ]}
            />
            <Resumecontent
              title="Software Engineer at HCL Technologies"
              date="Dec 2020 - Mar 2023"
              content={[
                "Working on the development of an Chat App",
                " Translated designs and wireframes into a highly responsive user interface and reusable components using React.js.",
                "Used Back-End APIs to display data using the Custom Components, library Components",
                "worked on tracking and maintaining the history of bugs/issues on an everyday basis.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Attended Hackathon organised by Mayuri Tech"
              content={[
                "Worked on building front-end UI design using HTML5, CSS3, JavaScript jQuery, and building API routes using Node and express.js.",
                "Stood in Top 10 by cloning YOUTUBE",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Tech in Mechanical Engineering [Raghu Engineering College] "
              date="2017 - 2020"
              content={["CGPA: 8.15"]}
            />
            <Resumecontent
              title="Diploma in Mechanical Engineering [Sanketika Polytechnic College] "
              date="2014 - 2017"
              content={["CGPA : 89.8%"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
