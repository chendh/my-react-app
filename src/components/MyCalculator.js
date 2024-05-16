import React, {useState} from 'react';
import MyDisplay from './MyDisplay';
import MyButton from './MyButton';
import './MyCalculator.css';

function MyCalculator(){
    return(
        <div className='calculator'>
            <MyDisplay />
            <MyButton />
        </div>
    );
}

export default MyCalculator;