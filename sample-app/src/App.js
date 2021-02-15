import {Component} from 'react';
import Products from "./components/products"
import AddProduct from "./components/addProduct"

class App extends Component {
    state = {products : [
        {name: "Labtop", price:100, in_stock: true, id:1},
        {name: "CPU", price:1, in_stock: false, id:2},
        {name: "Fridge", price:50, in_stock: true, id:3},
    ]}
  render = () => {
    return (
        <div>
            <Products products={this.state.products} />
            <AddProduct />
        </div>
    );
  }
}

export default App;
