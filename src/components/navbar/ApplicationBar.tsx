import React from "react";
import { AppBar, Toolbar, Typography, Slide, Box } from "@mui/material";
import NavigationButton from "./NavigationButton";

const ApplicationBar: React.FC = () => {
  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Unity Skill Forge</Typography>
          <Box
            display="flex"
            justifyContent="end"
            alignItems="center"
            width="50%"
            gap={2}
          >
            <NavigationButton label="Home" />
            <NavigationButton label="Tutorials" />
            <NavigationButton label="About" />
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default ApplicationBar;
