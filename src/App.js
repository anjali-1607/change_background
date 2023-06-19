import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";

export default function App() {
  const [color, setColor] = useState("blue");
  const change = () => {
    setColor((document.body.style.backgroundColor = "red"));
  };

  useEffect(() => {
    document.body.style.backgroundColor = "pink";
  }, []);
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        margin: "19em 0em 0em 0em",
      }}>
      <Button size="big" onClick={change}>
        Change background
      </Button>
    </div>
  );
}
