import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

const Lang = (props) => {
  const links = ['javascript', 'react', 'node', 'jquery', 'API', 'more'];
  return (
    <div>
      <div className="list-header">Tags</div>
      <ul className="nav__lang-list">
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
    </div>
  )
}

const Contact = () => {
  const icon = file => require(`../images/icons/${file}.png`)
  const links = [
    { name: "github", url: "https://github.com/afuh", icon: icon('gh')},
    { name: "codepen", url: "https://codepen.io/mage20", icon: icon('cp')},
    { name: "email", url: "mailto:axelfuh@gmail.com", icon: icon('mail')}
  ]
  return (
    <div>
      <div className="list-header">contact</div>
      <ul className="nav__contact-list">
        {links.map(link => (
          <li key={link.name}>
            <a
              className='contact'
              target="_blank"
              rel='noreferrer noopener'
              href={link.url}>
              <img className={`icon icon-${link.name}`} src={link.icon}/>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

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
        {window.innerWidth <= this.width && <button type="text" className="nav__opener" onClick={() => this.hide()}>{this.state.show ? "‹" : "›"}</button>}

        <CSSTransitionGroup  className={`nav__fixed col ${this.state.switcher}`} component="div"
          transitionName="slide"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnter={false}
          transitionLeave={false}>

          <div className="nav__fixed-header"><Link className="n" to="/">axel fuhrmann</Link></div>

          <div className="nav__list-warper">
            <Lang hide={() => this.hide()}/>
            <Contact />
          </div>

        </CSSTransitionGroup>
      </nav>
    )
  }
}


export default Nav;
