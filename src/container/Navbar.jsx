import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='info--nav'>
      <ul>
        <li>
          <button>
            <Link to="/">
              <i className='fi fi-rr-arrow-left'></i> Back
            </Link>
          </button>
        </li>
        <li>
          <p className='logo-title'>MoviePedia</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar