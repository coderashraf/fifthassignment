import React from 'react'
import { Link } from 'react-router-dom'

const HeaderCompo = () => {
  return (
    <div className='header'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
    </div>
  )
}

export default HeaderCompo
