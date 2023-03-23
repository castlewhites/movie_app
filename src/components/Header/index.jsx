import React from 'react';
import './Header.scss';
import Logo from '../Logo';
import Search from '../Search';

function Header() {
  const menuOps = ['HOME', 'Popular', 'Series', 'Profile'];
  return (
    <nav className="header">
      <Logo />
      <ul className="header-menu">
        {
          menuOps.map((op) => (
            <li key={op}>
              {' '}
              {op}
              {' '}
            </li>
          ))
        }
      </ul>
      <Search />

    </nav>
  );
}

export default Header;
