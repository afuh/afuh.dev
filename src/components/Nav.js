import React from 'react';
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
  const links = ['JavaScript', 'React', 'Node', 'JQuery', 'API'];
  return (
    <nav className='main__nav nav'>
      <ul className='nav__fixed col'>
        <li className="l1 page-name"><span className="icon-root"></span><Link to="/">axel fuhrmann</Link></li>
        <li className="l2"><span className="icon-folder"></span>src</li>
        <li className="l3"><span className="icon-folder"></span>projects</li>
        {links.map(link => (
          <li className="l5" key={link}>
            <NavLink className="yellow" activeClassName='nav__active-js' to={`/p/${link}`}><span className="icon-js"></span>{link}</NavLink>
          </li>
        ))}
        <li className="l5"><NavLink className="yellow" activeClassName='nav__active-sass' to="/p/Sass"><span className="icon-sass"></span>Sass</NavLink></li>
        <li className="l2"><span className="icon-folder"></span>public</li>
        <li className="l4"><NavLink className="yellow" activeClassName="nav__active-book" to="/readme"><span className="icon-book"></span>readme.md</NavLink></li>
        <li className="l4"><span className="icon-github"></span><a className="contact" href="https://github.com/afuh">github</a></li>
        <li className="l4"><span className="icon-codepen"></span><a className="contact" href="https://codepen.io/mage20">codepen</a></li>
        <li className="l4"><span className="icon-mail"></span><a className="contact" href="mailto:axelfuh@gmail.com">email</a></li>
      </ul>
    </nav>
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
