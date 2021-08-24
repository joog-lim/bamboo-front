import { useEffect, useState } from "react";
import Post from "utils/api/post";

export const getPost = () => {
  const [data, setData] = useState();
  const tryGetPost = async () => {
    return await Post.getPost();
  };
  useEffect(() => {
    tryGetPost().then((res) => setData(res.data.posts));
  }, []);
  return data;
};
