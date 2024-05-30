import React, {useState} from 'react';
import Board from './Board';

function TicTacToe(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    const handlePlay = (nextSquares) =>{
        const nextHistory = [...history.slice(0, currentMove+1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    return(
        <div className='game'>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className='game-info'>
                <h4>遊戲歷程</h4>
            </div>
        </div>
    );
}

export default TicTacToe;