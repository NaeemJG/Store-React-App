import React, { Component } from 'react';
import './App.css';
import FormComp from './Forms/Form.js'

class App extends Component {
  state = {
    stores: [
      {id: '1', storename: 'Walmart', country: 'United States', city: 'Wake Forest', state: 'NC'},
      {id: '2', storename: 'Nike', country: 'United States', city: 'Brooklyn', state: 'NY'},
      {id: '3', storename: 'Harris Teeter', country: 'United States', city: 'Norfolk', state: 'VA'},
      {id: '4', storename: 'Lowes', country: 'United States', city: 'NashVille', state: 'TN'}

    ]
  }

  renderTableData() {
    return this.state.stores.map((store, index) => {
       const { id, storename, country, city, state} = store 
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
        <table id='stores'>
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

