import { selectUsername } from "./store/user/user.selectors";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Home from "./components/pages/Home";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUsername);
  return (
    <>
      <Routes>
        <Route path="/" element={user.length > 0 ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
