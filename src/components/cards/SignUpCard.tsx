import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
} from "@mui/material";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase";
import { useDispatch } from "react-redux";
import { updateUserName } from "../../store/user/user.slice";

const SignUpCard: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [displayNameVal, setDisplayName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const handleFirstName = (value: string) => {
    setFirstName(value);
  };

  const handleLastName = (value: string) => {
    setLastName(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleDisplayName = (value: string) => {
    setDisplayName(value);
  };

  const handleSignUpWithEmailPassword = () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: displayNameVal,
        })
          .then(() => {
            // Profile updated!
            console.log("Profile updated!" + JSON.stringify(user));
            dispatch(
              updateUserName({
                username: user.displayName ?? "DISPLAY NAME NULL",
                emailAddress: user.email ?? "EMAIL ADDRESS NULL",
              })
            );
            // ...
          })
          .catch((error) => {
            // An error occurred
            console.log("An error occurred " + error);
            // ...
          });
        console.log(`User signed up ${JSON.stringify(user)}`);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error ${errorCode} ${errorMessage}`);
        // ..
      });
  };

  return (
    <Card>
      <CardContent>
        <CardHeader title="Sign Up" />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField
            label="First Name"
            variant="outlined"
            onChange={(e) => handleFirstName(e.target.value)}
            value={firstName}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            onChange={(e) => handleLastName(e.target.value)}
            value={lastName}
          />
          <TextField
            label="Display Name"
            variant="outlined"
            onChange={(e) => handleDisplayName(e.target.value)}
            value={displayNameVal}
          />
          <TextField
            label="Email"
            variant="outlined"
            onChange={(e) => handleEmailChange(e.target.value)}
            value={email}
          />
          <TextField
            label="Password"
            variant="outlined"
            onChange={(e) => handlePasswordChange(e.target.value)}
            type="password"
            value={password}
          />
          <Button variant="contained" onClick={handleSignUpWithEmailPassword}>
            Sign Up
          </Button>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
