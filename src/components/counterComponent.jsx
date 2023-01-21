import React, {useContext, useState} from 'react';
import {CounterContext} from "../contansts/context";


const CounterComponent = () => {
    const {increment, decrement, count} = useContext(CounterContext);

    return (
        <div className="flex justify-center">
            {count}
            <div className="flex justify-center">
                <button onClick={decrement} className="ml-[2px] border">dec</button>
                <button onClick={() => increment()} className="ml-[2px] border">inc</button>
            </div>
        </div>
    );
};

export default CounterComponent;