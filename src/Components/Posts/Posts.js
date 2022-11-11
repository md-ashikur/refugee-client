import React from "react";
import Post from "../Post/Post";

const Posts = ({ posts }) => {
  return <div className="flex justify-center flex-col items-center pt-20">{posts.map((p) => <Post post={p} key={p._id} />).reverse()}</div>;
};

export default Posts;
