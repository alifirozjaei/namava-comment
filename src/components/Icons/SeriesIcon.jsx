import React from "react";

const SeriesIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
      <g>
        <path
          class="svg-c1"
          fillRule="evenodd"
          d="M24.19 9H5c-1.66 0-3 1.35-3 3v9.79c0 1.65 1.34 3 3 3h19.19c1.66 0 3-1.35 3-3V12c0-1.65-1.34-3-3-3zm-7.08 8.67l-2.87 1.66c-.67.38-1.5-.1-1.5-.87v-3.31c0-.77.83-1.25 1.5-.87l2.87 1.66a1 1 0 0 1 0 1.73z"
          fill="#fff"
        ></path>
      </g>
      <path
        d="M6 8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1H6zm2-2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H8z"
        fill="#fff"
      ></path>
      <defs>
        <clipPath id="A">
          <path
            fill="#fff"
            transform="translate(2 9)"
            d="M0 0h25.19v18.07H0z"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default SeriesIcon;
