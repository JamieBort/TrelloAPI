import React from 'react';

// const REACT_APP_KEY = process.env.REACT_APP_KEY;
// const REACT_APP_TOKEN = process.env.REACT_APP_TOKEN;

class APIButton extends React.Component {
    render() {
        // console.log(REACT_APP_KEY);
        // console.log(REACT_APP_TOKEN);
        return (
            <div>
                <button onClick={ this.props.push }>My Button</button>
                <button onClick={ this.props.apiFetch }>API Button</button>
            </div>
        );
    }
}

export default APIButton