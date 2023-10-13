import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ onMobiel, handleClick, type, text, styles, err }) => {
  return (
    <button
      type={type}
      className={twMerge(
        "foucs:ring-offset-4 select-none rounded-md bg-primaryBlack px-5 py-3 font-roboto text-xl text-white hover:ring hover:ring-gray-600 hover:ring-offset-2 focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 ",
        `${onMobiel} ${styles} ${
          err
            ? "cursor-not-allowed opacity-50 transition hover:ring hover:ring-gray-500 hover:ring-offset-2  "
            : ""
        } `,
      )}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
