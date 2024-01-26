import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import theme from "../../theme";

const NavigationButton: React.FC<{ label: string }> = ({ label }) => {
  return (
    <Button
      component={Link}
      to="/"
      variant="contained"
      sx={{
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
      }}
    >
      {label}
    </Button>
  );
};

export default NavigationButton;
