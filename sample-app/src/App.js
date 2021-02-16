import {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from "./components/about"
import Contact from "./components/contact"
import Home from "./components/home"
import Navbar from "./components/navbar"

class App extends Component {
  render = () => {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
