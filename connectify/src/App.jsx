import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
// import { Context } from "./main";
// import axios from "axios";
// import { useContext } from "react";

const App = () => {
  // const { setUser, setIsAuthenticated } = useContext(Context);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/api/v1/users/me", {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       setUser(res.data.user);

  //       setIsAuthenticated(true);
  //     })
  //     .catch(() => {
  //       setUser({});

  //       setIsAuthenticated(false);
  //     });
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;

// bg-[#fde25b]
