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
      todos:[...state.todos, action.value],
      posts:[...state.posts]
    }
  }
  if (action.type == "ADD_POST") {
    return {
      todos:[...state.todos],
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

/*
store.subscribe(
  ()=>{
    console.log("State Updated");
    //console.log(store.getState());
  }
)
*/
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
