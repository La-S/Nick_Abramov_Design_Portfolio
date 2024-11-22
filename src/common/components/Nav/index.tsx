import React from 'react';
import { NavLink } from 'react-router-dom';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Photo Blog', path: '/photo-blog' },
  { name: 'FAQ', path: '/questions' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Nav = (): JSX.Element => {
  return (
    <ul
      className="Nav"
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
      }}
    >
      {LINKS.map(({ name, path }) => (
        <li key={name}>
          <NavLink className={({ isActive }) => (isActive ? 'Active' : '')} to={path}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
