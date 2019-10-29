import React, { Component } from 'react';
import './App.css';
import FormComp from './Forms/Form.js'

class App extends Component {
  state = {
    storename: 'AWS',
    location: 'North Virgnia',
    size: '3 Zones'
  }

  render() {
    return (
      <div>
        <div className="NavBar App">
          <a href="#" className="Spacing">Store Listing</a>
          <a href="#"className="Spacing">Add Store</a>
        </div>
        <h1 className="App">Stores</h1>
        <FormComp storename={this.state.storename} location={this.state.location} size={this.state.size}/>
      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', {className : 'App'}, 'It be like that'), React.createElement('p', {className: 'App'}, 'This is really working out here'));
  }
}

export default App;
