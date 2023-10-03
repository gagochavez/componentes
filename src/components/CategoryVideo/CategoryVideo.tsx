import { Box } from "@mui/joy";
import { Container, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useFetchCategory, useFetchVideos } from "../../Services/useFetch";
import { Button } from "../../utils/Button/Button";
import { Categories } from "../../models/dbModels";
import { colorresCSS } from "../../utils/CustomTheme/variables";
import { Slider } from "../Slider/Slider";

export const CategoryVideo = (): React.JSX.Element => {
  const { dataVideos } = useFetchVideos();
  const { dataCategory } = useFetchCategory();
  const filterVideosCategory = (categoryName: string) =>
    dataVideos?.filter((video) => video.category === categoryName);

  return (
    <>
      <Box p={2} sx={{ backgroundColor: `${colorresCSS.black.black_one}` }}>
        {dataCategory?.map((category: Categories) => {
          const { id, name, color, description } = category;
          const videoForCategory = filterVideosCategory(name);
          return (
            videoForCategory &&
            videoForCategory?.length > 0 && (
              <Container key={id} maxWidth="xl" sx={{ marginTop: "2rem" }}>
                <Box
                  pb={2}
                  display={"flex"}
                  gap={1}
                  alignItems={"center"}
                  flexWrap={"wrap"}
                >
                  <Button
                    typeButton="button"
                    padding="1rem 2rem"
                    content={name}
                    color={color}
                  />
                  <Typography
                    variant="h6"
                    component={"h3"}
                    color={blueGrey[100]}
                    fontSize={"14px"}
                  >
                    {description}
                  </Typography>
                </Box>
                <Box>
                  <Slider videoForCategory={videoForCategory} colors={color} />
                </Box>
              </Container>
            )
          );
        })}
      </Box>
    </>
  );
};
