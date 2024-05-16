import React from 'react';
import './calculator.css';

function MyDisplay(props){
    return(<div className='display'>
        {props.result}
    </div>);
}

export default MyDisplay;