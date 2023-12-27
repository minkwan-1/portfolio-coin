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

// 1. table tag 확인, 정리(MDN or Blog)
// 2. material table v2

// 3. dark mode 컬러 정리
// 4. Embla Carousel

// 5. API, RESTful API TIL 정리
// 6. http method(http protocol) 정리
// 7. fetch & axios
