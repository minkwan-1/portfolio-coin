import React from "react";
import PageContainer from "../components/layout/common/PageContainer";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <PageContainer>
      {/* section 1 */}
      <Box sx={{ bgcolor: "red", height: "100vh" }}>
        <Typography sx={{ color: "black", fontSize: "20px" }}>
          1. 배경 이미지 존재 <br />
          2. 메인 타이틀: Welcome to WONCOIN <br />
          3. 서브타이틀: Dive into a world where digital currencies thrive, and
          real-time trends dictate the pulse of the market. Join us as we
          navigate the ever-changing landscape of cryptocurrency with precision
          and innovation. <br />
          4. 하단 section으로 스르륵 넘어가게 하는 아랫방향 버튼 존재 <br />
          5. 렌더링 시 메인 타이틀, 서브 타이틀, 버튼 스르륵 등장하는 애니메이션
          구현
        </Typography>
      </Box>

      {/* section 2 */}
      <Box sx={{ bgcolor: "orange", height: "100vh" }}>
        <Typography sx={{ color: "black", fontSize: "20px" }}>
          1. 배경 컬러만 존재 <br />
          2. 메인 타이틀: Our Mission <br />
          3. 서브타이틀: We are committed to providing unparalleled access to
          cryptocurrency markets. Our mission is to empower users with the
          tools, insights, and resources needed to thrive in the digital
          currency ecosystem. <br />
          4. 해당 section에서는 메인 타이틀과 서브 타이틀을 정적으로 보여주기만
          함<br />
        </Typography>
      </Box>

      {/* section 3 */}

      <Box sx={{ bgcolor: "yellow", height: "100vh", display: "flex" }}>
        <Box sx={{ flex: "1" }}>
          <Typography sx={{ color: "black", fontSize: "20px" }}>
            1. 특정 이미지 보여줌 <br />
            2. section 3로 넘어오는 시점에서 이미지 스르륵 렌더링 애니메이션
            구현
          </Typography>
        </Box>
        <Box sx={{ flex: "1" }}>
          {" "}
          <Typography sx={{ color: "black", fontSize: "20px" }}>
            1. 메인 타이틀: Features <br />
            2. 서브 타이틀: Explore a comprehensive suite of features designed
            to streamline your cryptocurrency trading experience. From intuitive
            user interfaces to advanced analytical tools, we have it all
            covered. <br />
            3. 이미지 스르륵 이후에, 메인 타이틀과 서브 타이틀도 스르륵 등장
          </Typography>
        </Box>
      </Box>

      {/* section 4 */}
      <Box sx={{ bgcolor: "green", height: "100vh", display: "flex" }}>
        <Box sx={{ flex: "1" }}>
          {" "}
          <Typography sx={{ color: "black", fontSize: "20px" }}>
            1. 메인 타이틀: Security <br />
            2. 서브 타이틀: Your security is our top priority. We employ
            state-of-the-art encryption technologies and rigorous security
            protocols to ensure the safety of your assets and personal
            information. <br />
            3. 이번에는 텍스트 먼저 스르륵 등장
          </Typography>
        </Box>
        <Box sx={{ flex: "1" }}>
          <Typography sx={{ color: "black", fontSize: "20px" }}>
            1. 특정 이미지 보여줌 <br />
            2. 텍스트 스르륵 이후에, 특정 이미지 스르륵 등장
          </Typography>
        </Box>
      </Box>

      {/* section 5 */}
      <Box sx={{ bgcolor: "blue", height: "100vh" }}>
        <Typography sx={{ color: "black", fontSize: "20px" }}>
          1. 배경 이미지 존재 <br />
          2. 메인 타이틀: Join Us <br />
          3. 서브타이틀: Become a part of the WONCOIN community—a vibrant
          ecosystem of traders, investors, and enthusiasts. Together, we'll
          shape the future of cryptocurrency and drive innovation in the global
          market. <br />
          4. section이 시작되는 시점에는 가운데 정렬된 상태에서 width의 50%만
          차지하다가, 스크롤을 내릴수록 width가 100%으로 차는 애니메이션 구현{" "}
          <br />
        </Typography>
      </Box>
    </PageContainer>
  );
};

export default Home;
