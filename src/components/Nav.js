import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const links = ['JavaScript', 'React', 'JQuery', 'Node', 'API'];
  return (
    <div className='nav'>
      <ul className='nav__fixed col'>
        <li className="l1 page-name"><span className="icon-root"></span>afuh.github.io</li>
        <li className="l2"><span className="icon-folder"></span>src</li>
        <li className="l3"><span className="icon-folder"></span>projects</li>
        {links.map(link => (
          <li className="l4" key={link}>
            <NavLink className="lang" activeClassName='nav__active-js' to={`/p/${link}`}><span className="icon-js"></span>{link}</NavLink>
          </li>
        ))}
        <li className="l4"><NavLink activeClassName='nav__active-sass' to="/p/Sass"><span className="icon-sass"></span>Sass</NavLink></li>
        <li className="l1"><span className="icon-folder"></span>contact me</li>
        <li className="l3"><span className="icon-github"></span><a className="contact" href="https://github.com/afuh">github</a></li>
        <li className="l3"><span className="icon-codepen"></span><a className="contact" href="https://codepen.io/mage20">codepen</a></li>
        <li className="l3"><span className="icon-book"></span><a className="contact" href="mailto:axelfuh@gmail.com">email</a></li>
      </ul>
    </div>
  )
}

// const Nav = (props) => {
//   const links = ['JavaScript', 'React', 'JQuery', 'Node', 'API', 'Sass'];
//   return (
//     <ul className='nav'>
//       {links.map(link => (
//         <li key={link}>
//           <a href={`/p/${link}`} onClick={props.onSelect.bind(null, link)}> {link} </a>
//         </li>
//       ))}
//     </ul>
//   )
// }

export default Nav;
