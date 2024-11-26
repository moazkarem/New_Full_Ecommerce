import React from "react";
const Button = ({styles , children, ...rest }) => {
  return (
    <button
      className={`${styles}   border-none rounded-sm  w-32 h-12 outline-none `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
