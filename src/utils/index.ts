import { T_ResponseData } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchVideos = async (page: number = 0) => {
  const videoURL = `https://internship-service.onrender.com/videos?page=${page}`;
  const response = await axios.get(videoURL);
  const { data } = response;
  if (data.message === "Success") {
    return data.data;
  } else {
    return [];
  }
};

export const getVideos = () => {
  return useInfiniteQuery<T_ResponseData>(
    ["videos"],
    async ({ pageParam = 0 }) => {
      return await fetchVideos(pageParam);
    },
    {
      getNextPageParam: (lastPage) => lastPage.offset ?? undefined,
      staleTime: Infinity,
    }
  );
};
