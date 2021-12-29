import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Typical from "react-typical";

const TrustedName = () => {
  return (
    <>
      <section>
        <Row className="TrustedNameRow">
          <Col className="TrustedNameCol1">
            <h1 className="display-6">
              <strong className="strong">Wali Ullah</strong> <br />
              <Typical
                loop={Infinity}
                steps={[
                  "Front-end Web developer 😎",
                  1000,
                  "Web Designer ;-)",
                  1000,
                  "ReactJS Developer 🎈",
                  1000,
                ]}
                wrapper="h3"
              />
            </h1>
            <p>
              A passionate web developer and designer focused on developing
              features to enhance the user experience and help businesses do
              better online with Quality works.
            </p>
            <a href="pdf/professionalResume.pdf" download="wali-resume.pdf">
              <Button variant="primary" size="lg" className="primaryBtn my-2">
                See my Resume
              </Button>
            </a>
          </Col>
          <Col className="TrustedNameCol2">
            <img
              src="images/illustration.svg"
              alt="Main Image"
              className="img-fluid image"
            />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default TrustedName;
