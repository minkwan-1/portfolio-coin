import { useTheme } from "@mui/material";
import Appbar from "../appbar/Appbar";
import Footer from "../footer/Footer";
import { Box } from "@mui/material";

const PageContainer = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Appbar />
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          flexGrow: 1,
          backgroundColor: theme.palette.mode === "dark" ? "#121212" : "",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default PageContainer;
