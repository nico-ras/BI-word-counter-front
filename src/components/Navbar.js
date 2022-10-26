import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';

export const Navbar = () => {
  return (
    <nav className="navigation">
        <Link to='/' >Desafios BI</Link>  
        <button className="hamburger">
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className="navigation-menu">
          <ul>
            <li>
              <NavLink to='/' >Home</NavLink>  
            </li>
            <li>
            <NavLink to='/word-counter' >Word Counter App</NavLink>  
            </li>
            <li>
            <NavLink to='/schedulator' >Schedulator App</NavLink> 
            </li>
          </ul>
        </div>
      </nav>
  )
}


