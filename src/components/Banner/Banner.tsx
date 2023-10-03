import { Button } from "@mui/material";
import { Wrapper } from "../../utils/CustomTheme/CustomComponents";
import banner from "../../assets/banner.png";
import { BannerVideo } from "./BannerVideo/BannerVideo";

export const Banner = (): React.JSX.Element => {
  const windowScreen = window.screen.width;
  return (
    <Wrapper $urlImgRef={banner}>
      {windowScreen < 1024 ? (
        <>
          <h2>Challenge React</h2>
          <Button color="primary" variant="contained">
            Ver
          </Button>
        </>
      ) : (
        <BannerVideo />
      )}
    </Wrapper>
  );
};
