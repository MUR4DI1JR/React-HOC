const initialState = {
    counter: 645,
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1
            };
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1
            };
        case "ADD_COUNTER":
            return {
                ...state,
                counter: state.counter + action.value
            };
        case "SUBTRACT_COUNTER":
            return {
                ...state,
                counter: state.counter - action.value
            };
        default:
            return state
    }
}

export default reducer;