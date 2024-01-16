import { Button, Typography } from "@mui/material";
import React from "react";
import { app } from "../../firebase";
import { getAuth } from "firebase/auth";
import { logout } from "../../store/user/user.slice";
import { useDispatch } from "react-redux";
import { LogoutTwoTone } from "@mui/icons-material";

const Logout: React.FC = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const handleLogout = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div>
      <Button onClick={handleLogout}>
        <Typography>Logout</Typography>
        <LogoutTwoTone />
      </Button>
    </div>
  );
};

export default Logout;
