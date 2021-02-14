import {Component} from 'react';
import Product from "./components/product"

class App extends Component {
  render = () => {
    return (
        <Product name="Labtob" price={50.1} in_stock={true} />
    );
  }
}

export default App;
