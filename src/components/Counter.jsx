import React, {Component} from 'react';
import {connect} from "react-redux";

class Counter extends Component {
    render() {
        return (
            <div className="text-center">
                <h1>{this.props.number}</h1>
                <button onClick={this.props.incrementCounter} className="mr-[5px] border p-[3px]">increase</button>
                <button onClick={this.props.decrementCounter} className="mr-[5px] border p-[3px]">decrease</button>
                <button onClick={this.props.incrementByCounter} className="mr-[5px] border p-[3px]">increase by 5</button>
                <button onClick={this.props.decrementByCounter} className="mr-[5px] border p-[3px]">decrease by 5</button>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        number: state.counter
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        incrementCounter: () => dispatch({type: 'INCREMENT'}),
        decrementCounter: () => dispatch({type: 'DECREMENT'}),
        incrementByCounter: () => dispatch({type: 'ADD_COUNTER', value: 5}),
        decrementByCounter: () => dispatch({type: 'SUBTRACT_COUNTER', value: 5})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);