import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center my-28">
        <div className="lds-roller ">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};

export default Loading;
