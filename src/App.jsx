import * as React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  LoginPage,
  SignupPage,
  OverviewPage,
  NewsPage,
  DetailPage,
  MyPage,
} from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/overview" element={<OverviewPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/my" element={<MyPage />} />
    </Routes>
  );
}

// 1. 로그인 사인업 뷰 완성
// 2. 통신 데이터 state로 받아놓기
// 3. AWS 아이디 만들기(cognito)
// 4. 정보처리기사
