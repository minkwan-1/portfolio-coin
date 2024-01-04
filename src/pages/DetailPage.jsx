import React from "react";
import PageContainer from "../components/layout/common/PageContainer";
import { Box, Typography } from "@mui/material";

const DetailPage = () => {
  return (
    <PageContainer>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ bgcolor: "red", flex: "1", height: "100vh" }}>
          <Typography sx={{ color: "black" }}>
            1. 상세 코인 대쉬보드 <br />
            2. 스크롤을 각각의 영역에서만 동작하도록
          </Typography>
        </Box>
        <Box sx={{ bgcolor: "orange", flex: "2", height: "100vh" }}>
          <Typography sx={{ color: "black" }}>1. 상세 코인 차트</Typography>
        </Box>
        <Box sx={{ bgcolor: "yellow", flex: "1", height: "100vh" }}>
          <Typography sx={{ color: "black" }}>
            1. 소셜 article 카트 형식으로 나열
          </Typography>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default DetailPage;
