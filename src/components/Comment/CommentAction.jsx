import React, { useContext, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import likeActive from "../../lottie/likeActive.json";
import likeInactive from "../../lottie/likeInactive.json";
import dislikeActive from "../../lottie/dislikeActive.json";
import dislikeInactive from "../../lottie/dislikeInactive.json";
import { AuthContext } from "../../context/AuthContext.jsx";

const CommentAction = ({ data, showAuthModal }) => {
  const [commentLikeDislike, setCommentLikeDislike] = useState({
    ...data,
  });
  const auth = useContext(AuthContext);

  const likeHandler = () => {
    if (auth.isLoggedIn) {
      setCommentLikeDislike((prev) => {
        if (prev.ownStatus == "None") {
          return {
            dislikeCount: prev.dislikeCount,
            likeCount: prev.likeCount + 1,
            ownStatus: "Like",
          };
        } else if (prev.ownStatus == "Like") {
          return {
            dislikeCount: prev.dislikeCount,
            likeCount: prev.likeCount - 1,
            ownStatus: "None",
          };
        } else {
          return {
            dislikeCount: prev.dislikeCount - 1,
            likeCount: prev.likeCount + 1,
            ownStatus: "Like",
          };
        }
      });
    } else {
      showAuthModal();
    }
  };

  const dislikeHandler = () => {
    if (auth.isLoggedIn) {
      setCommentLikeDislike((prev) => {
        if (prev.ownStatus == "None") {
          return {
            dislikeCount: prev.dislikeCount + 1,
            likeCount: prev.likeCount,
            ownStatus: "Dislike",
          };
        } else if (prev.ownStatus == "Dislike") {
          return {
            dislikeCount: prev.dislikeCount - 1,
            likeCount: prev.likeCount,
            ownStatus: "None",
          };
        } else {
          return {
            dislikeCount: prev.dislikeCount + 1,
            likeCount: prev.likeCount - 1,
            ownStatus: "Dislike",
          };
        }
      });
    } else {
      showAuthModal();
    }
  };
  return (
    <>
      <span onClick={likeHandler}>
        <Player
          autoplay
          keepLastFrame={true}
          src={commentLikeDislike.ownStatus == "Like" ? likeActive : likeInactive}
          style={{ height: "30px", width: "30px" }}
        ></Player>
      </span>
      <span>{commentLikeDislike.likeCount}</span>
      <span onClick={dislikeHandler}>
        <Player
          autoplay
          keepLastFrame={true}
          src={commentLikeDislike.ownStatus == "Dislike" ? dislikeActive : dislikeInactive}
          style={{ height: "30px", width: "30px" }}
        ></Player>
      </span>
      <span>{commentLikeDislike.dislikeCount}</span>
    </>
  );
};

export default CommentAction;
