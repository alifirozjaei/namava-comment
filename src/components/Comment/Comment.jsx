import React, { useContext, useState } from "react";
import styles from "./comment.module.css";
import CircleWarningIcon from "../Icons/CircleWarningIcon.jsx";
import ChevronDown from "../Icons/ChevronDown.jsx";
import convertDate from "../../utils/convertDate.js";
import CommentAction from "./CommentAction.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";

const Comment = ({ data, showAuthModal }) => {
  const [showContent, setShowContent] = useState(false);
  const [commentLikeDislike, setCommentLikeDislike] = useState({
    ...data.commentLikeDislike,
    first: true,
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
            first: false,
          };
        } else if (prev.ownStatus == "Like") {
          return {
            dislikeCount: prev.dislikeCount,
            likeCount: prev.likeCount - 1,
            ownStatus: "None",
            first: false,
          };
        } else {
          return {
            dislikeCount: prev.dislikeCount - 1,
            likeCount: prev.likeCount + 1,
            ownStatus: "Like",
            first: false,
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
            first: false,
          };
        } else if (prev.ownStatus == "Dislike") {
          return {
            dislikeCount: prev.dislikeCount - 1,
            likeCount: prev.likeCount,
            ownStatus: "None",
            first: false,
          };
        } else {
          return {
            dislikeCount: prev.dislikeCount + 1,
            likeCount: prev.likeCount - 1,
            ownStatus: "Dislike",
            first: false,
          };
        }
      });
    } else {
      showAuthModal()
    }
  };

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
              data={commentLikeDislike}
              likeHandler={likeHandler}
              dislikeHandler={dislikeHandler}
            />
          </div>
        )}

        {data.flag == "Spoiled" && showContent == false && (
          <div className={styles["spoil"]}>
            <CircleWarningIcon />
            <span>این نظر حاوی اسپویلر است و داستان فیلم را لو می دهد.</span>
            <span onClick={() => setShowContent(true)}>
              <ChevronDown />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
