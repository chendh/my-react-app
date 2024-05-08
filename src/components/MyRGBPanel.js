import React from "react";
import { useState } from "react";
import MySlider from "./MySlider";

function MyRGBPanel() {
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    const updateR = (value) => setR(value);
    const updateG = (value) => setG(value);
    const updateB = (value) => setB(value);
  return (
    <>
      <div
        style={{
          border: "1px solid blue",
          borderRadius: "20px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "100px",
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
          }}
        />
        <span>R: </span>
        <MySlider onChange={updateR} />
        <span>G: </span>
        <MySlider onChange={updateG} />
        <span>B: </span>
        <MySlider onChange={updateB} />
      </div>
    </>
  );
}

export default MyRGBPanel;
