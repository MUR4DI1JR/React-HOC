import React, {useEffect, useMemo, useState} from 'react';

function complexComputed(num){
    console.log("render");
    let i = 0;
    while (i < 1000000000) i++;
    return num * 2
}

const Memo = () => {
    const [count, setCount] = useState(23);
    const [colored, setColored] = useState(false);

    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])

    // const computed = complexComputed(count);

    const computed = useMemo(() => {
        return complexComputed(count)
    }, [count]);

    useEffect(() => {
        console.log('Styles changed')
    }, [styles]);

    return (
        <div className="flex justify-center">
            <div>
                <p className={colored ? "text-rose-600" : "text-black"}>{computed}</p>
                <button onClick={()=> setCount(prev => prev + 1)}>+</button>
                <button onClick={() => setCount(prev => prev - 1)}>-</button>
                <button onClick={() => setColored(prev => !prev)}>change color</button>
            </div>
        </div>
    );
};

export default Memo;