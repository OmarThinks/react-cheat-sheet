# 2-a) Redux:








## Full Example:


<b>


```js
import {Component} from 'react';
import {createStore} from "redux";
// We import createStore from 'redux'
// Because this is redux itself

const initState = {
  todos:[],
  posts:[]
}
// This is the initialiazation state of redux store

function myReducer(state = initState,action) {
  if (action.type == "ADD_TODO") {
    return {
      ...state,
      todos:[...state.todos, action.value]
    }
  }
  if (action.type == "ADD_POST") {
    return {
      ...state,
      posts:[...state.posts, action.value]
    }
  }
  if (action.type == "ADD_POST") {}
}
// reduccer will be explained

const store = createStore(myReducer);
// The store, this is how we will use redux in the future

const todo1 = {type: "ADD_TODO" , value: "Get Up"};
const todo2 = {type: "ADD_TODO" , value: "Wash your face"};
const todo3 = {type: "ADD_TODO" , value: "Study Hard"};
const todo4 = {type: "ADD_TODO" , value: "Go to sleep"};
const todo5 = {type: "ADD_TODO" , value: "Get a job"};

const post1 = {type: "ADD_POST" , value: "I studied hard"};
// Here we prepared the actions to be dispatched

store.dispatch(todo1);
store.dispatch(todo2);
store.dispatch(todo3);
store.dispatch(todo4);
store.dispatch(todo5);

store.dispatch(post1);
// Here we dipatch the actions

store.subscribe(
  ()=>{
    console.log("State Updated");
    // This code will be executed every time the store is dispatched
  }
)

console.log(store.getState())

class App extends Component {
  render = () => {
    return (
      <div className="App">
        Hi!
      </div>
    );
  }
}

export default App;
```

</b>













## 1) Redux Intro:

## What:
- a centerlized way to store data of components
- handle the states of the components  
- you do not have to kepp passing the information from a component to sub components
- Redux will be a central data storage


## How:

1. Create a redux central storage
2. Link the component to the redux
3. Subscribe changes of the components to the redux
4. Decide that you want to take action
5. Dispatch action (With the payload)
6. Pass action to the reducer
7. Reducer updates the central states














## ) Installations:

<b>

```bash
npm install --save redux
npm install --save react-redux
```

</b>





## 2) Creating a store:

<b>

```Js
import {Component} from 'react';
import {createStore} from "redux";
// We import createStore from 'redux'
// Because this is redux itself

const initState = {
  todos:[],
  posts:[]
}
// This is the initialiazation state of redux store

function myReducer(state = initState,action) {
  console.log(state);
  console.log(action);
}
// reduccer will be explained

const store = createStore(myReducer);
// The store, this is how we will use redux in the future

class App extends Component {
  render = () => {
    return (
      <div className="App">
        Hi!
      </div>
    );
  }
}

export default App;
```

</b>










## 3) Actions:

<b>

```Js
//Continuing the previous example

const store = createStore(myReducer);
// The store, this is how we will use redux in the future

const todo1 = {type: "ADD_TODO" , value: "Get Up"};
const todo2 = {type: "ADD_TODO" , value: "Wash your face"};
const todo3 = {type: "ADD_TODO" , value: "Study Hard"};
const todo4 = {type: "ADD_TODO" , value: "Go to sleep"};
const todo5 = {type: "ADD_TODO" , value: "Get a job"};

const post1 = {type: "ADD_POST" , value: "I studied hard"};
// Here we prepared the actions to be dispatched


store.dispatch(todo1);
store.dispatch(todo2);
store.dispatch(todo3);
store.dispatch(todo4);
store.dispatch(todo5);

store.dispatch(post1);
// Here we dipatch the actions
```

</b>












# 4) Reducers:


<b>

```Js
function myReducer(state = initState,action) {
  if (action.type == "ADD_TODO") {
    return {
      ...state,
      todos:[...state.todos, action.value]
    }
  }
  if (action.type == "ADD_POST") {
    return {
      ...state,
      posts:[...state.posts, action.value]
    }
  }
  if (action.type == "ADD_POST") {}
}
/* Dispatch actions */

console.log(store.getState())
// This returns the value of the state of the store

export default App;
```

The return value of the reducer will be the new value of the state of the 
store.

</b>

This will print:

```js
{
posts: [ "I studied hard" ],
todos: [ "Get Up", "Wash your face", "Study Hard", … ]
​}
```





















# 5) Subscribe:


<b>

```Js
store.subscribe(
  ()=>{
    console.log("State Updated");
    // This code will be executed every time the store is dispatched
  }
)
```

`subscribe` takes a function.  
This function will be executed every time the store is dipatched.

</b>


















