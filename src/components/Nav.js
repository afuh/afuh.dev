import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

import { siteName } from '../helpers/api';
import NavIcon from '../helpers/NavIcon';

const Lang = ({ hide, color }) => {
  const links = ['javascript', 'react', 'node', 'jquery', 'API'];
  const fontColor = {white: {color: "#fff"}, dark: {color: "#4f4f4f" }}
  const font =  color ? fontColor.white : fontColor.dark
  return (
      <ul className="nav__lang">
        {links.map(link => (
          <li
            className="lang"
            onClick={hide}
            key={link}>
            <NavLink
              style={font}
              className="lang-link"
              activeClassName='lang-link-active'
              to={link !== "contact" && `/${link}`}>{link.toLowerCase()}
            </NavLink>
          </li>
        ))}
        <li className="lang" onClick={hide}>
          <Link style={{fontWeight: 600, color: font.color }} className="lang-link" to={`/#contact`}>contact</Link>
        </li>
      </ul>
    )
}

Lang.propTypes = {
  hide: PropTypes.func,
  color: PropTypes.bool
}

class Nav extends Component{
  constructor() {
    super()
    this.width = 640 //768 / 480
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
      document.body.classList.remove("open-nav");
    } else {
      this.setState({ switcher: "open", show: !this.state.show })
      document.body.classList.add("open-nav");
    }
  }
  render(){
    window.onresize = () => this.handleResize();
    const darkColor = window.location.pathname.split("/").length === 3 ? true : false
    const headerStyle = darkColor ? {color: "#fff"} : {color: "#4f4f4f"}
    const bckStyle = {on: {background: "#4f4f4f"}, off: {background: "#fff" }}

    return (
      <nav style={darkColor ? bckStyle.on : bckStyle. off} className='main__nav nav'>
        <CSSTransitionGroup  className="nav__fixed" component="div"
          transitionName="slide"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnter={false}
          transitionLeave={false}>

          {/*Mobile navigation icon*/}
          {window.innerWidth <= this.width &&
            <div className="nav__opener" onClick={() => this.hide()}>
              <NavIcon
                switcher={this.state.switcher}
                color={darkColor ? "#fff" : "#000"}/>
            </div>
          }

          <div className="nav__fixed-header">
            <Link to="/" style={headerStyle}>{siteName}</Link>
          </div>

          {window.innerWidth >= this.width &&
            <div className={`nav__fixed-conteiner`}>
            <Lang color={darkColor}/>
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
