import {Component} from 'react';

class App extends Component {
    state = {
        "name": "Labtop",
        "price": 200,
        "in_stock": true
    }
  render() {
    return (
      <div className="App">
          <p>Product name is: {this.state.name}</p>
          <p>Product price is: ${this.state.price}</p>
          <p>Product in stock is: {this.state.in_stock.toString()}</p>
      </div>
    );
  }
}

export default App;
