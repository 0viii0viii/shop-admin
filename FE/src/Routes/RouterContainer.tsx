import React from "react";
import { Login, Register } from "Pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const RouterContainer = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default RouterContainer;
