import React from "react";
import Square from "./Square";
import './tictactoe.css';

function Board({squares}) {
    const handleClick = (i) =>{

    }
  return (
  <>
  <div className="board-row">
    <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
    <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
    <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
  </div>
  </>);
}

export default Board;
