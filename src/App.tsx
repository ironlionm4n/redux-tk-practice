import { selectUsername } from "./store/user/user.selectors";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/pages/Home";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { styled } from "@mui/material";

const AppContainer = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: `radial-gradient(circle, ${theme.palette.primary.main} 25%, #000030 100%)`,
  margin: 0,
  padding: 0,
}));

function App() {
  const user = useSelector(selectUsername);
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Routes>
          <Route path="/" element={user.length > 0 ? <Home /> : <Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
