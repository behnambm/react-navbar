import React from 'react'
import { FaTwitter } from 'react-icons/fa'

function Navbar() {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h2>BEHNAM</h2>
        </div>
        <div className='nav-links show-container'>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
        <ul className='social-icons'>
          <li>
            <a href='#'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
