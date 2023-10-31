import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../lottie/loading.json";
import styles from "./submit-button.module.css";
const SubmitButton = ({ text, loading, disabled }) => {
  return (
    <button className={styles["form-btn"]} type="submit" disabled={disabled}>
      {!loading && text}
      {loading && (
        <Player
          autoplay
          loop
          src={animation}
          style={{ height: "40px", width: "40px" }}
        ></Player>
      )}
    </button>
  );
};

export default SubmitButton;
