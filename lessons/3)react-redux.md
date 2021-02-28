# 3) React-Redux:


## 1) `/reducers` directory:

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




## 2) connect the reducer with `index.js`:




<b>

`src/index.js`

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from "redux";
import {Provider} from "react-redux";
import todosReducer from "./reducers/todos.js"

const store = createStore(todosReducer);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

</b>


















