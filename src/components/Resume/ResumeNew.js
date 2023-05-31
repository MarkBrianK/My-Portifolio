import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import certificate from "../../Assets/../Assets/cert.pdf";
import pdf from "../../Assets/../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://github.com/MarkBrianK/My-Portifolio/master/src/Assets/Resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="justify-content-center">
          <Col xs="auto">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              className="mb-3"
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>
        <Row className="resume justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Document file={certificate}>
              <Page pageNumber={1} scale={width > 768 ? 1.0 : 0.3} />
            </Document>
          </Col>
        </Row>
        <Row className="resume justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Document file={pdf}>
              <Page pageNumber={1} scale={width > 786 ? 1.3 : 0.6} />
            </Document>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              className="mt-3"
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
