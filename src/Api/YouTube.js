import axios from "axios";

const KEY = "AIzaSyDvKV4KDTl1fYAB01d08PNnsAHFd89s1Bo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
