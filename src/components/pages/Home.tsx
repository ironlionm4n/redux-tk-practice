import {
  Box,
  Card,
  CardContent,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./Home.module.css";
import Logout from "../buttons/Logout";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";
import TutorialCard from "../cards/TutorialCard";
import ApplicationBar from "../navbar/ApplicationBar";

const Home: React.FC = () => {
  const auth = getAuth(app);

  return (
    <div>
      <ApplicationBar />
      <Box component="div" border={4}>
        <Box component="div" padding={2}>
          <Container
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#ffffff",
              padding: "2rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h2">Welcome to Unity Skill Forge</Typography>
            <Typography variant="h4" padding={2}>
              The best place to learn Unity game development
            </Typography>
            <Typography variant="body1">
              Unity Skill Forge is a place where you can learn Unity game
              development from the ground up. We have tutorials for all skill
              levels, from beginner to advanced. We also have a community forum
              where you can ask questions and get help from other developers.
            </Typography>
          </Container>
        </Box>
        <Container>
          <Paper elevation={10}>
            <Typography variant="h4">Beginner Tutorials</Typography>
            <Typography variant="h6">
              These tutorials are for beginners who are new to Unity and game
              development in general. They will teach you the basics of Unity
              and how to make your first game.
            </Typography>
            <Typography variant="h6">
              <ul>
                <li>Getting Started with Unity</li>
                <li>How to Make a 2D Game</li>
                <li>How to Make a 3D Game</li>
                <li>How to Make a Multiplayer Game</li>
              </ul>
            </Typography>
          </Paper>
        </Container>
      </Box>
    </div>
  );

  return (
    <div className={styles.home}>
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
              height: "1rem",
            }}
          >
            <Typography fontSize={24}>
              Welcome to Unity Skill Forge {auth.currentUser?.displayName}
            </Typography>
            <Logout />
          </CardContent>
        </Card>
      </nav>
      <div className={styles.homeCard}>
        <div className={styles.section}>
          <h2>Beginner</h2>
          <div className={styles.tutorial}>
            <TutorialCard />
            <TutorialCard />
            <TutorialCard />
            <TutorialCard />
            <TutorialCard />
          </div>
        </div>
        <div className={styles.section}>
          <h2>Intermediate</h2>
          <TutorialCard />
        </div>
        <div className={styles.section}>
          <h2>Advanced</h2>
          <TutorialCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
