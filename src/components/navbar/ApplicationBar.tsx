import React from "react";
import { AppBar, Toolbar, Typography, Button, Slide } from "@mui/material";
import { Link } from "react-router-dom";

const ApplicationBar: React.FC = () => {
  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className="">
            Unity Skill Forge
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          {/* More navigation items */}
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default ApplicationBar;
