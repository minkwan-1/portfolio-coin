import React from "react";
import PageContainer from "../components/layout/common/PageContainer";
import { Box, Typography } from "@mui/material";

const LoginPage = () => {
  return (
    <PageContainer>
      <Box sx={{ display: "flex" }}>
        {/* image section */}
        <Box
          sx={{ bgcolor: "red", height: "100vh", flex: "1", color: "black" }}
        >
          <Typography sx={{ color: "black" }}>
            1. 일정 시간에 따라 랜덤한 이미지를 렌더링
          </Typography>
        </Box>
        {/* Login form section */}
        <Box
          sx={{ bgcolor: "orange", height: "100vh", flex: "1", color: "black" }}
        >
          <Typography sx={{ color: "black" }}>
            1. 로그인 타이틀 <br />
            2. 카카오톡 소셜 로그인 버튼 <br />
            3. 구글 소셜 로그인 버튼
            <br />
            4. 이메일 로그인 제안 텍스트 존재 <br />
            5. form의 형식으로 구현
          </Typography>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default LoginPage;
