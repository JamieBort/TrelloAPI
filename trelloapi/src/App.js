import React from 'react';
// import logo from './logo.svg';
import './App.css';
import APIButton from './components/APIButton';

const REACT_APP_KEY = process.env.REACT_APP_KEY;
const REACT_APP_TOKEN = process.env.REACT_APP_TOKEN;
const TrelloAPIstring = `https://api.trello.com/1/boards/59eb3c354ef89f2258c24900/cards?key=` + REACT_APP_KEY + `&token=` + REACT_APP_TOKEN;

// function App() {
  class App extends React.Component {
  // console.log(REACT_APP_KEY);
  // console.log(REACT_APP_TOKEN);
  // console.log(`https://api.trello.com/1/boards/59eb3c354ef89f2258c24900/cards?key=` + REACT_APP_KEY + `&token=` + REACT_APP_TOKEN);

  render() {
  return (
    <div className="App">
    <button onClick={apiCall}>Button Tag. This makes an api call as well.</button>
    <APIButton push={() => console.log("Button Pushed")} apiFetch={apiCall} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
    }
}

function apiCall() {
  fetch(TrelloAPIstring)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
}

export default App;
