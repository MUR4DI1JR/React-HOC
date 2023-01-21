import React, {useContext} from 'react';
import {PizzaContext} from "../contansts/context";

const Card = () => {
    const {pizza} = useContext(PizzaContext);
    const {addPizza} = useContext(PizzaContext);

    console.log(pizza);

    return (
        <div className="flex flex-wrap w-[80%] mx-auto">
            {
                pizza.map((item, i) => {
                    return(
                        <div key={i} className="w-[30%] rounded-lg shadow-md lg:max-w-sm mx-[5px] my-[15px]">
                            <img
                                className="w-full h-[220px]"
                                src={item.imageUrl}
                                alt="image"
                            />
                            <div className="p-4">
                                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                                    {item.title}
                                </h4>
                                <p className="mb-2 leading-normal">
                                    {item.price} c
                                </p>
                                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                    Купить
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            <button onClick={() => addPizza()}>
                add pizza
            </button>
        </div>
    );
};

export default Card;