import React, { useState } from 'react'

interface CounterProps{
    initialNumber?:number;
    onNumberChange?:(someNumber:number) => void;
}

const Counter:React.FC<CounterProps> = ({initialNumber, onNumberChange}) =>{
    const [counterNumber,setCounterNumber] = useState(initialNumber || 0);

    const obj = { a:1,b:2}

    const {a,b}=obj;

    const increaseNumber = () =>{
        const number = counterNumber+1;
        setCounterNumber(number);
        if(onNumberChange){
            onNumberChange(number);
        }
        onNumberChange && onNumberChange(number);
    }

    const decreaseNumber = () =>{
        const number = counterNumber+1;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }

    return (
        <div>
            <button onClick={increaseNumber}>+</button>
            {counterNumber}
            <button onClick={decreaseNumber}>-</button>
        </div>
    )
}

export default Counter;