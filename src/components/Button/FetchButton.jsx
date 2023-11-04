import React from "react";
import moreLottie from "../../lottie/moreLottie.json";
import { Player } from "@lottiefiles/react-lottie-player";
const FetchButton = ({ onClick, loading, className, children }) => {
  return (
    <button className={className} onClick={onClick} disabled={loading}>
      {!loading && children}
      {loading && (
        <Player
          autoplay
          loop
          src={moreLottie}
          style={{ height: "30px", width: "30px" }}
        ></Player>
      )}
    </button>
  );
};

export default FetchButton;
