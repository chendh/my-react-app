import React from "react";
import { useState } from "react";
import MySlider from "./MySlider";

function MyRGBPanel() {
  const panelCSS = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    borderRadius: "10px",
    width: "300px",
    padding: "30px",
    alignItems: "center",
    margin: "auto",
    justifyContent: "center",
  };
  const [r, setR] = useState(128);
  const [g, setG] = useState(128);
  const [b, setB] = useState(128);

  const updateR = (c) => setR(c);
  const updateG = (c) => setG(c);
  const updateB = (c) => setB(c);

  return (
    <>
      <div style={panelCSS}>
        <h3>MyRGBPanel元件</h3>
        <div
          style={{
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            width: "200px",
            height: "100px",
          }}
        />
        <MySlider label="RED" onChange={updateR} />
        <MySlider label="GREEN" onChange={updateG} />
        <MySlider label="BLUE" onChange={updateB} />
      </div>
    </>
  );
}

export default MyRGBPanel;
