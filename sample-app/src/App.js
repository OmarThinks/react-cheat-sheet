import {Component} from 'react';
import About from "./components/about"
import Contact from "./components/contact"
import Home from "./components/home"
import Navbar from "./components/navbar"


class App extends Component {

  render = () => {
    return (
        <div>
              <Navbar />
        </div>
    );
  }
}

export default App;
