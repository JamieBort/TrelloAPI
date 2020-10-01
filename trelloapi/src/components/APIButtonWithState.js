import React from 'react';

// const REACT_APP_KEY = process.env.REACT_APP_KEY;
// const REACT_APP_TOKEN = process.env.REACT_APP_TOKEN;

class APIButton extends React.Component {
    render() {
        // console.log(REACT_APP_KEY);
        // console.log(REACT_APP_TOKEN);
        return (
            <div>
                <button onClick={this.props.newState}>{this.props.message}</button>
                {/* <p>{this.state.phrase}</p> */}
            </div>
        );
    }
}

export default APIButton