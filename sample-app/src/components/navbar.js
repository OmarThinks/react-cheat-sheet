import {Component} from 'react';

class Navbar extends Component {
  render = () => {
    return(
    <div>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a> 
    </div>
  )
  }
}

export default Navbar
