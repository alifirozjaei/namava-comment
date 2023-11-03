import React from "react";
import Comment from "./Comment.jsx";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <Comment data={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentList;
