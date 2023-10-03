import { useEffect, useState } from "react";
import { Categories, Video } from "../models/dbModels";

export const useFetchVideos = () => {
  const url = "https://6508a0ba56db83a34d9c94b4.mockapi.io/videos";
  const [dataVideos, setDataVideos] = useState<Video[] | null>(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDataVideos(data));
  }, [url]);
  return { dataVideos };
};

export const useFetchCategory = () => {
  const url = "https://6508a0ba56db83a34d9c94b4.mockapi.io/categories";
  const [dataCategory, setDataCategory] = useState<Categories[] | null>(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDataCategory(data));
  }, [url]);
  return { dataCategory };
};
