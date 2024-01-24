import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";

const TutorialCard: React.FC = () => {
  return (
    <Card
      sx={{
        width: "100%",
      }}
    >
      <CardHeader title="Tutorial" />
      <CardContent>
        <p>
          This is a tutorial card. It is a simple card that can be used to
          display information to the user.
        </p>
      </CardContent>
    </Card>
  );
};

export default TutorialCard;
