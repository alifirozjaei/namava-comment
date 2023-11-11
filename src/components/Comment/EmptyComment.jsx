import React from "react";
import CommentIcon from "../Icons/CommentIcon.jsx";
import styles from "./empty-comment.module.css";
const EmptyComment = () => {
  return (
    <div className={styles["container"]}>
      <CommentIcon />
      <h4>هنوز نظری ثبت نشده.</h4>
      <h4>اولین نفری باشید که نظر خود را ثبت می کند.</h4>
    </div>
  );
};

export default EmptyComment;
