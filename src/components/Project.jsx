/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from "react";
import Grid from "@mui/material/Grid2";
import { Carousel } from "antd";
import { Tooltip } from "antd";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Project() {
  return (
    <>
      <div>
        <Grid container spacing={5} sx={{ padding: 5 }}>
          <Grid size={{ xs: 12, md: 6 }} width={"100%"}>
            <Carousel autoplay={true} arrows={true} autoplaySpeed={5000}>
              <div>
                <img
                  src="project1.1.png"
                  width={"100%"}
                  height={"120%"}
                  style={{ borderRadius: "20px" }}
                  loading="lazy"
                ></img>
              </div>
              <div>
                <img
                  src="project1.2.png"
                  width={"100%"}
                  height={"120%"}
                  style={{ borderRadius: "20px" }}
                  loading="lazy"
                ></img>
              </div>
              <div>
                <img
                  src="project1.3.png"
                  width={"100%"}
                  height={"120%"}
                  style={{ borderRadius: "20px" }}
                  loading="lazy"
                ></img>
              </div>
            </Carousel>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="project-content">
              <h3 className="fw-bold border-2 border-bottom border-danger pb-3">
                Wedding Event Management
              </h3>
              <p className="mt-3 project-content">
                Wedding event management app designed to simplify the wedding
                planning process. User can able to find the mall, caterings,
                decorations,Dj,Photographers all at one place.The application
                use Authentication,Authorization to secure information users and
                have the efficient Backend API
              </p>

              <p className="d-flex gap-3 fw-bold flex-wrap">
                Tech stack used :{" "}
                <Tooltip
                  title="Javascript"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="js.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="React"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="react.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="Material UI"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="material.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="Node JS"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="node-js.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="Mongo DB"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="mongodb.png" width={"30px"}></img>
                </Tooltip>
              </p>
              <div className="d-flex justify-content-between justify-content-md-start gap-md-5">
                <a
                  href="https://github.com/BalavigneshRajasekar/WeddingWise---Event-Management-App.git"
                  target="blank"
                  className="project-action1 text-decoration-none"
                >
                  <GitHubIcon fontSize="large" />
                  <span className="ms-2">Code</span>
                </a>
                <a
                  href="https://event-manager-lovat.vercel.app/"
                  target="blank"
                  className="project-action2 text-decoration-none"
                >
                  <span className="ms-2">Demo</span>{" "}
                  <ArrowForwardIcon fontSize="large" />
                </a>
              </div>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} width={"100%"}>
            <Carousel autoplay={true} arrows={true} autoplaySpeed={5000}>
              <div>
                <img
                  src="project3.1.png"
                  width={"100%"}
                  height={"120%"}
                  style={{ borderRadius: "20px" }}
                  loading="lazy"
                ></img>
              </div>
              <div>
                <img
                  src="project3.2.png"
                  width={"100%"}
                  height={"120%"}
                  style={{ borderRadius: "20px" }}
                  loading="lazy"
                ></img>
              </div>
              <div>
                <img
                  src="project3.3.png"
                  width={"100%"}
                  height={"120%"}
                  style={{ borderRadius: "20px" }}
                  loading="lazy"
                ></img>
              </div>
            </Carousel>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="project-content">
              <h3 className="fw-bold border-2 border-bottom border-danger pb-3">
                Online Supplement Application
              </h3>
              <p className="mt-3 project-content">
                An innovative e-commerce platform designed to provide a seamless
                shopping experience for health and fitness enthusiasts. The
                store offers a wide range of high-quality supplements, including
                protein powders, vitamins, and fitness products
              </p>
              <p className="d-flex gap-3 fw-bold flex-wrap">
                Tech stack used :{" "}
                <Tooltip
                  title="Javascript"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="js.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="React"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="react.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="MUI"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="material.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="Node JS"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="node-js.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="Mongo DB"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="mongodb.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="Stripe"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="stripe.png" width={"30px"}></img>
                </Tooltip>
              </p>
              <div className="d-flex justify-content-between justify-content-md-start gap-md-5">
                <a
                  href="https://github.com/BalavigneshRajasekar/Online-supplement-Application.git"
                  target="blank"
                  className="project-action1 text-decoration-none"
                >
                  <GitHubIcon fontSize="large" />
                  <span className="ms-2">Code</span>
                </a>
                <a
                  href="https://dksupplements.vercel.app/"
                  target="blank"
                  className="project-action2 text-decoration-none"
                >
                  <span className="ms-2">Demo</span>{" "}
                  <ArrowForwardIcon fontSize="large" />
                </a>
              </div>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} width={"100%"}>
            <Carousel autoplay={true} arrows={true} autoplaySpeed={5000}>
              <div>
                <img
                  src="project2.1.png"
                  width={"100%"}
                  height={"120%"}
                  style={{ borderRadius: "20px" }}
                  loading="lazy"
                ></img>
              </div>
              <div>
                <img
                  src="project2.2.png"
                  width={"100%"}
                  height={"120%"}
                  style={{ borderRadius: "20px" }}
                  loading="lazy"
                ></img>
              </div>
              <div>
                <img
                  src="project2.3.png"
                  width={"100%"}
                  height={"120%"}
                  style={{ borderRadius: "20px" }}
                  loading="lazy"
                ></img>
              </div>
            </Carousel>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="project-content">
              <h3 className="fw-bold border-2 border-bottom border-danger pb-3">
                Library Admin Dashboard
              </h3>
              <p className="mt-3 project-content">
                A Library Admin Dashboard Application is designed to empower
                librarians and administrators to manage all library operations
                from a centralized digital platform. Through this application
                admin can find the books count ,students count, books taken by
                students and return by students
              </p>
              <p className="d-flex gap-3 fw-bold flex-wrap">
                Tech stack used :{" "}
                <Tooltip
                  title="Css"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="css.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="Typescript"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="typescript.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="Angular"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="angular.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="Firebase"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="Firebase.png" width={"30px"}></img>
                </Tooltip>
              </p>
              <div className="d-flex justify-content-between justify-content-md-start gap-md-5">
                <a
                  href="https://github.com/BalavigneshRajasekar/Library_Admin_Dashboard_Angular.git"
                  target="blank"
                  className="project-action1 text-decoration-none"
                >
                  <GitHubIcon fontSize="large" />
                  <span className="ms-2">Code</span>
                </a>
                <a
                  href="https://library-admin-dashboard-angular.vercel.app/"
                  target="blank"
                  className="project-action2 text-decoration-none"
                >
                  <span className="ms-2">Demo</span>{" "}
                  <ArrowForwardIcon fontSize="large" />
                </a>
              </div>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} width={"100%"}>
            <Carousel autoplay={true} arrows={true} autoplaySpeed={5000}>
              <div>
                <img
                  src="project4.1.png"
                  width={"100%"}
                  height={"120%"}
                  style={{ borderRadius: "20px" }}
                  loading="lazy"
                ></img>
              </div>
              <div>
                <img
                  src="project4.2.png"
                  width={"100%"}
                  height={"120%"}
                  style={{ borderRadius: "20px" }}
                  loading="lazy"
                ></img>
              </div>
              <div>
                <img
                  src="project4.3.png"
                  width={"100%"}
                  height={"120%"}
                  style={{ borderRadius: "20px" }}
                  loading="lazy"
                ></img>
              </div>
            </Carousel>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="project-content">
              <h3 className="fw-bold border-2 border-bottom border-danger pb-3">
                User Management
              </h3>
              <p className="mt-3 project-content">
                A secure and scalable user management system designed to manage
                users and their roles efficiently, ensuring controlled access to
                resources and functionality based on assigned permissions.
              </p>
              <p className="d-flex gap-3 fw-bold flex-wrap">
                Tech stack used :{" "}
                <Tooltip
                  title="Javascript"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="js.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="React"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="react.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="ANTD"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="antd.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="Node JS"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="node-js.png" width={"30px"}></img>
                </Tooltip>
                <Tooltip
                  title="Mongo DB"
                  color="white"
                  placement="bottom"
                  overlayInnerStyle={{ color: "black" }}
                >
                  <img src="mongodb.png" width={"30px"}></img>
                </Tooltip>
              </p>
              <div className="d-flex justify-content-between justify-content-md-start gap-md-5">
                <a
                  href="https://github.com/BalavigneshRajasekar/InterviewTask.git"
                  target="blank"
                  className="project-action1 text-decoration-none"
                >
                  <GitHubIcon fontSize="large" />
                  <span className="ms-2">Code</span>
                </a>
                <a
                  href="https://interview-task-lime.vercel.app/"
                  target="blank"
                  className="project-action2 text-decoration-none"
                >
                  <span className="ms-2">Demo</span>{" "}
                  <ArrowForwardIcon fontSize="large" />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Project;
