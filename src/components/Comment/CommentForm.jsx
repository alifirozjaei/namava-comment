import React, { useState } from "react";
import Avatar from "../Icons/Avatar.jsx";
import styles from "./comment-form.module.css";
import SendIcon from "../Icons/SendIcon.jsx";
import checkBox from "../../lottie/checkboxLottie.json";
import send from "../../lottie/sentLottie.json";
import turning from "../../lottie/turningLottie.json";
import { Player } from "@lottiefiles/react-lottie-player";
const CommentForm = ({
  isChecked,
  text,
  onChangeText,
  onChangeCheckBox,
  addCommentHandler,
  loading,
}) => {
  const onClickHandler = () => {
    if (!loading && text.trim()) {
      addCommentHandler();
    }
  };
  return (
    <div className={styles["form"]}>
      <div className={styles["first-row"]}>
        <Avatar />
        <input
          type="text"
          className={styles["input"]}
          placeholder="نظرتان درباره این فیلم چیست؟"
          onChange={onChangeText}
          value={text}
        />

        <span onClick={onClickHandler} className={styles["send"]}>
          {!!loading && (
            <Player
              autoplay
              loop
              src={loading == 1 ? turning : send}
              style={{ height: "34px", width: "34px" }}
            ></Player>
          )}
          {!loading && !text.trim() && <SendIcon fill={"#666666"} />}
          {!loading && text.trim() && <SendIcon fill={"#99c14d"} />}
        </span>
      </div>
      <div onClick={onChangeCheckBox} className={styles["checkBox"]}>
        {isChecked && (
          <Player
            keepLastFrame={true}
            autoplay={true}
            src={checkBox}
            style={{ height: "20px", width: "20px" }}
          ></Player>
        )}

        {!isChecked && (
          <Player
            src={checkBox}
            direction="-1"
            style={{ height: "20px", width: "20px" }}
          ></Player>
        )}

        <span>این نظر حاوی اسپویلر است و داستان فیلم را لو می‌دهد.</span>
      </div>
    </div>
  );
};

export default CommentForm;
