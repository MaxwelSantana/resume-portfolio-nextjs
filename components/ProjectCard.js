import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import Fade from "./Fade";

function ProjectCard({ data: project }) {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h3>{project.name}</h3>
              <p className="description mt-3">{project.desc}</p>
              {project.github ? (
                <Button
                  className="btn-icon"
                  color="github"
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Github"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
              ) : null}
              {project.link ? (
                <Button
                  className="btn-icon"
                  color="success"
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Twitter"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">Demo</span>
                </Button>
              ) : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

export default ProjectCard;
