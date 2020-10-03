import React from 'react';

class APIButtonWithProps extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.theFunction}>{this.props.message}</button>
                {/* <button onClick={this.props.apiFetch}>{this.props.message}</button> */}
            </div>
        );
    }
}

export default APIButtonWithProps