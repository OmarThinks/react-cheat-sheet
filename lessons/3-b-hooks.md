# 3-b) Hooks:


# 1) useState Hook:




<b>



**components/ProductList.js**

```js
import React,{useState} from 'react';
import { v4 as uuid } from 'uuid';

const ProductsList = () => {
    
    const [products,setProducts]= useState(
        [
            {name:"CPU",    id: 1},
            {name:"Labtop", id: 2},
            {name:"Mobile", id: 3},
        ]
    );
    
    const addProduct=()=>{
        setProducts([...products,{name:"New Product", id:uuid()}])
    }

    return ( 
    <div className="prodcuts-list">
        <ul>
            {products.map(product=>{
                return(<li key={product.id}>{product.name}</li>);
            })}
        </ul>

        <AddProductForm />
        <button onClick={addProduct}>Add a Product</button>
    </div> );
}
 
export default ProductsList;
```


</b>










# 2) useState With Forms:








<b>



**components/ProductList.js**

```js
import React,{useState} from 'react';
import { v4 as uuid } from 'uuid';
import AddProductForm from './AddProductForm';

const ProductsList = () => {
    
    const [products,setProducts]= useState(
        [
            {name:"CPU",    id: 1},
            {name:"Labtop", id: 2},
            {name:"Mobile", id: 3},
        ]
    );
    
    const addProduct=(title)=>{
        setProducts([...products,{name:title, id:uuid()}])
    }

    return ( 
    <div className="prodcuts-list">
        <ul>
            {products.map(product=>{
                return(<li key={product.id}>{product.name}</li>);
            })}
        </ul>
        <AddProductForm addProduct={addProduct}/>
    </div> );
}
 
export default ProductsList;
```















**components/AddProductForm.js**

```js
import React,{useState} from 'react';

const AddProductForm = ({addProduct}) => {
    
    const [title,setTitle] = useState("");

    const submitForm=(e)=>{
        e.preventDefault();
        addProduct(title);
        setTitle("");
    }

    return ( 
        <form onSubmit={submitForm}>
            <label>Product Name: </label>
            <input type="text" name="name" 
            value={title} onChange={(e)=>{
                setTitle(e.target.value);
            }}
            required active/>
            <input type="submit" value="Create a Product"/>
        </form>
     );
}
 
export default AddProductForm;
```

</b>








# 3) useEffect:


<b>


**components/ProductList.js**

```js
import React,{useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import AddProductForm from './AddProductForm';

const ProductsList = () => {
    
    const [products,setProducts]= useState(
        [
            {name:"CPU",    id: 1},
            {name:"Labtop", id: 2},
            {name:"Mobile", id: 3},
        ]
    );

    const [salary, setSalary] = useState(25);
    
    const addProduct=(title)=>{
        setProducts([...products,{name:title, id:uuid()}])
    }

    /*This will run in the first render, and only when
    salary is updated*/
    useEffect(()=>{
        console.log(salary);
    }, [salary]);
    
    /*This will run in the first render, and only when
    products is updated*/
    useEffect(()=>{
        console.log(products);
    }, [products]);

    return ( 
    <div className="prodcuts-list">
        <ul>
            {products.map(product=>{
                return(<li key={product.id}>{product.name}</li>);
            })}
        </ul>
        <AddProductForm addProduct={addProduct}/>
        <div>
            <button onClick={()=>{setSalary(salary+1)}}>Increase Salary: {salary}</button>
        </div>
    </div> );
}
 
export default ProductsList;
```















**components/AddProductForm.js**

```js
import React,{useState} from 'react';

const AddProductForm = ({addProduct}) => {
    
    const [title,setTitle] = useState("");
    
    const submitForm=(e)=>{
        e.preventDefault();
        addProduct(title);
        setTitle("");
    }

    return ( 
        <form onSubmit={submitForm}>
            <label>Product Name: </label>
            <input type="text" name="name" 
            value={title} onChange={(e)=>{
                setTitle(e.target.value);
            }}
            required/>
            <input type="submit" value="Create a Product"/>
        </form>
     );
}
 
export default AddProductForm;

```

</b>














# 4) Consuming Context with React Hooks:

<b>


```js
import React, { Component, Fragment, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Main = () => {
    const authContext = useContext(AuthContext);
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    
    const theme = isLightTheme ? light : dark;    
    
    return( 
        <main 
            style={{background:theme.ui, color: theme.syntax}}
            onClick={authContext.toggleAuth}
        >
        {authContext.isAuthenticated?"The user is Authentiated":"The user is not Authenticated"}
            <ul>
                <li style={{background:theme.bg}}>First element</li>
                <li style={{background:theme.bg}}>Second element</li>
                <li style={{background:theme.bg}}>Third element</li>
            </ul>
        </main> );
}

export default Main;
```


</b>



