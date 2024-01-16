import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
// import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import {
  AuthError,
  GoogleAuthProvider,
  UserCredential,
  getAuth,
  getRedirectResult,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import { app } from "../../firebase";
import GoogleIcon from "@mui/icons-material/Google";
import SignUpCard from "../cards/SignUpCard";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signUp, setSignUp] = useState<boolean>(false);

  const handleSignUp = (): void => {
    setSignUp(true);
  };

  const handleGoogleAuth = (): void => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithRedirect(auth, provider);
  };

  const handleSignInWithEmailPassword = (): void => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((result: UserCredential) => {
        const user = result.user;
        console.log(`User signed in ${user?.displayName}`);
      })
      .catch((error: AuthError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error ${errorCode} ${errorMessage}`);
      });
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  useEffect(() => {
    const auth = getAuth(app);
    getRedirectResult(auth)
      .then((result: UserCredential | null) => {
        const credential = GoogleAuthProvider.credentialFromResult(
          result as UserCredential
        );
        if (credential && result) {
          const token = credential.accessToken;
          const user = result.user;
          console.log(`User signed in ${user?.displayName} token ${token}`);
        }
      })
      .catch((error: AuthError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(`Error ${errorCode} ${errorMessage} ${credential}`);
      });
  }, []);

  if (signUp) return <SignUpCard />;

  return (
    <Card sx={{ width: "50vw" }}>
      <CardContent>
        <CardHeader title="Login" />
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
          <Button variant="contained" onClick={handleSignInWithEmailPassword}>
            Login
          </Button>
          <Button variant="contained" onClick={handleSignUp}>
            Sign Up
          </Button>
          <GoogleIcon onClick={handleGoogleAuth} sx={{ color: "#4285F4" }} />
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default Login;
