import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import likeActive from "../../lottie/likeActive.json";
import likeInactive from "../../lottie/likeInactive.json";
import dislikeActive from "../../lottie/dislikeActive.json";
import dislikeInactive from "../../lottie/dislikeInactive.json";

const CommentAction = ({ data, likeHandler, dislikeHandler }) => {
  return (
    <>
      <span onClick={likeHandler}>
        <Player
          autoplay
          keepLastFrame={true}
          src={data.ownStatus == "Like" ? likeActive : likeInactive}
          style={{ height: "30px", width: "30px" }}
        ></Player>
      </span>
      <span>{data.likeCount}</span>
      <span onClick={dislikeHandler}>
        <Player
          autoplay
          keepLastFrame={true}
          src={data.ownStatus == "Dislike" ? dislikeActive : dislikeInactive}
          style={{ height: "30px", width: "30px" }}
        ></Player>
      </span>
      <span>{data.dislikeCount}</span>
    </>
  );
};

export default CommentAction;
