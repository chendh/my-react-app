import React from "react";
import "./MyCalculator.css";

function MyButton(props) {
    const handelClick = (e) =>{
        props.buttonClicked(e.target.value);
        // alert(e.target.value);
    }
  return (
    <div className="board">
      <div>
        <button className="btn btn-action" value="c" onClick={handelClick}>C</button>
        <button className="btn btn-action" value="+/-" onClick={handelClick}>+/-</button>
        <button className="btn btn-action" value="%" onClick={handelClick}>%</button>
        <button className="btn btn-operator" value="/" onClick={handelClick}>/</button>
      </div>
      <div>
        <button className="btn" value="7" onClick={handelClick}>7</button>
        <button className="btn" value="8" onClick={handelClick}>8</button>
        <button className="btn" value="9" onClick={handelClick}>9</button>
        <button className="btn btn-operator" value="*" onClick={handelClick}>*</button>
      </div>
      <div>
        <button className="btn" value="4" onClick={handelClick}>4</button>
        <button className="btn" value="5" onClick={handelClick}>5</button>
        <button className="btn" value="6" onClick={handelClick}>6</button>
        <button className="btn btn-operator" value="-" onClick={handelClick}>-</button>
      </div>
      <div>
        <button className="btn" value="1" onClick={handelClick}>1</button>
        <button className="btn" value="2" onClick={handelClick}>2</button>
        <button className="btn" value="3" onClick={handelClick}>3</button>
        <button className="btn btn-operator" value="+" onClick={handelClick}>+</button>
      </div>
      <div>
        <button className="btn btn-0" value="0" onClick={handelClick}>0</button>
        <button className="btn" value="." onClick={handelClick}>.</button>
        <button className="btn btn-operator" value="=" onClick={handelClick}>=</button>
      </div>
    </div>
  );
}

export default MyButton;
