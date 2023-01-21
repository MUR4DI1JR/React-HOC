import React, {useState} from 'react';
import './app.css';
import Card from "./utils/Card";
import {CounterContext} from "./contansts/context";
import CounterComponent from "./components/counterComponent";

const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <CounterContext.Provider value={{count, increment, decrement}}>
            <CounterComponent/>
        </CounterContext.Provider>
    );
};

export default App;
