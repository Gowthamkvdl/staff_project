import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const postsLoader = async () => {
  const posts = await apiRequest.get("/post/getPosts");
  return posts.data;
};

export const listPageLoader = async ({ request }) => {
  const [location, limitStr] = request.url.split("?")[1].split("&limit=");
  const limit = parseInt(limitStr);
  const postPromise = apiRequest.get(`/post/?${location}&limit=${limit}`);
  return defer({
    postResponse: postPromise,
  });
};


