import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">I am a headline!</h2>
      <label htmlFor="input">I am a label.</label>
      <input id="input"></input>
      <a
        className="article__link"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article"
      >
        I am a link to mdn article
      </a>
    </article>
  );
}
