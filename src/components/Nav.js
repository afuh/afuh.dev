import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

import { siteName, icon } from '../helpers/api';

const Lang = (props) => {
  const links = ['javascript', 'react', 'node', 'jquery', 'API'];
  return (
      <ul className="nav__lang">
        {links.map(link => (
          <li
            className="lang"
            onClick={props.hide}
            key={link}>
            <NavLink
              className="language"
              activeClassName='nav__active-js'
              to={link === "more" ? `/more` : `/p/${link}`}>{link.toLowerCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    )
}

Lang.propTypes = {
  hide: PropTypes.func.isRequired
}

// const Contact = () => {
//   const links = [
//     { name: "github", url: "https://github.com/afuh", icon: icon('gh.png')},
//     { name: "codepen", url: "https://codepen.io/mage20", icon: icon('cp.png')},
//     { name: "email", url: "mailto:axelfuh@gmail.com", icon: icon('mail.png')}
//   ]
//   return (
//     <div>
//       <div className="list-header">contact</div>
//       <ul className="nav__contact-list">
//         {links.map(link => (
//           <li key={link.name}>
//             <a
//               className='contact'
//               target="_blank"
//               rel='noreferrer noopener'
//               href={link.url}>
//               <img className={`icon icon-${link.name}`} src={link.icon}/>
//               {link.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

class Nav extends React.Component{
  constructor() {
    super()
    this.width = 700 //768 / 480
    this.state = {
      show: window.innerWidth <= this.width ? false : true,
      switcher: window.innerWidth <= this.width ? 'close' : 'open',
    }
  }
  handleResize(){
    if (window.innerWidth <= this.width) {
      this.setState({ switcher: "close", show: false })
    } else {
      this.setState({ switcher: "open", show: true })
    }
  }
  hide(){
    if (this.state.show && window.innerWidth <= this.width) {
      this.setState({ switcher: "close", show: !this.state.show })
    } else {
      this.setState({ switcher: "open", show: !this.state.show })
    }
  }
  render(){
    window.onresize = () => this.handleResize();

    return (
      <nav className='main__nav nav'>
        {/*window.innerWidth <= this.width &&
          <div className="nav__opener" onClick={() => this.hide()}>
            <img src={this.state.show ? icon('left.svg') : icon('right.svg')} />
          </div>
        */}

        <CSSTransitionGroup  className={`nav__fixed ${this.state.switcher}`} component="div"
          transitionName="slide"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnter={false}
          transitionLeave={false}>

          <div className="nav__fixed-header"><Link className="n" to="/">{siteName}</Link></div>

          <div className="nav__fixed-conteiner" style={{overflowY: "scroll"}}>
            <Lang hide={() => this.hide()}/>
          </div>

        </CSSTransitionGroup>
      </nav>
    )
  }
}


export default Nav;
