import React from 'react';
import axios from 'axios';
import './App.css';
import APIButtonWithProps from './components/APIButtonWithProps';
import List from './components/List';
// import APIButtonWithState from './components/APIButtonWithState';

// const TrelloAPIstring = `https://api.trello.com/1/boards/59eb3c354ef89f2258c24900/cards?key=` + process.env.REACT_APP_KEY + `&token=` + process.env.REACT_APP_TOKEN;
const AllBoards = `https://api.trello.com/1/members/me/boards?key=` + process.env.REACT_APP_KEY + `&token=` + process.env.REACT_APP_TOKEN;

// function App() {
class App extends React.Component {
  state = {
    details: [],
  };
  // componentDidMount() {console.log("this fires after the component mounts.")};

  // console.log(process.env.REACT_APP_KEY);
  // console.log(process.env.REACT_APP_TOKEN);
  // console.log(`https://api.trello.com/1/boards/59eb3c354ef89f2258c24900/cards?key=` + process.env.REACT_APP_KEY + `&token=` + process.env.REACT_APP_TOKEN);

  // myList = (myData) => {
  //   for (let i = 0; i < myData.length; i++) {
  //     console.log(myData[i].name);
  //   }
  // }

  apiCall = () => {
    axios
      .get(AllBoards)
      .then(response => {
        console.log(response);
        // console.log(response.data[0].name);
        // console.log(response.data[0].email);
        // // create an array of details only with relevant data
        const newDetails = response.data.map(c => {
          return {
            id: c.id,
            name: c.name,
            email: c.email,
            phone: c.phone,
          };
        });
        // // create a new "State" object without mutating the original State object.
        const newState = Object.assign({}, this.state, { details: newDetails });
        // // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));

  }

  //   async apiCall = () => {
  //     // async function getDataset() {
  //       var response = await fetch(AllBoards)
  //       // .then(response => console.log(response.json()))
  //       // .then(response => {console.log(response.json());response.json();})
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log(data[0].name);
  //         console.log(data);
  //         // create an array of contacts only with relevant data
  //         // const ABoard = data.map(c => {
  //         //   return {
  //         //     //     id: c.id,
  //         //     name: c.name,
  //         //     //     email: c.email,
  //         //     //     phone: c.phone,
  //         //   };
  //         // });
  //       })
  //       .catch((error) => { console.error('Error:', error) });
  //     // create an array of contacts only with relevant data
  //     // const ABoard = data.map(c => {
  //     //   return {
  //     //     //     id: c.id,
  //     //     name: c.name,
  //     //     //     email: c.email,
  //     //     //     phone: c.phone,
  //     //   };
  //     // });

  //     console.log(response.json()); // this line will "wait" for the previous to be completed
  // //     console.log(getDataset)
  // // }
  //   };

  // apiCallAllBoards = () => {
  //   fetch(AllBoards)
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     // .then(data => this.setState({ apiName: data, }))
  //     // .then(
  //     //   this.setState({
  //     //     apiName: {
  //     //       ...this.state.apiName,this.data
  //     //     }
  //     //   })
  //     // )
  //     .then(console.log("The new state", this.state))
  //     // .then(this.setState({...this.state.apiInfo, apiInfo: this.data}))     
  //     // .then(()=>this.setState({ apiInfo: this.data, }))
  //     // .then(console.log(this.state.apiInfo))
  //     // .then(console.log(data[0].name))
  //     // .then(this.setState({ apiName: this.data[0].name, }))
  //     .catch((error) => { console.error('Error:', error) });
  // };

  updateState = () => {
    console.log("Updated state.");
    console.log(this.state.phrase);
    this.setState({ phrase: "Goodbye", });
    console.log(this.state.phrase);
    // this.statement=false;
    // return this.statement;
  }

  multifunctionButton = () => {
    // console.log(myObj);
    // this.apiCallAllBoards();
    this.apiCall();
    // console.log(tempObject);
    // console.log(myObj);
  };

  // listBoards = () => {
  //   console.log("list boards");

  //   fetch(AllBoards)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.length);
  //       // this.myList(data);
  //       for (let i = 0; i < data.length; i++) {
  //         console.log(data[i].name);
  //       }
  //     })
  //     .catch((error) => { console.error('Error:', error) });
  // };

  testFunction=()=>{console.log(this.state)};

  render() {
    // console.log(this.state);
    return (
      <div className="App">
      <APIButtonWithProps message="The current state." theFunction={this.testFunction}></APIButtonWithProps>
        <div className="section">
          <p>List the boards</p>
          <APIButtonWithProps message="This is my api button with props" theFunction={this.multifunctionButton} />
          <List details={this.state.details}></List>
        </div>
        {/* <
        < className="section">
          <p>List the description of one of the cards</p>
          <APIButtonWithProps message="This is my api button with props" apiFetch={this.apiCall} />
        </>
        <div className="section">
          <APIButtonWithState message="This is my api button with state" newState={this.apiCall} />
        </div>
        <div className="section">
          <button onClick={this.updateState}>Change state: {this.state.phrase}</button>
          <p>{this.state.phrase}</p>
        </div>
        <div className="section">
          <button>This is the name: {this.state.apiName}</button>
        </div>
        <button onClick={() => { console.log(this.state.apiInfo) }}>Api info</button>
        <p>List the boards that I have.</p>
        <APIButtonWithProps message="This is my api button with props" apiFetch={this.listBoards} >
          <li>one</li>
        </APIButtonWithProps>

        <li>two</li>
        <div className="section">
          <p>How many cards are in each board?</p>
        </div>div className="section">
          <p>List the cards of one of the boards</p>
        </div> */}
      </div>
    );
  }
}

export default App;
