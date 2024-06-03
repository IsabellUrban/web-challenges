import "./styles.css";

export default function App() {
  return <Greeting name={"Jessica"} />;
}

function Greeting({ name }) {
  return (
    <h1>
      Hello,{" "}
      {name === "Feline" || name === "Andrea" || name === "Jessica"
        ? "Coach"
        : name}
      !
    </h1>
  );
}
