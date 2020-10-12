import React, { Component } from 'react';

class ShowHide extends Component {
    constructor() {
        super();
        this.state = {
            name: "react",
        };
    }

    render() {
        return <div>This is the ShowHide component.</div>
    }
}

export default ShowHide;