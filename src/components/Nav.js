import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'


class Nav extends React.Component{
  constructor() {
    super()
    this.width = 768 //pxs
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

    const links = ['JavaScript', 'React', 'Node', 'JQuery', 'API'];
    const patho = window.location.pathname.split("/")[2]
    console.log(patho);

    return (
      <nav className='main__nav nav'>
        {window.innerWidth <= this.width && <button type="text" className="nav__opener" onClick={() => this.hide()}>{this.state.show ? "‹" : "›"}</button>}
        {/*<span className="patho">{patho}</span>*/}
        <CSSTransitionGroup  className={`nav__fixed col ${this.state.switcher}`} component="ul"
          transitionName="slide"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnter={false}
          transitionLeave={false}>
          <li className="l1 page-name">
            <span className="icon-root"></span><Link to="/">axel fuhrmann</Link>
          </li>
          <li className="l2">
            <span className="icon-folder"></span><span>projects</span>
          </li>
          {links.map(link => (
            <li className="l5 lang" onClick={() => this.hide()} key={link}>
              <NavLink className="yellow" activeClassName='nav__active-js' to={`/p/${link}`}>{link.toLowerCase()}</NavLink>
            </li>
          ))}
          <li className="l5">
            <NavLink className="yellow" activeClassName='nav__active-sass' to="/more">more stuff</NavLink>
          </li>
          <li className="l2">
            <span className="icon-folder"></span><span>contact me</span>
          </li>
          <li className="l4">
            <span className="icon-github"></span><a className="contact" target="_blank" rel='noreferrer noopener' href="https://github.com/afuh">github</a>
          </li>
          <li className="l4">
            <span className="icon-codepen"></span><a className="contact" target="_blank" rel='noreferrer noopener' href="https://codepen.io/mage20">codepen</a>
          </li>
          <li className="l4">
            <span className="icon-mail"></span><a className="contact" href="mailto:axelfuh@gmail.com">email</a>
          </li>
        </CSSTransitionGroup>
      </nav>
    )
  }
}


export default Nav;
