import React from "react";
const Button = ({styles , children, ...rest }) => {
  return (
    <button
      className={`  border-none  text-white  w-32 h-12 outline-none ${styles}  `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
