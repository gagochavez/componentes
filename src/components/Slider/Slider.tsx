import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardMedia } from "@mui/material";
import { Video } from "../../models/dbModels";
import { useState } from "react";

interface PropsSlider {
  videoForCategory: Video[] | undefined;
  colors: string;
}

export const Slider = (props: PropsSlider): React.ReactElement => {
  const { videoForCategory, colors } = props;

  const maxSlidesToShow = Math.min(videoForCategory?.length || 1, 3);

  const [settings] = useState({
    arrows: false,
    dots: false,
    lazyload: "ondemand",
    infinite: true,
    speed: 300,
    slidesToShow: maxSlidesToShow,
    slidesToScroll: maxSlidesToShow,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: maxSlidesToShow,
          slidesToScroll: maxSlidesToShow,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  return (
    <SliderSlick {...settings}>
      {videoForCategory?.map((data: Video) => {
        const { id, image, url } = data;
        return (
          <a key={id} href={url} target="_blank">
            <CardMedia
              loading="lazy"
              component="img"
              sx={{
                width: "97%",
                gap: "10px",
                outline: `3px solid ${colors}`,
                margin: "2px",
              }}
              image={image}
              alt="video"
            />
          </a>
        );
      })}
    </SliderSlick>
  );
};
