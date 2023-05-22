import axios from "axios";

export const fetchVideos = async (page: number = 0) => {
  const videoURL = `https://internship-service.onrender.com/videos?page=${page}`;
  const response = await axios.get(videoURL);
  const { data } = response;
  if (data.message === "Success") {
    return data.data.posts;
  } else {
    return [];
  }
};
