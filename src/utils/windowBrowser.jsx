import React, {Component} from 'react';

const WindowBrowser = (WrappedComponent) => {
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }


        componentDidMount() {
            window.addEventListener('resize', this.handleResize);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }

        handleResize = () => {
            this.setState({width: window.innerWidth, height: window.innerHeight});
        }

        render() {
            console.log(window);

            return <WrappedComponent {...this.props} windowSize={this.state}/>
        }

    }
};

export default WindowBrowser;