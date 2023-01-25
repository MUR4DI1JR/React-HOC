import React, {useCallback, useState} from 'react';

const CallBack = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() =>{
        setCount(count + 1);
    }, [count]);

    const decrement = () =>{
        console.log("render");
        setCount(count - 1)
    }

    return (
        <div className="flex justify-center">
            <div>
                <p>{count}</p>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={increment}>+</button>
                <button className="ml-[10px] bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={decrement}>-</button>
            </div>
        </div>
    );
};

export default CallBack;