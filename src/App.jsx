import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, LoginPage, SignupPage } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}
