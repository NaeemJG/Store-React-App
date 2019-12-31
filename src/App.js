import React, { Component } from 'react';
import './App.css';
import FormComp from './Forms/Form.js'

class App extends Component {
  state = {
    stores: [
      {id: '1', storename: 'Walmart', city: 'Wake Forest', state: 'NC',country: 'United States',},
      {id: '2', storename: 'Nikey', city: 'Brooklyn', state: 'NY', country: 'United States',},
      {id: '3', storename: 'Harris Teeter', city: 'Norfolk', state: 'VA', country: 'United States',},
      {id: '4', storename: 'Lowes', city: 'NashVille', state: 'TN', country: 'United States',}

    ]
  }

  renderTableData() {
    return this.state.stores.map((store, index) => {
       const { id, storename, city, state, country} = store 
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{storename}</td>
             <td>{city}</td>
             <td>{state}</td>
             <td>{country}</td>
          </tr>
       )
    })
 }
 
 renderTableHeader() {
  let header = Object.keys(this.state.stores[0])
  return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
  })
}

  render() {
    return (
      <div>
        <div className="NavBar App">
          <a href="#" className="Spacing">Store Listing</a>
          <a href="#"className="Spacing">Add Store</a>
        </div>
        <h1 className="App">Stores</h1>
        <table id="stores">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', {className : 'App'}, 'It be like that'), React.createElement('p', {className: 'App'}, 'This is really working out here'));
  }
}

export default App;

