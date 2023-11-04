import React, { useContext, useState } from "react";
import "./comment-page.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import CommentForm from "../../components/Comment/CommentForm.jsx";
import fetchComment from "../../services/fetchComment";
import CommentList from "../../components/Comment/CommentList.jsx";
import getNowUTC from "../../utils/getNowUTC";
import FetchButton from "../../components/Button/FetchButton.jsx";
import EmptyComment from "../../components/Comment/EmptyComment.jsx";
import AuthNavigationBox from "../../components/AuthNavigationBox/AuthNavigationBox.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";

const CommentPage = () => {
  const [commentText, setCommentText] = useState("");
  const [haveSpoil, setHaveSpoil] = useState(false);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [formLoading, setFormLoading] = useState(0);
  const auth = useContext(AuthContext);

  // fetch first page of comment
  // useState(() => {
  //   fetchComment(1, 10)
  //     .then((data) => {
  //       setComments(data.result);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // add new comment
  const addCommentHandler = () => {
    if (!formLoading) {
      setFormLoading(1);
      const newComment = {
        profileAvatar:
          "/Content/Upload/Images/e9b409a9-88d8-4ee5-a81e-6cddc50782b0.png",
        profileCaption: "Ali",
        createDateUTC: getNowUTC(),
        body: commentText,
        flag: haveSpoil ? "Spoiled" : "None",
        id: crypto.randomUUID(),
        commentLikeDislike: {
          dislikeCount: 0,
          likeCount: 0,
          ownStatus: "None",
        },
      };
      setTimeout(() => {
        setComments((c) => [newComment, ...c]);
        setCommentText("");
        setHaveSpoil(false);
        setFormLoading(2);
        setTimeout(() => {
          setFormLoading(0);
        }, 1000);
      }, 2000);
    }
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
      <div className="container">
        {!comments.length && !auth.isLoggedIn && <h3>نظرات کاربران</h3>}
        <div className="container-content">
          {(!!comments.length || auth.isLoggedIn) && <h3>نظرات کاربران</h3>}
          {/* new comment form */}
          {auth.isLoggedIn && (
            <CommentForm
              text={commentText}
              isChecked={haveSpoil}
              onChangeText={(e) => setCommentText(e.target.value)}
              onChangeCheckBox={() => setHaveSpoil((hs) => !hs)}
              addCommentHandler={addCommentHandler}
              loading={formLoading}
            />
          )}

          {!!comments.length && (
            <>
              <CommentList comments={comments} />
              <FetchButton
                onClick={fetchMoreComment}
                loading={loading}
                className={"fetch-btn"}
              >
                بیشتر
              </FetchButton>
            </>
          )}

          {!auth.isLoggedIn && (
            <AuthNavigationBox>برای ثبت نظر باید وارد شوید.</AuthNavigationBox>
          )}

          {!comments.length && <EmptyComment />}
        </div>
      </div>
    </>
  );
};

export default CommentPage;
