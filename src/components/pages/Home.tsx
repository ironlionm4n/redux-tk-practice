import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import styles from "./Home.module.css";
import Logout from "../buttons/Logout";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";

const Home: React.FC = () => {
  const auth = getAuth(app);
  return (
    <>
      <nav style={{ width: "100%" }}>
        <Card
          sx={{
            width: "100%",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography fontSize={24}>
              Welcome to Unity Skill Forge {auth.currentUser?.displayName}
            </Typography>
            <Logout />
          </CardContent>
        </Card>
      </nav>
      <div className={styles.homeCard}></div>
    </>
  );
};

export default Home;
