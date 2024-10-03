/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Grid from "@mui/material/Grid2";
import { TypeAnimation } from "react-type-animation";
import { Button, Container, IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import WorkIcon from "@mui/icons-material/Work";
import { Work } from "@mui/icons-material";

function Home() {
  return (
    <div>
      <Container sx={{ height: { xs: "100vh", md: "100%" } }}>
        <img
          className="img"
          src="bg2.jpg"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></img>
      </Container>

      <div className="h-cont-div">
        <h1 className="h-cont-div-h1">I'm Bala Vignesh</h1>
        <h6 className="h-cont-div-h6">
          Full stack Developer
          <DeveloperModeIcon fontSize="large" />
        </h6>
        <TypeAnimation
          sequence={[
            "Welcome to my page...",
            2000,
            "Please Refer My past Projects...",
            2000,
            "If You are interested Hire me !!! ",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1em", display: "inline-block" }}
          repeat={Infinity}
        />
        <Grid container spacing={5} sx={{ marginTop: 7 }}>
          <Grid size={{ xs: 6, md: 3 }}>
            <a
              href="https://github.com/balavignesh123"
              target="blank"
              className="text-decoration-none "
            >
              <img src="https://img.shields.io/badge/github-ffffff?style=for-the-badge&logo=github&logoColor=black" />
            </a>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <a
              href="https://www.linkedin.com/in/bala-vignesh-r-a97670226/"
              target="blank"
              className="text-decoration-none "
            >
              <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
            </a>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <a
              href="https://wa.me/918825559375"
              target="blank"
              className="text-decoration-none "
            >
              <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"></img>
            </a>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <a
              href="Balavignesh(Fullstack)high rate.pdf"
              target="blank"
              className="text-decoration-none "
              download={true}
            >
              <Button
                sx={{ letterSpacing: "2px" }}
                startIcon={<DownloadIcon />}
                variant="contained"
                size="small"
                color="warning"
              >
                Resume
              </Button>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
