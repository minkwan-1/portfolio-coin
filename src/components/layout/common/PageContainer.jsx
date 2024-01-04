import Appbar from "../appbar/Appbar";
import Footer from "../footer/Footer";
import { Box } from "@mui/material";

const PageContainer = ({ children }) => {
  return (
    <>
      <Appbar />
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default PageContainer;
