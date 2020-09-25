import React from "react";
const Button = ({className, onPress, children }) => {
  return (
    <button onClick={onPress} className={className}>
      {children}
    </button>
  );
};

export default Button;