import React, { Component } from 'react';
import { Header } from './components';
import { Home } from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header badge={15} />
        <Home />
      </div>
      );
  }
}

export default App;
