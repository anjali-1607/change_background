import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { Button, Grid, GridColumn } from "semantic-ui-react";

export default function App() {
  const [color, setColor] = useState("white");
  const change_purple = () => {
    setColor("purple");
  };
  const change_red = () => {
    setColor("red");
  };
  const change_green = () => {
    setColor("green");
  };
  const change_yellow = () => {
    setColor("yellow");
  };
  const change_orange = () => {
    setColor("orange");
  };
  const change_black = () => {
    setColor("black");
  };
  const change_pink = () => {
    setColor("pink");
  };
  const change_brown = () => {
    setColor("brown");
  };
  const change_original = () => {
    setColor("white");
  };

  // useEffect(() => {
  //   document.body.style.backgroundColor = color;
  //   console.log(color);
  // }, [color]);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: color,
      }}>
      <div
        style={{
          padding: "18em 10em 10em 10em",
        }}>
        <Grid columns={5}>
          <Grid.Column>
            <Button color="purple" onClick={change_purple}>
              Purple
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button color="red" onClick={change_red}>
              Red
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button color="green" onClick={change_green}>
              Green
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button color="yellow" onClick={change_yellow}>
              Yellow
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button color="orange" onClick={change_orange}>
              Orange
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button color="black" onClick={change_black}>
              Black
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button color="pink" onClick={change_pink}>
              Pink
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button color="brown" onClick={change_brown}>
              Brown
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button color="white" onClick={change_original}>
              White
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}
