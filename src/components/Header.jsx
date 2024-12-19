import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1>Michael Fleming</h1>
      <nav>
        <ul className='nav-links'>
          <li>
            <NavLink to='/' activeClassName='active-link'>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to='/portfolio' activeClassName='active-link'>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName='active-link'>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to='/resume' activeClassName='active-link'>
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
