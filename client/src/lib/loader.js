import apiRequest from "./apiRequest"; 
import { defer } from "react-router-dom";

export const postsLoader = async () => {
  const postsResponse = apiRequest.get("/post/getPosts");
  return defer({
    postsResponse: postsResponse,
  });
};
