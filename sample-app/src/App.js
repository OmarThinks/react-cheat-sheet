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
