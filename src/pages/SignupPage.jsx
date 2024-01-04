import React from "react";
import PageContainer from "../components/layout/common/PageContainer";
import ComponentWrapper from "../components/layout/common/ComponentWrapper";
import { Box, Typography } from "@mui/material";

const SignupPage = () => {
  return (
    <PageContainer>
      <ComponentWrapper>
        <Box
          sx={{ border: "3px solid black", height: "100vh", color: "black" }}
        >
          <Box sx={{ bgcolor: "orange", height: "100px", color: "black" }}>
            <Typography sx={{ color: "black" }}>
              1. 로고 텍스트를 가운데 정렬하여 보여줌
            </Typography>
          </Box>
          <Box sx={{ bgcolor: "yellow", height: "800px", color: "black" }}>
            <Typography sx={{ color: "black" }}>
              1. 회원가입 타이틀 <br />
              2. 카카오톡 소셜 회원가입 버튼 <br />
              3. 구글 소셜 회원가입 버튼
              <br />
              4. 이메일 가입 제안 텍스트 존재 <br />
              5. form의 형식으로 구현
              <br />
              6. form도 가운데 정렬
            </Typography>
          </Box>
        </Box>
      </ComponentWrapper>
    </PageContainer>
  );
};

export default SignupPage;
