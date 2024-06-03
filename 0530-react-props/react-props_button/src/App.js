import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You Clicked a Button");
  }
  return (
    <Button
      textColor={"white"}
      backgroundColor={"black"}
      text={"Click me"}
      onClick={handleClick}
    />
  );
}

function Button({ textColor, backgroundColor, isDisabled, text, onCLick }) {
  return (
    <button
      onClick={onCLick}
      style={{ color: textColor, backgroundColor: backgroundColor }}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
