import { NavLink } from "react-router-dom";
import Scarecrow from "../../assets/Scarecrow.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { blueGrey } from "@mui/material/colors";

const Error404 = () => {
  return (
    <div className="general">
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: "calc(95vh - 100px)",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={4} xs={10}>
            <img src={Scarecrow} alt="No Found" width="100%" />
          </Grid>
          <Grid item md={6} xs={12} m={3} textAlign={"center"}>
            <Typography
              component="h2"
              variant="h4"
              fontWeight={"bold"}
              color={blueGrey[500]}
              paragraph
              sx={{ letterSpacing: "-0.035em" }}
            >
              Tengo malas noticias para ti
            </Typography>
            <Typography
              color={blueGrey[300]}
              variant="h6"
              paragraph
              letterSpacing={"-0.035em"}
            >
              La página que estás buscando puede ser eliminada o está
              temporalmente indisponible.
            </Typography>
            <NavLink to={"/"}>
              <Button
                color="info"
                variant="outlined"
                size="large"
                sx={{ borderWidth: "2px" }}
                startIcon={<HomeOutlinedIcon />}
              >
                INICIO
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Error404;
