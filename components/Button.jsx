import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ onMobiel, handleClick, type, text, styles, err }) => {
  // const { firstName, lastName, phoneNumber, grade, section } = err;
  // const isDisabled = firstName || lastName || phoneNumber || grade || section;
  return (
    <button
      type={type}
      className={twMerge(
        "select-none rounded-md bg-primaryBlack px-5 py-3 font-roboto text-xl text-white ",
        `${onMobiel} ${styles} ${
          err
            ? "cursor-not-allowed opacity-50 transition  hover:ring hover:ring-gray-500 hover:ring-offset-2"
            : ""
        } `,
      )}
      onClick={handleClick}
      // disabled={err}
    >
      {text}
    </button>
  );
};

export default Button;
