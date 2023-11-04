import React, { useState } from "react";
import comment from "./comment.css";
import CircleWarningIcon from "../Icons/CircleWarningIcon.jsx";
import ChevronDown from "../Icons/ChevronDown.jsx";
import convertDate from "../../utils/convertDate.js";

import CommentAction from "./CommentAction.jsx";
const Comment = ({ data }) => {
  const [showContent, setShowContent] = useState(false);
  const [commentLikeDislike, setCommentLikeDislike] = useState({
    ...data.commentLikeDislike,
    first: true,
  });

  const likeHandler = () => {
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
  };

  const dislikeHandler = () => {
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
  };

  return (
    <div className="comment">
      <div className="comment-header">
        <img
          src={`https://www.namava.ir/${data.profileAvatar}`}
          alt="Profile"
        />
        <span>
          {data.profileCaption} - {convertDate(data.createDateUTC)}
        </span>
      </div>
      <div className="comment-content">
        {(data.flag != "Spoiled" || showContent) && <p>{data.body}</p>}

        {(data.flag != "Spoiled" || showContent) && (
          <div className="comment-action">
            <CommentAction
              data={commentLikeDislike}
              likeHandler={likeHandler}
              dislikeHandler={dislikeHandler}
            />
          </div>
        )}

        {data.flag == "Spoiled" && showContent == false && (
          <div className="spoil">
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
