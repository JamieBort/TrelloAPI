import React, { Component } from 'react';

class Demo1 extends Component {
    constructor() { // NOTICE: props is not passed in. ~~TODO: pass props in once this is working as expected.~~ This is because props is not used in the class.
        super(); // NOTICE: props is not passed in. ~~TODO: pass props in once this is working as expected.~~ This is because props is not used in the class.
        this.state = {
            name: "react",
        };
    }

    render() {
        return <div>This is the Demo1 component.</div>
    }
}

// import React from 'react';

// function Demo1(props) {
//     return (
//         <div>
//             <p>{props.message}</p>
//         </div>
//     );
// }

export default Demo1;