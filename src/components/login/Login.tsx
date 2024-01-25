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
import { updateUserName } from "../../store/user/user.slice";
import { useDispatch } from "react-redux";
import theme from "../../theme";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signUp, setSignUp] = useState<boolean>(false);
  const dispatch = useDispatch();
  const auth = getAuth(app);

  const handleSignUp = (isVisible: boolean) => {
    setSignUp(isVisible);
  };

  const handleGoogleAuth = (): void => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithRedirect(auth, provider)
      .then((result: UserCredential) => {
        const user = result.user;
        console.log(`User signed in ${user?.email}`);
        dispatch(
          updateUserName({
            username: user.email ?? "",
            emailAddress: user.email ?? "",
          })
        );
      })
      .catch((error: AuthError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error ${errorCode} ${errorMessage}`);
      });
  };

  const handleSignInWithEmailPassword = (): void => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((result: UserCredential) => {
        const user = result.user;
        console.log(`User signed in ${user?.displayName}`);
        dispatch(
          updateUserName({
            username: user.displayName ?? "",
            emailAddress: user.email ?? "",
          })
        );
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
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          const user = result.user;
          console.log(`User signed in ${user?.email}`);
          dispatch(
            updateUserName({
              username: user.email ?? "",
              emailAddress: user.email ?? "",
            })
          );
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error ${errorCode} ${errorMessage}`);
      });
  }, [auth, dispatch]);

  if (signUp) return <SignUpCard handleSignUp={handleSignUp} />;

  const primary = theme.palette.primary;
  const secondary = theme.palette.secondary;

  return (
    <Card
      sx={{
        width: "50%",
        border: "6px solid transparent",
        backgroundImage: `linear-gradient(white, white), linear-gradient(to right, ${secondary.dark}, ${secondary.light}, ${secondary.light}, ${secondary.dark})`,
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
    >
      <CardContent
        sx={{
          background: `linear-gradient(to bottom right, ${secondary.light} 33%, ${secondary.main} 66%, ${secondary.dark} 100%)`,
        }}
      >
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
            variant="filled"
            onChange={(e) => handleEmailChange(e.target.value)}
            value={email}
            sx={{ backgroundColor: "white", width: "66%", mb: 1 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            onChange={(e) => handlePasswordChange(e.target.value)}
            type="password"
            value={password}
            sx={{ backgroundColor: "white", width: "66%", mb: 1 }}
          />
          <Button
            variant="contained"
            onClick={handleSignInWithEmailPassword}
            size="large"
            sx={{ backgroundColor: primary.main }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            onClick={() => handleSignUp(true)}
            size="large"
          >
            Sign Up
          </Button>
          <GoogleIcon onClick={handleGoogleAuth} sx={{ color: "#4285F4" }} />
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default Login;
