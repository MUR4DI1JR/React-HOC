import React, {useState, useContext, useEffect, useReducer, useRef, useCallback, useMemo} from 'react';
import CallBack from "./hooks/callBack";
import Memo from "./hooks/memo";

const initialState = {
    count: 0,
    text: "",
    words: []
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type){
        // case 'increment':
        //     return {count: state.count + 2}
        // case 'decrement':
        //     return {count: state.count - 1}
        // case 'set':
        //     return {text: action.payload}
        case 'clear':
            return {text: ''}
        case 'add':
            return {words: [...state.words, action.payload]}
        default:
            console.log("error");
    }
}

const ReducerCount = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state.words);
    // console.log(dispatch);

    return (
        <div>
            <p>
                Count: {state.count}
            </p>
            <input type="text" id="word" value={state.text} onChange={(e) => dispatch({type: 'add', payload: e.target.value})}/>
            <button onClick={() => dispatch({type: 'clear'})}>clear</button>
            <button onClick={() => dispatch({type: 'add', payload: document.getElementById("word").value})}>add</button>
            {/*<button*/}
            {/*    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"*/}
            {/*    onClick={() => dispatch({type: "increment"})}>+</button>*/}
            {/*<button onClick={() => dispatch({type: "decrement"})}>-</button>*/}
        </div>
    );
};

export default ReducerCount;