import React from 'react';
import axios from 'axios';
import './App.css';
import APIButtonWithProps from './components/APIButtonWithProps';
// import List from './components/List';
// import ShowHide from './components/ShowHide';
import Demo1 from './components/Demo1';
// import APIButtonWithState from './components/APIButtonWithState';

// const TrelloAPIstring = `https://api.trello.com/1/boards/59eb3c354ef89f2258c24900/cards?key=` + process.env.REACT_APP_KEY + `&token=` + process.env.REACT_APP_TOKEN;
const AllBoards = `https://api.trello.com/1/members/me/boards?key=` + process.env.REACT_APP_KEY + `&token=` + process.env.REACT_APP_TOKEN;

// function App() {
class App extends React.Component {
  // currently missing constructor with state inside
  constructor(props) {
    super(props); // *** why is super crossed out? ***
    this.state = {
      showHideDemo1: false, // 
      // showHideDemo2: false,
      // showHideDemo3: false
    };
    this.showHideComponentSwitchStatement = this.showHideComponentSwitchStatement.bind(this); // or similar line. *** NOTE: this needs to change. ***
  }

  // also missing switch statement
  showHideComponentSwitchStatement(aVariable) {
    console.log(aVariable);
    // console.log("hi");
    // switch statement
    switch (aVariable) {
      case "showHideDemo1":
        // need to toggle the car on and off.
        console.log("trigger true");
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        break;
      default:
        console.log("the default case was used.");
    }
  }

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

  currentStateFunction = () => { console.log("The current state is:", this.state); };

  render() {
    const { showHideDemo1, } = this.state;
    return (
      <div className="App">
        <div className="section">
          <APIButtonWithProps message="Show/Hide Switch Button." theFunction={() => this.showHideComponentSwitchStatement("showHideDemo1")}>
          </APIButtonWithProps>
        </div>
        <div className="section">
          <APIButtonWithProps message="The current state." theFunction={this.currentStateFunction}></APIButtonWithProps>
        </div>
        <div className="section">
          <p>the place for my hiding card.</p>
          {showHideDemo1 && <Demo1 />}
        </div>
        {/* <div className="section">
          <APIButtonWithProps message="List the boards" theFunction={this.multifunctionButton} />
          <List details={this.state.details}></List>
        </div>
        <div className="section">
          <ShowHide message="Show/Hide" ></ShowHide>
          <APIButtonWithProps message="Hide the boards" theFunction={this.multifunctionButton} />
          <List details={this.state.details}></List>
        </div> */}

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
