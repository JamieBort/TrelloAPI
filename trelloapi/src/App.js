import React from 'react';
import logo from './logo.svg';
import './App.css';
import TempComponent from './components/TempComponent';

const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REACT_APP_KEY = process.env.REACT_APP_KEY;
const REACT_APP_TOKEN = process.env.REACT_APP_TOKEN;
// const missing = "oo";

function App() {
  console.log(REACT_APP_KEY);
  console.log(REACT_APP_TOKEN);
  // console.log(`https://www.go`+`ogle.com`);
  // console.log(`https://www.g` + missing +`gle.com`);
  // console.log(`https://api.trello.com/1/boards/59eb3c354ef89f2258c24900/cards?key=b2b04ca8f818a58b607c8e226d68003e&token=e3e3dccf8143f51db990f253506a49a226ff6ef7dfd8439c9c96d9818016451a`);
  // console.log(`https://api.trello.com/1/boards/59eb3c354ef89f2258c24900/cards?key=` + `b2b04ca8f818a58b607c8e226d68003e&token=e3e3dccf8143f51db990f253506a49a226ff6ef7dfd8439c9c96d9818016451a`);
  console.log(`https://api.trello.com/1/boards/59eb3c354ef89f2258c24900/cards?key=` + REACT_APP_KEY + `&token=` + REACT_APP_TOKEN);
  // console.log(`https://api.trello.com/1/boards/59eb3c354ef89f2258c24900/cards?key={{key}}&token={{token}}`);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{REACT_APP_CLIENT_ID}</h1>
        <TempComponent />
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
      </header>
    </div>
  );
}

export default App;
