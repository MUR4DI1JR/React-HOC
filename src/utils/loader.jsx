import React from 'react';

const Loader = (WrappedComponent, time) => {
    return class extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                isLoading: true
            }
        }
        componentDidMount(){
            setTimeout(() =>{
                this.setState({ isLoading: false})
            }, time);
        }

        render(){
            return this.state.isLoading ?
                <div>Loading</div>
                :
                <WrappedComponent {...this.props}/>
        }
    }
};

export default Loader;