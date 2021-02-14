# react-cheat-sheet
I am exploring react

## 1) Creating the react app:

<b>

```bash
npx create-react-app <application name>
cd <application name>
npm start
```

</b>


Here we will create an app called **`sample-app`**

```bash
npm install -g create-react-app
npx create-react-app sample-app
cd sample-app
npm start
```






## 2) Hello, World!:



<b>

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

</b>






<b>

`index.js`
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

</b>





Inside this file put this code:

<b>

`app.js`
```javascript
import {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello, World!</p>
      </div>
    );
  }
}

export default App;
```

</b>





# 3) Helpful installations:

In your browser: `React developer tools`  
In Atom: `React`


# 4) Component:

`App.js` in the previous examples is an example of a component.  
### Notes:
1. render method must have only one child  
Example:
```javascript
render(){
    <div></div>
    <p></p>
}
```
This will result is error.

2.`class` is already a reserved name is JavaScript, so replace it with
`className`

### Rendering the component:

<b>

```JavaScript
ReactDOM.render(< <Name of the class>,
    document.getElementById('<id of the element>') />)
```

</b>

Example:


<b>

```JavaScript
ReactDOM.render(<App />, document.getElementById('root'));
```

</b>


# 5) Dynamic Inputs:
Inside the render method, you can use dynamic input like this:

```JavaScript
{}
```
The value inside these curly brackets will be

Example:

<b>

```JavaScript
render() {
  return (
    <div className="App">
        <p>Hello, World!</p>
        <p>The number is: {12+34}</p>
    </div>
  );
}
```

</b>


The result will be:

<b>

```
Hello, World!
The number is: 46
```

</b>



# 6) State:

<b>

```JavaScript
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
```

</b>

The result will be:

<b>



```JavaScript
Product name is: Labtop
Product price is: $200
Product in stock is: true
```

</b>



# 7) Handle state with events:
When the state changes, the app will render again, and change the value in the
frontend.

<b>

```JavaScript
class App extends Component {
    state = {
        "name": "Labtop",
        "price": 200,
        "in_stock": true
    }
    notInStock = (e) => {
        this.setState({
            in_stock:false
        })
    }
  render = () => {
    return (
      <div className="App">
          <p>Product name is: {this.state.name}</p>
          <p>Product price is: ${this.state.price}</p>
          <p>Product in stock is: {this.state.in_stock.toString()}</p>
          <button onClick={()=>{this.notInStock()}}>Not in stock</button>
      </div>
    );
  }
}
```

</b>

On clicking the `Not in stock` button,
the product will not be in stock.







# 8) Handle state with forms



<b>

```JavaScript
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
```

</b>





# 9) Nesting components:

Inside **`components/product.js`**:

<b>

```JavaScript
import {Component} from "react"

class Product extends Component {
    render() {
        return(
            <div className="product">
            <p>Name is: Labtop</p>
            <p>Price is: $50</p>
            <p>In Stock is: True</p>
            </div>
        )
    }
}

export default Product;
```

</b>




Inside **`App.js`**:



<b>

```JavaScript
import {Component} from 'react';
import Product from "./components/product"

class App extends Component {
  render = () => {
    return (
        <Product />
    );
  }
}

export default App;
```

</b>
