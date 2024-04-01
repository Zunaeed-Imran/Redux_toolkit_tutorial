import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (

    <nav>
      <Link to='/'>Home</Link>
      <Link to='/book-view'>Show-Book</Link>
      <Link to='/add-book'>Add-Book</Link>
    </nav>
  )
}

export default Navbar;
