import {Component} from 'react';

class App extends Component {
    state = {
        "name": "Labtop",
        "price": 200,
        "in_stock": true
    }

    handleChange = (e) =>{
    this.setState({
        "name":e.target.value
    })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.name);
    }
  render = () => {
    return (
      <div className="App">
          <p>Product name is: {this.state.name}</p>
          <p>Product price is: ${this.state.price}</p>
          <p>Product in stock is: {this.state.in_stock.toString()}</p>
          <div>
            <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                <input type="text"
                onChange={(e)=>{this.handleChange(e)}}></input>
                <button type="submit">Submit</button>
            </form>
          </div>
      </div>
    );
  }
}

export default App;
