import React from 'react';
import logo from './logo.svg';
import './App.css';
import TempComponent from './components/TempComponent';

const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function App() {
  // console.log(string);
  console.log(process.env.REACT_APP_CLIENT_ID);

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
