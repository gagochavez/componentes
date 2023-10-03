import { Box } from "@mui/material";
import logoFooter from "../../assets/logo.png";
import { colorresCSS } from "../../utils/CustomTheme/variables";

export const Footer = (): React.ReactElement => {
  return (
    <>
      <footer
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: `${colorresCSS.black.black_one}`,
          borderTop: `2px solid ${colorresCSS.primary}`,
          padding: "1rem 2rem",
        }}
      >
        <Box textAlign={"center"} sx={{ width: "50%" }}>
          <img src={logoFooter} alt="logo-footer" />
        </Box>
      </footer>
    </>
  );
};
