import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>MarioPlan</h1>
        </div>
      </Router>
    );
  }
}

export default App;
