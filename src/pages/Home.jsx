import React from "react";
import { Box } from "@mui/material";

import Appbar from "../components/layout/appbar/Appbar";

const Home = () => {
  return (
    <>
      <Appbar />
      <Box sx={{ height: "2000px" }}>홈페이지</Box>
    </>
  );
};

export default Home;
