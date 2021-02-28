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
