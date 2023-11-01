import React, { useState } from "react";
import "./comment-page.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import CommentForm from "../../components/Comment/CommentForm.jsx";
const CommentPage = () => {
  const [commentText, setCommentText] = useState("");
  const [haveSpoil, setHaveSpoil] = useState(false);

  return (
    <>
      <Navbar />
      <div className="container">
        <h3>نظرات کاربران</h3>

        {/* new comment form */}
        <CommentForm
          text={commentText}
          isChecked={haveSpoil}
          onChangeText={(e) => setCommentText(e.target.value)}
          onChangeCheckBox={() => setHaveSpoil((hs) => !hs)}
        />
      </div>
    </>
  );
};

export default CommentPage;
