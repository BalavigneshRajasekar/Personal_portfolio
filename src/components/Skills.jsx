/* eslint-disable no-unused-vars */
import React from "react";
import "animate.css";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import ProgressBar from "@ramonak/react-progress-bar";

function Skills() {
  return (
    <>
      <div className="skill-basic d-flex justify-content-center">
        <div className="w-75 p-2">
          <h6 className="mt-4">HTML :</h6>
          <ProgressBar
            completed={75}
            transitionDuration="2s"
            transitionTimingFunction="linear"
            animateOnRender={true}
            initCompletedOnAnimation={2}
          ></ProgressBar>
          <h6 className="mt-4">CSS :</h6>
          <ProgressBar
            completed={60}
            transitionDuration="2s"
            transitionTimingFunction="linear"
            animateOnRender={true}
            initCompletedOnAnimation={2}
          ></ProgressBar>
          <h6 className="mt-4">JAVASCRIPT :</h6>
          <ProgressBar
            completed={80}
            transitionDuration="2s"
            transitionTimingFunction="linear"
            animateOnRender={true}
            initCompletedOnAnimation={2}
          ></ProgressBar>
        </div>
      </div>
      <div className="skill-advance d-flex flex-column flex-md-row justify-content-md-around align-items-center gap-5 mt-5">
        <ScrollAnimation animateIn="slideInRight" animateOnce="true">
          <div className="frontend">
            <h6 className="fw-bolder text-center p-3">Frontend</h6>
            <div className="ps-2 d-flex gap-5 pe-2">
              <div>
                <p>
                  <img src="react.png" width={"60px"}></img> React
                </p>
                <p>
                  <img src="angular.png" width={"60px"}></img> Angular
                </p>
                <p>
                  <img src="css.png" width={"60px"}></img> Css
                </p>
              </div>
              <div>
                <p>
                  <img src="bootstrap.png" width={"60px"}></img> Bootstrap
                </p>
                <p>
                  <img src="material.png" width={"60px"}></img> Material UI
                </p>
                <p>
                  <img src="antd.png" width={"60px"}></img> Antd
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInLeft" animateOnce="true">
          <div className="backend ">
            <h6 className="fw-bolder text-center p-3">Backend</h6>
            <div>
              <div className="ps-2 d-flex gap-5 pe-2">
                <div>
                  <p>
                    <img src="node-js.png" width={"60px"}></img> Node
                  </p>
                  <p>
                    <img src="express.png" width={"60px"}></img> express
                  </p>
                  <p>
                    <img src="java.png" width={"60px"}></img> Java
                  </p>
                </div>
                <div>
                  <p>
                    <img src="mongodb.png" width={"60px"}></img> Mongo DB
                  </p>
                  <p>
                    <img src="sql.png" width={"60px"}></img> SQL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <ScrollAnimation animateIn="bounceIn" animateOnce="true">
          <div className="Tools ">
            <h6 className="fw-bolder text-center p-3">Tools</h6>
            <div>
              <div className="ps-2 d-flex gap-5 pe-2 ">
                <div>
                  <p>
                    <img src="github.png" width={"60px"}></img> Github
                  </p>
                  <p>
                    <img src="vscode.png" width={"60px"}></img> Vs code
                  </p>
                  <p>
                    <img src="photoshop.png" width={"60px"}></img> Photoshop
                  </p>
                </div>
                <div>
                  <p>
                    <img src="flaticon.png" width={"60px"}></img> Flaticon
                  </p>
                  <p>
                    <img src="up-arrow.png" width={"60px"}></img> vercel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
}

export default Skills;
