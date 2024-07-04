import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./component/banner/Banner";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
import Dashboard from "./component/dashboard/Dashboard";
import { AuthContext } from "./context/AuthContext";
import PublicRoute from "../src/routes/PublicRoute";
import PrivateRoute from "../src/routes/PrivateRoute";

function App() {
  const { loading, user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Banner />} />

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
