import React, {Component} from 'react';

class WindowView extends Component {
    render() {
        return (
            <div>
                Window size: {this.props.windowSize.width} x {this.props.windowSize.height}
            </div>
        );
    }
}

export default WindowView;