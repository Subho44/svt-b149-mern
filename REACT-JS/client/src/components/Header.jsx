import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {

  return <>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/service">Service</Link>
    </li>
  </ul>

  </>
}

export default Header