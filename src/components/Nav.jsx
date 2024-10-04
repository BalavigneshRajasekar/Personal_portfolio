/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../App.css";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";

const pages = ["Home", "About", "Projects", "Skills", "Contact"];
const drawerWidth = 240;

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export default function Nav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "white" }}>
        PortFolio
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
              }}
            >
              <a
                className="drawer-nav"
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  lineHeight: "24px",
                  letterSpacing: "-0.01em",
                  display: "flex",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "white",
                  width: "100%",
                }}
                href={`#${item}`}
              >
                <p>{item}</p>
                <KeyboardArrowRightIcon color="warning" />
              </a>
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
      </List>
      <p className="mt-3 text-success fw-bold">@2024 All rights reserved</p>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar component="nav" sx={{ backgroundColor: "black" }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Portfolio
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {pages.map((item) => (
                  <Button key={item} className="a">
                    <a
                      style={{
                        padding: "10px",
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "white",
                      }}
                      href={`#${item}`}
                    >
                      {item}
                    </a>
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "black",
                borderRight: "2px solid green",
                borderTop: "1px solid green",

                borderRadius: "10px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <div id="Home">
            <Home />
          </div>
          <div id="About" className="About">
            <About />
          </div>
          {/* <div id="Skills" className="Skills">
            <Skills />
          </div> */}
        </Box>
      </Box>
    </div>
  );
}
