import React, { Component } from 'react';
import Form from './components/form/form'
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to My React-Redux example</h2>
          </div>
          <p className="App-intro">
            <Form />
          </p>
        </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
