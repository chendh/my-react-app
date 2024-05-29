import React from "react";
import Square from "./Square";
import "./tictactoe.css";

function Board() {
  return (
    <div className="tic-tac-toe-board">
        <div className="board-row">
            <Square>1</Square>
            <Square>2</Square>
            <Square>3</Square>
        </div>
        <div className="board-row">
            <Square>1</Square>
            <Square>2</Square>
            <Square>3</Square>
        </div>
        <div className="board-row">
            <Square>1</Square>
            <Square>2</Square>
            <Square>3</Square>
        </div>
    </div>
  );
}
export default Board;
