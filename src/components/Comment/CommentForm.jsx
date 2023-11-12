import React, { useState } from "react";
import Avatar from "../Icons/Avatar.jsx";
import styles from "./comment-form.module.css";
import SendIcon from "../Icons/SendIcon.jsx";
import checkBox from "../../lottie/checkboxLottie.json";
import send from "../../lottie/sentLottie.json";
import turning from "../../lottie/turningLottie.json";
import { Player } from "@lottiefiles/react-lottie-player";
import getNowUTC from "../../utils/getNowUTC.js";
const CommentForm = ({ addCommentHandler }) => {
  const [commentText, setCommentText] = useState("");
  const [haveSpoil, setHaveSpoil] = useState(false);
  const [loading, setLoading] = useState(0);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!loading && commentText.trim()) {
      if (!loading) {
        setLoading(1);
        const newComment = {
          profileAvatar:
            "/Content/Upload/Images/e9b409a9-88d8-4ee5-a81e-6cddc50782b0.png",
          profileCaption: "Ali",
          createDateUTC: getNowUTC(),
          body: commentText,
          flag: haveSpoil ? "Spoiled" : "None",
          id: crypto.randomUUID(),
          commentLikeDislike: {
            dislikeCount: 0,
            likeCount: 0,
            ownStatus: "None",
          },
        };
        setTimeout(() => {
          addCommentHandler(newComment);
          setCommentText("");
          setHaveSpoil(false);
          setLoading(2);
          setTimeout(() => {
            setLoading(0);
          }, 1000);
        }, 2000);
      }
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles["form"]}>
      <div className={styles["first-row"]}>
        <Avatar />
        <input
          type="text"
          className={styles["input"]}
          placeholder="نظرتان درباره این فیلم چیست؟"
          onChange={(e) => setCommentText(e.target.value)}
          value={commentText}
        />

        <button onSubmit={onSubmitHandler} className={styles["send"]}>
          {!!loading && (
            <Player
              autoplay
              loop
              src={loading == 1 ? turning : send}
              style={{ height: "34px", width: "34px" }}
            ></Player>
          )}
          {!loading && !commentText.trim() && <SendIcon fill={"#666666"} />}
          {!loading && commentText.trim() && <SendIcon fill={"#99c14d"} />}
        </button>
      </div>
      <div
        onClick={() => setHaveSpoil((hs) => !hs)}
        className={styles["checkBox"]}
      >
        {haveSpoil && (
          <Player
            keepLastFrame={true}
            autoplay={true}
            src={checkBox}
            style={{ height: "20px", width: "20px" }}
          ></Player>
        )}

        {!haveSpoil && (
          <Player
            src={checkBox}
            direction="-1"
            style={{ height: "20px", width: "20px" }}
          ></Player>
        )}

        <span>این نظر حاوی اسپویلر است و داستان فیلم را لو می‌دهد.</span>
      </div>
    </form>
  );
};

export default CommentForm;
