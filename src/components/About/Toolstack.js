import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiIntellijidea
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { FaWindows, FaLinux } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
