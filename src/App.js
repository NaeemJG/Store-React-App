import React, { Component } from 'react';
import './App.css';
import FormComp from './Forms/Form.js'

class App extends Component {
  state = {
    stores: [
      {id: '01', storename: 'Walmart', country: 'United States', city: 'Wake Forest', state: 'NC'},
      {id: '02', storename: 'Nike', country: 'United States', city: 'Brooklyn', state: 'NY'},
      {id: '03', storename: 'Harris Teeter', country: 'United States', city: 'Norfolk', state: 'VA'},
      {id: '04', storename: 'Lowes', country: 'United States', city: 'NashVille', state: 'TN'}

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
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', {className : 'App'}, 'It be like that'), React.createElement('p', {className: 'App'}, 'This is really working out here'));
  }
}

export default App;

