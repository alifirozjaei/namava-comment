import React, { useContext, useState } from "react";
import styles from "./comment.module.css";
import CircleWarningIcon from "../Icons/CircleWarningIcon.jsx";
import ChevronDown from "../Icons/ChevronDown.jsx";
import convertDate from "../../utils/convertDate.js";
import CommentAction from "./CommentAction.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";

const Comment = ({ data, showAuthModal }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className={styles["comment"]}>
      <div className={styles["comment-header"]}>
        <img
          src={`https://www.namava.ir/${data.profileAvatar}`}
          alt="Profile"
        />
        <span>
          {data.profileCaption} - {convertDate(data.createDateUTC)}
        </span>
      </div>
      <div className={styles["comment-content"]}>
        {(data.flag != "Spoiled" || showContent) && <p>{data.body}</p>}

        {(data.flag != "Spoiled" || showContent) && (
          <div className={styles["comment-action"]}>
            <CommentAction
              data={data.commentLikeDislike}
              showAuthModal={showAuthModal}
            />
          </div>
        )}

        {data.flag == "Spoiled" && showContent == false && (
          <div className={styles["spoil"]} onClick={() => setShowContent(true)}>
            <CircleWarningIcon />
            <span>این نظر حاوی اسپویلر است و داستان فیلم را لو می دهد.</span>
            <span>
              <ChevronDown />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
