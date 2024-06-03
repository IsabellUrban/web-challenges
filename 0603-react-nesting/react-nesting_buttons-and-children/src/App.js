import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>
        I am the Fox Button <span>🦊</span>
      </Button>
      <Button>
        I am the Panda Button <span>🐼</span>
      </Button>
      <Button>
        I am the Mouse Button <span>🐭</span>
      </Button>
      <Button>
        I am the Mouse Hamster <span>🐹</span>
      </Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
