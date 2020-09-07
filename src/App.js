import React, { Component } from 'react';
import { Header } from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header badge={15} />
      </div>
      );
  }
}

export default App;
