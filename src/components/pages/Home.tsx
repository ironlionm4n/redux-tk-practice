import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import styles from "./Home.module.css";
import Logout from "../buttons/Logout";

const Home: React.FC = () => {
  return (
    <div className={styles.homeCard}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography>Welcome to Unity Skill Forge</Typography>
          <Logout />
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
