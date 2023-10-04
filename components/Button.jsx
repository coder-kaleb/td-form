import React from "react";

const Button = ({ onMobiel, handleRoute }) => {
  return (
    <button
      className={`select-none rounded-md bg-primaryBlack px-5 py-3 font-roboto text-xl text-white ${onMobiel}`}
      onClick={() => handleRoute()}
    >
      Register
    </button>
  );
};

export default Button;
