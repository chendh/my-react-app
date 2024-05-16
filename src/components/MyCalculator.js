import React, { useState } from "react";
import MyDisplay from "./MyDisplay";
import MyButton from "./MyButton";
import "./calculator.css";

function MyCalculator() {
  const [result, setResult] = useState("0");
  const handleclick = (value) => {
    // alert(value);
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "*":
      case "/":
        if (result === "0") {
          setResult(value);
        } else {
          setResult(result + value);
        }
        break;
      case "=":
        setResult(eval(result).toString());
        break;
      case "c":
        setResult("");
        break;
      case "+/-":
        setResult(parseInt(result, 10) * -1);
        break;
      case "%":
        setResult(parseInt(result, 10) / 100);
        break;
      default:
        break;
    }
  };
  return (
    <div className="calculator">
      <MyDisplay result={result} />
      <MyButton buttonClicked={handleclick} />
    </div>
  );
}

export default MyCalculator;
