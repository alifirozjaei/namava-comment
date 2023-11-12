import React, { useContext, useState } from "react";
import styles from "./comment-page.module.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import CommentForm from "../../components/Comment/CommentForm.jsx";
import fetchComment from "../../services/fetchComment";
import CommentList from "../../components/Comment/CommentList.jsx";
import FetchButton from "../../components/Button/FetchButton.jsx";
import EmptyComment from "../../components/Comment/EmptyComment.jsx";
import AuthNavigationBox from "../../components/AuthNavigationBox/AuthNavigationBox.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const auth = useContext(AuthContext);

  // fetch first page of comment
  useState(() => {
    fetchComment(1, 10)
      .then((data) => {
        setComments(data.result);
      })
      .catch((error) => console.log(error));
  }, []);

  // add new comment
  const addCommentHandler = (newComment) => {
    setComments((c) => [newComment, ...c]);
  };

  // load data for pagination
  const fetchMoreComment = () => {
    if (!loading) {
      setLoading(true);
      fetchComment(page + 1, 10)
        .then((data) => {
          setComments((c) => [...c, ...data.result]);
          setPage((p) => p + 1);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles["container"]}>
        {!comments.length && !auth.isLoggedIn && <h3>نظرات کاربران</h3>}
        <div className={styles["container-content"]}>
          {(!!comments.length || auth.isLoggedIn) && <h3>نظرات کاربران</h3>}
          {/* new comment form */}
          {auth.isLoggedIn && (
            <CommentForm addCommentHandler={addCommentHandler} />
          )}

          {!!comments.length && (
            <>
              <CommentList comments={comments} />
              <FetchButton
                onClick={fetchMoreComment}
                loading={loading}
                className={styles["fetch-btn"]}
              >
                بیشتر
              </FetchButton>
            </>
          )}

          {!auth.isLoggedIn && !comments.length && (
            <AuthNavigationBox>برای ثبت نظر باید وارد شوید.</AuthNavigationBox>
          )}

          {!comments.length && <EmptyComment />}
        </div>
      </div>
    </>
  );
};

export default CommentPage;
