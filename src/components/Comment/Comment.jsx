import React, { useState } from "react";
import comment from "./comment.css";
import Avatar from "../Icons/Avatar.jsx";
import LikeIcon from "../Icons/LikeIcon.jsx";
import DisLikeIcon from "../Icons/DisLikeIcon.jsx";
import CircleWarningIcon from "../Icons/CircleWarningIcon.jsx";
import ChevronDown from "../Icons/ChevronDown.jsx";
import convertDate from "../../utils/convertDate.js";
const Comment = ({ data }) => {
  const [showContent, setShowContent] = useState(false);

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
            <span>
              <LikeIcon />
            </span>
            <span>{data.commentLikeDislike.likeCount}</span>
            <span>
              <DisLikeIcon />
            </span>
            <span>{data.commentLikeDislike.dislikeCount}</span>
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
