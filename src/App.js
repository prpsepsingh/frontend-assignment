import React from 'react';
import logo from './logo.svg';
import { Counter } from './components/counter/Counter';
import { AntDesignCounter } from './components/AntDesignCounter/AntDesignCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter /> */}
        <AntDesignCounter/>
      </header>
    </div>
  );
}

export default App;
