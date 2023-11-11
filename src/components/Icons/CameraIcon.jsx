import React from "react";

const CameraIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
    >
      <g clipPath="url(#A)" fill="#fff">
        <path
          d="M16.032 11.86a3.43 3.43 0 0 0 0-6.86 3.43 3.43 0 0 0 0 6.86zm-7.402 0a3.43 3.43 0 0 0 0-6.86 3.43 3.43 0 0 0 0 6.86z"
        ></path>
        <g fillRule="evenodd">
          <path d="M18.3 24.45H6c-1.66 0-3-1.34-3-3v-5.47c0-1.66 1.34-3 3-3h12.3c1.66 0 3 1.34 3 3v5.47a3.01 3.01 0 0 1-3 3z"></path>
          <path d="M19.678 19.58l4.97 2.87c.67.38 1.5-.1 1.5-.87v-5.74c0-.77-.83-1.25-1.5-.87l-4.97 2.87c-.67.39-.67 1.36 0 1.74z"></path>
        </g>
      </g>
      <defs>
        <clipPath id="A">
          <path
            fill="#fff"
            transform="translate(3 5)"
            d="M0 0h23.15v19.45H0z"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CameraIcon;
