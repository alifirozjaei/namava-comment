import React, { useState } from "react";
import Comment from "./Comment.jsx";
import Modal from "../Modal/Modal.jsx";

const CommentList = ({ comments }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {showModal && <Modal handleClose={() => setShowModal(false)} />}

      {comments.map((comment) => (
        <Comment
          data={comment}
          key={comment.id}
          showAuthModal={() => setShowModal(true)}
        />
      ))}
    </div>
  );
};

export default CommentList;
