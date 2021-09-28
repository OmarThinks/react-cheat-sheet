# 3-b) Hooks:

# Summary:


## A) Hooks Functions:

<b>

```js
import React,{useState, useEffect, useContext, useReducer} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const [products,setProducts]= useState(
    [
        {name:"CPU",    id: 1},
        {name:"Labtop", id: 2},
        {name:"Mobile", id: 3},
    ]
);

useEffect(()=>{console.log(salary);}, [salary]);

const authContext = useContext(AuthContext);

const [state, dispatch] = useReducer(productReducer, [
    {id:1, name:" 1"}, 
    {id:2, name:"Product 2"}, 
], //The third Parameter is the default value
()=> {
    const localData = localStorage.getItem("products");
    return localData ? JSON.parse(localData) : [];
}
);
```

</b>
<b>


### A-1) useState:


- inputs:
    - initalState

```js
import React,{useState, useEffect, useContext, useReducer} from 'react';

const [products,setProducts]= useState(
    [
        {name:"CPU",    id: 1},
        {name:"Labtop", id: 2},
        {name:"Mobile", id: 3},
    ]
);
```


### A-2) useEffect:


- inputs:
    - function:
        - To be executed every time the states are updated, or every  
        time the all the states are updated
    - list of state (Optional):
        - Only if these states are updated, then the function will be executed

```js
import React,{useState, useEffect, useContext, useReducer} from 'react';

useEffect(()=>{console.log(salary);}, [salary]);
```












</b>


# You can read the rest for more details, But so far is enough.


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





# 5) Creating Context using Hooks:


<b>

`contexts/AuthContext.js`
```js
import {createContext, useState} from 'react';
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    
    const [isAuthenticatedState, setIsAuthenticatedState] = useState({isAuthenticated:false});

    const toggleAuth=()=>{
        setIsAuthenticatedState({isAuthenticated:!isAuthenticatedState.isAuthenticated});
    }

    return ( 
    <AuthContext.Provider value={{...isAuthenticatedState, toggleAuth}}>
        {props.children}
    </AuthContext.Provider> );
}
 
export default AuthContextProvider;
```

</b>









# 6) Creating a Reducer:

<b>

`reducers/productReducer.js`

```js
const productReducer = (state, action) => {
    switch (action.type){
        case "ADD_PRODUCT": return [...state, {titile:action.title, id: uuid()}];
        case "DELETE_PRODUCT": return state.filter(
            product =>{product.id !== action.id});
        case "EDIT_PRODUCT": return state; //We Will not discuss this here
        default: return state;
        }
}
export {productReducer};
```
</b>


# 7) Using Reducer in Context:

<b>

`contexts/ProductContext.js`
```js
import {createContext, useState, useReducer} from 'react';
import {productReducer} from "the place of the reducer";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    
    const [products, dispatch] = useReducer(productReducer, [
     {id:1, name:" 1"}, 
     {id:2, name:"Product 2"}, 
    ]);

    return ( 
    <ProductContext.Provider value={products, dispatch}>
        {props.children}
    </ProductContext.Provider> );
}
 
export default ProductContextProvider;
```

</b>







# 8) Using Dipatch in Component:

<b>

`components/AddProductForm.js`

```js
import React,{useState} from 'react';
import ProductContext from "contexts/ProductContext.js";

const AddProductForm = ({addProduct}) => {
    
    const [title,setTitle] = useState("");
    
    const submitForm=(e)=>{
        e.preventDefault();
        dispatch({type:"ADD_PRODUCT", {title:title}});
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



# 9) Using localStorage:

<b>

```js
localStorage.setItem("name", "Omar");
localStorage.getItem("name"); //"Omar"

localStorage.setItem("myBook", JSON.stringify({"id":1, "name":"Hey"}));
JSON.parse(localStorage.getItem("myBook"))
```

</b>





<b>

`contexts/ProductContext.js`
```js
import {createContext, useState, useReducer, useEffect} from 'react';
import {productReducer} from "the place of the reducer";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    
    const [products, dispatch] = useReducer(productReducer, [
     {id:1, name:" 1"}, 
     {id:2, name:"Product 2"}, 
    ], //The third Parameter is the default value
    ()=> {
        const localData = localStorage.getItem("products");
        return localData ? JSON.parse(localData) : [];
    }
    );

    useEffect(
        ()=>{
            localStorage.setItem("products", JSON.stringify(products));
        }
        ,[products]);

    return ( 
    <ProductContext.Provider value={products, dispatch}>
        {props.children}
    </ProductContext.Provider> );
}
 
export default ProductContextProvider;
```

</b>


