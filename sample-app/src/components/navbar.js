import {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'

class Navbar extends Component {
  render = () => {
    return(
    <div>
      <Link to="/">Home</Link>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
  }
}

export default Navbar
