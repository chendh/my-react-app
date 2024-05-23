import React, {useState} from 'react';
import Board from './Board';

function TicTacToe(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    return(
        <div className='game'>
            <div className='game-board'>
                <Board squares={currentSquares} />
            </div>
        </div>
    );
}

export default TicTacToe;