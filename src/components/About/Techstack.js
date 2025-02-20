import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiJqueryUiLogo
} from "react-icons/di";
import { SiSailsdotjs, SiEjs, SiThymeleaf, SiMysql } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaHtml5,FaCss3, FaAws, FaDocker } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiThealgorithms } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSailsdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <BiLogoSpringBoot />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryUiLogo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiThymeleaf />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
        
    </Row>
  );
}

export default Techstack;
