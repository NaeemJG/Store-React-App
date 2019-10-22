import React, { Component } from 'react';
import './App.css';
import FormComp from './Forms/Form.js'

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <h1>Stores</h1>
        <FormComp />
      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', {className : 'App'}, 'It be like that'), React.createElement('p', {className: 'App'}, 'This is really working out here'));
  }
}

export default App;
