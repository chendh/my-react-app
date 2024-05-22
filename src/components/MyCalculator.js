import React, {useState} from 'react';
import MyDisplay from './MyDisplay';
import MyButton from './MyButton';
import './MyCalculator.css';

function MyCalculator(){
    // handleClick是MyButton的事件處理常式
    const handleClick = (value) =>{
        alert(value);
    }
    return(
        <div className='calculator'>
            <MyDisplay />
            <MyButton buttonClicked={handleClick}/>
        </div>
    );
}

export default MyCalculator;