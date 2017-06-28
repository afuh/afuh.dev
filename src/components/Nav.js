import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const links = ['JavaScript', 'React', 'JQuery', 'Node', 'API', 'Sass'];
  return (
    <ul className='nav'>
      {links.map(link => (
        <NavLink key={link} activeClassName='active' to={`/${link}`}> {link} </NavLink>
      ))}
    </ul>
  )
}

export default Nav;
