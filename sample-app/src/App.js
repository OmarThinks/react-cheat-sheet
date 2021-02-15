import {Component} from 'react';
import Products from "./components/products"
import AddProduct from "./components/addProduct"

class App extends Component {
  state = {products : [
        {name: "Labtop", price:100, in_stock: true, id:1},
        {name: "CPU", price:1, in_stock: false, id:2},
        {name: "Fridge", price:50, in_stock: true, id:3},
    ]}
  addProduct = (product) =>
  {
    product.id=Math.random();
    let products = [...this.state.products, product];
    this.setState({
      products:products
    });
    console.log(product);
  }
  deleteProduct = (id) =>{
    console.log(id);
    let products = this.state.products.filter(product => {
      return( product.id !==id);}
    );
    this.setState({
      products:products
    })
  }
  render = () => {
    return (
        <div>
            <Products products={this.state.products}
              deleteProduct= {this.deleteProduct}/>
            <AddProduct addProduct={this.addProduct} />
        </div>
    );
  }
}

export default App;
