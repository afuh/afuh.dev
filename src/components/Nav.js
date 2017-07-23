import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

import { siteName, icon } from '../helpers/api';

const Lang = (props) => {
  const links = ['javascript', 'react', 'node', 'jquery', 'API', 'contact'];
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
              to={link !== "contact" && `/p/${link}`}>{link.toLowerCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    )
}

Lang.propTypes = {
  hide: PropTypes.func.isRequired
}

class Nav extends React.Component{
  constructor() {
    super()
    this.width = 620 //768 / 480
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
        <CSSTransitionGroup  className="nav__fixed" component="div"
          transitionName="slide"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnter={false}
          transitionLeave={false}>

          {window.innerWidth <= this.width &&
            <div className="nav__opener" onClick={() => this.hide()}>
              <img src={this.state.show ? icon('left.svg') : icon('right.svg')} />
            </div>
          }

          <div className="nav__fixed-header"><Link className="n" to="/">{siteName}</Link></div>

          {window.innerWidth >= this.width &&
            <div className={`nav__fixed-conteiner`}>
            <Lang />
          </div>}

        </CSSTransitionGroup>

        {window.innerWidth <= this.width &&
          <div className={`nav__fixed-conteiner ${this.state.switcher}`}>
          <Lang hide={() => this.hide()}/>
        </div>}
      </nav>
    )
  }
}


export default Nav;
