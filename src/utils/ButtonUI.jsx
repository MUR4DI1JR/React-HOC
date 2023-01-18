// import React, {useContext} from 'react';
// import '../app.css';
// import {CounterContext, ThemeContext} from "../App";
//
// const ButtonUi = ({onClick}) => {
//     const theme = useContext(ThemeContext);
//     const {incrementCount, decrementCount} = useContext(CounterContext);
//
//     return (
//         <div>
//             <button onClick={incrementCount} className={`button-light`}>
//                 increment
//             </button>
//             <button onClick={decrementCount} className={`button-light`}>
//                 decrement
//             </button>
//             <button onClick={onClick}>
//                 toggle theme
//             </button>
//         </div>
//     );
// };
//
// export default ButtonUi;

// import React from 'react';
//
// const withLoading = (WrappedComponent) => {
//     return class extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 isLoading: true
//             };
//         }
//
//         componentDidMount() {
//             setTimeout(() => {
//                 this.setState({ isLoading: false });
//             }, 1000);
//         }
//
//         render() {
//             return this.state.isLoading
//                 ? <div>Загрузка...</div>
//                 : <WrappedComponent {...this.props} />;
//         }
//     };
// };
//
// class MyComponent extends React.Component {
//     render() {
//         return <div>MyComponent</div>;
//     }
// }
//
// const MyComponentWithLoading = withLoading(MyComponent);

// const withError = (WrappedComponent) => {
//     return class extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = { error: null };
//         }
//
//         componentDidCatch(error, info) {
//             this.setState({ error });
//         }
//
//         render() {
//             if (this.state.error) {
//                 return <div>Error: {this.state.error.message}</div>;
//             }
//             return <WrappedComponent {...this.props} />;
//         }
//     };
// };
//
// class MyComponent extends React.Component {
//     render() {
//         return <div>MyComponent</div>;
//     }
// }
//
// const MyComponentWithError = withError(MyComponent);


