import React from "react";

const TextInput = ({
  placeholder,
  onChangeText,
  className,
  onEnterPressed,
  value,
}) => {
  return (
    <input
      className={`text-input ${className}`}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChangeText && onChangeText(event.target.value)}
      onKeyPress={(event) =>
        onEnterPressed &&
        event.key === "Enter" &&
        onEnterPressed(event.target.value)
      }
    />
  );
};

export default TextInput;