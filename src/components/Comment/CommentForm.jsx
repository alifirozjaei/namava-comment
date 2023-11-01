import React, { useState } from "react";
import Avatar from "../Icons/Avatar.jsx";
import styles from "./comment-form.module.css";
import SendIcon from "../Icons/SendIcon.jsx";
import CheckBox from "../CheckBox/CheckBox.jsx";
const CommentForm = ({isChecked, text, onChangeText, onChangeCheckBox}) => {
  return (
    <div className={styles["form"]}>
      <Avatar />
      <div>
        <input
          type="text"
          className={styles["input"]}
          placeholder="نظرتان درباره این فیلم چیست؟"
          onChange={onChangeText}
          value={text}
        />
        <CheckBox
          id="spoiler"
          checked={isChecked}
          onChange={onChangeCheckBox}
        >
          این نظر حاوی اسپویلر است و داستان فیلم را لو می‌دهد.
        </CheckBox>
      </div>
      <SendIcon />
    </div>
  );
};

export default CommentForm;
