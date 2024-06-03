import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Sum valueA={10} valueB={20} />
      <Sum valueA={50} valueB={20} />
      <Sum valueA={5} valueB={2} />
    </>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {valueA + valueB}
    </h1>
  );
}
