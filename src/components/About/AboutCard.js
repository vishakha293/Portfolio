import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishakha Yadav </span>
             from <span className="purple"> Ghaziabad, Uttar Pradesh, India.</span>
            <br />
            I have completed my MCA with a 9.27 CGPA from BVICAM - GGSIPU (2021-2023).
            <br />
            I previously completed my B.Sc. (H) Computer Science with an 8.5 CGPA from SPM - University of Delhi (2018-2021).
            <br />
            <br />
            Currently, I am working as a Software Engineer at Jellyfish Technologies in Noida, India. 
            My work involves code optimization, dark mode implementation, and enhancing admin security measures. 
            I have also been involved in technology migration, transitioning from Sails.js to Nest.js and from EJS to React.js.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books - Last Book: [A Good Girl's Guide to Murder]
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Cuisine Exploration
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The only way to do great work is to love what you do."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
