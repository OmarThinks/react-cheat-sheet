# 3) React-Redux:


## 1) How to connect:

It is a good practice to create a folder called `reducers`.  
This folder will contain files.  
Each file has a reducer.  
This may seem useless in small applications.  
But, as your application gets better, you will really need this.


<b>

`src/reducers/todo.js`

```JavaScript
const initState = {
	todos:[]
}

const todosReducer = (state = initState, action) => {
	return state;
}

export default todosReducer
```





</b>







