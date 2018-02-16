import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import router from './router.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {router}
        </div>
      </HashRouter >
    );
  }
}

export default App;
