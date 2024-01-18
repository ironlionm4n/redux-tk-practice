import { Button } from "@mui/material";
import React from "react";
import { app } from "../../firebase";
import { getAuth } from "firebase/auth";
import { logout } from "../../store/user/user.slice";
import { useDispatch } from "react-redux";
import { LogoutTwoTone } from "@mui/icons-material";
import { styled } from "@mui/material";
import theme from "../../theme";

const LogoutIcon = styled("div")(({ theme }) => ({
  color: theme.palette.secondary.main,
  background: "transparent",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.secondary.light,
  },
}));

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
      <Button
        onClick={handleLogout}
        size="small"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          alignContent: "center",
          backgroundColor: theme.palette.primary.main,
          ":hover": {
            backgroundColor: theme.palette.primary.light,
          },
        }}
      >
        <LogoutIcon>
          <LogoutTwoTone fontSize="large" />
        </LogoutIcon>
      </Button>
    </div>
  );
};

export default Logout;
