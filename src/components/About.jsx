/* eslint-disable no-unused-vars */

import Grid from "@mui/material/Grid2";
import { Divider, Image } from "antd";
import React from "react";

import ScrollAnimation from "react-animate-on-scroll";
import Skills from "./Skills";
function About() {
  return (
    <>
      <div className="mt-5 p-1 d-flex flex-column flex-md-row justify-content-md-around align-items-center">
        <div>
          <Image
            preview={false}
            src="Mypic.jpg"
            style={{ borderRadius: "50%", width: "300px" }}
          ></Image>
        </div>

        <div className="About-content p-5">
          <h5 className="fw-bold border-3 border-bottom border-success pb-3">
            About
          </h5>
          <ScrollAnimation animateIn="zoomIn" animateOnce="true" duration="1">
            <p className="About-p mt-3">
              As a former Test Engineer with a deep understanding of software
              quality, automation, and functionality validation, I have
              successfully transitioned into the role of a MERN Stack Developer.
              Leveraging my experience in identifying bugs, writing test
              scripts, and ensuring robust software performance, I now apply
              these insights to the development process
            </p>
            <p className="About-p">
              This blend of testing and development experience positions me
              uniquely to build high-quality software, combining the precision
              of a tester with the creativity and technical skills of a MERN
              stack develope
            </p>
          </ScrollAnimation>
        </div>
      </div>
      <Divider
        className="mt-4"
        type="horizontal"
        style={{ color: "green", borderColor: "green", fontSize: "20px" }}
        variant="dotted"
      >
        Skills
      </Divider>
      <div id="Skills">
        <Skills />
      </div>
    </>
  );
}

export default About;
