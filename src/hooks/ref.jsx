import React, {useEffect, useRef, useState} from 'react';

const Ref = () => {
    const inputRef = useRef(null);
    const [animate, setAnimate] = useState(true);
    const divRef = useRef(null);

    useEffect(() => {
        const node = divRef.current;
        if (animate){
            node.style.animation = 'fadeIn 1s ease-out'
        }else {
            node.style.animation = 'fadeOut 1s ease-out'
        }
    },[animate]);

    const handInput = () => {
        console.log(inputRef.current);
        inputRef.current.click();
    }

    console.log(inputRef);

    return (
        <div>
            <input className="hidden" type="file" ref={inputRef}/>
            <button onClick={handInput}>Focus input</button>
            <div className="flex justify-center">
                <button className="mr-[10px]" onClick={() => setAnimate(!animate)}>stop animate</button>
                <div ref={divRef} className="animate-spin">
                    g
                </div>
                <div className="animate-spin">
                    g
                </div>
            </div>
        </div>
    );
};

export default Ref;