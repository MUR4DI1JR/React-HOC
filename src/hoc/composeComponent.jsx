import React, {Component} from "react";

export function composeComponent (Component) {
    return class extends Component {
        render() {
            return <Component/>
        }
    }
}
























// export const CounterContext = createContext(null);
// export const ThemeContext = createContext(null);


// const [theme, setTheme] = useState('light');
// const [count, setCount] = useState(0);
//
// const incrementCount = () =>{
//     setCount(count + 1);
// }
//
// const decrementCount = () =>{
//     setCount(count - 1);
// }


// <CounterContext.Provider value={{
//     incrementCount, decrementCount
// }}>
//     <ThemeContext.Provider value={theme}>
//         <div className={`item ${theme}`}>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quidem sunt ullam?</p>
//         </div>
//         <ButtonUI onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
//     </ThemeContext.Provider>
//     <div>
//         {count}
//     </div>
//     <ButtonUI/>