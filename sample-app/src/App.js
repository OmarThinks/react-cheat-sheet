import {Component} from 'react';
import {createStore} from "redux";

const initState = {
  todos:[],
  posts:[]
}

function myReducer(state = initState,action) {
}

const store = createStore(myReducer);

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
