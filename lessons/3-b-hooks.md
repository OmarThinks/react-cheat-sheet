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









