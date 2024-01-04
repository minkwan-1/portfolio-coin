import React from "react";
import PageContainer from "../components/layout/common/PageContainer";
import { Box, Typography } from "@mui/material";

const NewsPage = () => {
  return (
    <PageContainer>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: "1", bgcolor: "red", height: "100vh" }}>
          {" "}
          <Typography sx={{ color: "black" }}>
            1. dash board <br />
            2. appbar보다 zIndex 높게 구현
          </Typography>
        </Box>
        <Box sx={{ flex: "4", bgcolor: "orange", height: "100vh" }}>
          {" "}
          <Typography sx={{ color: "black" }}>
            1. 썸네일, 타이틀, 서브 타이틀로 구성된 뉴스 카드 여러 개 렌더링{" "}
            <br />
            2. dash board 고정된 상태에서 카트 section은 아래로 스크롤
            가능하도록 구현
          </Typography>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default NewsPage;
