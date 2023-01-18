import React, {Component} from 'react';

export const WithLoading = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: true
            }
        };

        componentDidMount(){
            setTimeout(() => {
                this.setState({isLoading: false})
            }, 3000)
        }

        render()
        {
            return this.state.isLoading ?
                <div>Loading</div>
                :
                <WrappedComponent {...this.props}/>
        }
    }
};
