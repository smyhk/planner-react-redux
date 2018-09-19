import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
