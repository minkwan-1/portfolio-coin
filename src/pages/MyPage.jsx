import React from "react";
import PageContainer from "../components/layout/common/PageContainer";
import { Box, Typography } from "@mui/material";

const MyPage = () => {
  return (
    <PageContainer>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ bgcolor: "red", height: "100px" }}>
          <Typography sx={{ color: "black" }}>
            1. ~~님 Hi! <br />
          </Typography>
        </Box>
        <Box sx={{ bgcolor: "orange", height: "100vh" }}>
          <Typography sx={{ color: "black" }}>
            1. 즐겨찾기 코인 테이블 '행' 렌더링 <br />
            2. 추가될 때마다 동적으로 테이블 생성
          </Typography>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default MyPage;
