import React from "react";
import { Box } from "@mui/material";

import Appbar from "../components/layout/appbar/Appbar";
import Footer from "../components/layout/footer/Footer";

const Home = () => {
  return (
    <>
      <Appbar />
      <Box sx={{ height: "2000px" }}>홈페이지</Box>
      <Footer />
    </>
  );
};

export default Home;
