import React, { useState } from "react";
import "./comment-page.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import CommentForm from "../../components/Comment/CommentForm.jsx";
import fetchComment from "../../services/fetchComment";
import CommentList from "../../components/Comment/CommentList.jsx";

const CommentPage = () => {
  const [commentText, setCommentText] = useState("");
  const [haveSpoil, setHaveSpoil] = useState(false);
  const [comments, setComments] = useState([]);

  useState(() => {
    fetchComment(1, 10)
      .then((data) => {
        setComments(data.result);
      })
      .catch((error) => console.log(error));
  }, []);

  const fetchMoreComment = () => {
    fetchComment(comments.length / 10 + 1, 10)
      .then((data) => {
        setComments((c) => [...c, ...data.result]);
      })
      .catch((error) => console.log(error));
  };

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

        <CommentList comments={comments} />

        <button className="fetch-btn" onClick={fetchMoreComment}>بیشتر</button>
      </div>
    </>
  );
};

export default CommentPage;
