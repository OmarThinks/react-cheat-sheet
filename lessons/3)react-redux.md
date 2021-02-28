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
	todos:[
		{id:1,value:"get up"},
		{id:2,value:"study hard"},
		{id:3,value:"get a job"},
	]
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
    <App />
  document.getElementById('root')
);
```

</b>






## 3) provide the app with the store:


<b>

```JavaScript
ReactDOM.render(
    <Provider store={store}> <App /> </Provider>,
  document.getElementById('root')
);
```

</b>





## 4) Mapping state to props:

<b>

`index.js`
```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from "redux";
import {Provider} from "react-redux";
import todosReducer from "./reducers/todos.js"

const store = createStore(todosReducer);

ReactDOM.render(
    <Provider store={store}> <App /> </Provider>,
  document.getElementById('root')
);
```



`App.js`
```JavaScript
import {Component} from 'react';
import Home from "./components/home"

class App extends Component {
  render = () => {
    return (
      <div className="App">
        Hi!
        <Home />
      </div>
    );
  }
}

export default App;
```


`home.js`
```JavaScript
import {Component} from 'react';
import {connect} from "react-redux";

class Home extends Component {
  render = () => {
  	const todos = this.props.todos;
    const to_render = todos.map(todo => {
        return(
            <div className="todo" key={todo.id}>
                <p>ID is: {todo.id}</p>
                <p>Value is: {todo.value}</p>
                <hr/>
            </div>
        );}
    )
    console.log(to_render)
    return(
        <div className="todos_list">
            { to_render }
        </div>
    )  }
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	}
}

export default connect(mapStateToProps)(Home)
```

</b>



























## 5) Dispatch to props:







<b>

`todos.js`
```JavaScript
const initState = {
	todos:[
		{id:1,value:"get up"},
		{id:2,value:"study hard"},
		{id:3,value:"get a job"},
	]
}

const todosReducer = (state = initState, action) => {
	if (action.type === "DELETE_POST") {
		let newTodos = state.todos.filter((t) => {
			return(t.id != action.id)})
		console.log(newTodos);
		return{
			...state,
			todos: newTodos
		}
	}
	return state;
}

export default todosReducer
```






`home.js`
```JavaScript
import {Component} from 'react';
import {connect} from "react-redux";

class Home extends Component {
  handleDelete = (e) => {
  	console.log(e.target);
  	this.props.deletePost(e.target.id);
  }

  render = () => {
  	//console.log(this.props);
  	const todos = this.props.todos;
    const to_render = todos.map(todo => {
        return(
            <div className="todo" key={todo.id}>
                <p>ID is: {todo.id}</p>
                <p>Value is: {todo.value}</p>
                <button onClick={(e)=>{this.handleDelete(e)}}
                id={todo.id}> Delete Todo </button>
                <hr/>
            </div>
        );}
    )
    return(
        <div className="todos_list">
            { to_render }
        </div>
    )  }
}

const mapStateToProps = (state) => {
	return {todos: state.todos}
}

const mapDispatchToProps = (dipatchMethod) => {
	return {
		deletePost : (id) => { dipatchMethod({type: "DELETE_POST", 
			id: Number(id)})}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
```

</b>






















## 6) Action creators:


<b>









`actions/postActions.js`
```JavaScript
const deletePost = (id) => {
	return { type : "DELETE_POST" , id : id }
}

export { deletePost as deletePost}
```





`home.js`
```JavaScript
import {deletePost} from "../actions/postActions";

/*
Rest of the code
*/
const mapDispatchToProps = (dipatchMethod) => {
	return {
		deletePost : (id) => { dipatchMethod(deletePost(id))}
	}
}
```








</b>





















