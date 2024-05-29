import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>I am the headline!</h1>
      <p>I am the running text.</p>
      <h2>I am the subheadline</h2>
      <p>I am more running text.</p>
    </article>
  );
}
