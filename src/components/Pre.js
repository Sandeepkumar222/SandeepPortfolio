import React from "react";
import Lottie from "react-lottie";
import animationData from "../Assets/78259-loading.json";
function Pre(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidMid slice",
    },
  };

  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
