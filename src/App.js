import React from 'react';
import logo from './logo.svg';
import { AntDesignCounter } from './components/AntDesignCounter/AntDesignCounter';
import './App.css';

function App() {
  constructor() {
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
  }

  componentDidMount() {
    start()
  }

  componentWillUnmount() {
    stop()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AntDesignCounter/>
      </header>
    </div>
  );
};

export default App;
