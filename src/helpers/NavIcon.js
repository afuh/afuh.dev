import React from 'react';
import PropTypes from 'prop-types';

const NavIcon = ({switcher, color}) => {
  const span = {
    background: switcher === 'open' ? '#000' : color,
    height: "2px",
    width: '40px',
    borderRadius: '2px',
    transition: 'transform .3s',
    position: 'absolute',
    top: "50%",
    marginTop: '-1px'
  }
  const cont = {
    position: 'relative',
    height: "43px",
    width: "42px",
    transition: 'transform .4s',
  }

  const first = Object.assign({}, span, {
    transform: `${switcher === 'open' ? 'rotate(45deg) translateY(0)' : 'rotate(0) translateY(-14px)'}`
  });

  const second = Object.assign({}, span, {
    transform: `${switcher === 'open' ? 'scaleX(0)' : 'scaleX(1)'}`
  });

  const third = Object.assign({}, span, {
    transform: `${switcher === 'open' ? 'rotate(-45deg) translateY(0)' : 'rotate(0) translateY(14px)'}`
  });


  return (
    <div style={cont}>
      <span style={first}></span>
      <span style={second}></span>
      <span style={third}></span>
    </div>
  )
}

NavIcon.propTypes = {
  switcher: PropTypes.string.isRequired,
  color: PropTypes.string
}

NavIcon.defaultProps = {
  color: "#fff",
  switcher: 'close'
}

export default NavIcon

// switcher === 'open' ? '#000' : color
