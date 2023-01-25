import React, {Component} from 'react';
import '../app.css';

class ItemComponent extends Component {

    render() {
        console.log(this.props.changeColor);
        console.log(this.props.color.color);
        return (
            <div className={`item ${this.props.color.color}`}>
                <button onClick={() => this.props.changeColor(this.props.color.color)}>change theme</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, mollitia.</p>
            </div>
        );
    }
}

export default ItemComponent;