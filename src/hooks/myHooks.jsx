import React, {useState} from 'react';

function useText(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return {
        value, onChange
    }
}

const MyHooks = () => {
    const input = useText('');
    const inputName = useText('')

    return (
        <div className="flex justify-center">
            <div className="bg-amber-700 w-[350px] h-[40px]">
                <p>{input.value}</p>
                <p>{inputName.value}</p>
                <input className="border w-full" type="text" {...input}/>
                <input className="border w-full" placeholder="name" type="text" {...inputName}/>
            </div>
        </div>
    );
};

export default MyHooks;