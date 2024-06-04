import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [code, setCode] = useState("");
  // console.log(code);
  const validCode = "🐡🐠🐋";

  function handleClick(event) {
    const nextCode = code + event.target.textContent;
    setCode(nextCode);
    console.log("Code", code);
    console.log("Next Code", nextCode);
  }

  function handleReset() {
    setCode("");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      {code === validCode && <p>Valid Code!</p>}
    </div>
  );
}
