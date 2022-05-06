import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Components/Login/Login";
import LogOut from "./Components/Login/LogOut";
function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/logout" element={<LogOut />} />
    </Routes>
  </BrowserRouter>
    </>
  );
};

export default App;