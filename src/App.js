// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from "./SignInSide";
import SignUp from "./SignUp";
import PersistentDrawerLeft from "./Root"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<SignInSide />} />
        <Route exact path="/register" element={<SignUp />} />

        <Route exact path="/" element={<PersistentDrawerLeft />} /> 

        {/* Otras rutas de tu aplicación */}
      </Routes>
    </Router>
  );
}
