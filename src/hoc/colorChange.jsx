import React, {Component} from 'react';
import './../app.css';

const ColorChange = (WrappedComponent) => {
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                color: "dark"
            }
        }

        handleChangeColor (color){
            this.setState({color});
        }

        render() {
            return (
                <WrappedComponent {...this.props} color={this.state} changeColor={() => this.handleChangeColor()}/>
            );
        }

    }
};

export default ColorChange;