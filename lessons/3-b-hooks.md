# 3-b) Hooks:


# 1) useState Hook:


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
        <button onClick={addProduct}>Add a Product</button>
    </div> );
}
 
export default ProductsList;
```








