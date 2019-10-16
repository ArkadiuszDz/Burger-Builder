import React from 'react';
import logo from '../../assets/images/burger-logo.png';
import './Logo.css';

const Logo = props => {
  return (
    <div className='logo'>
      <img src={logo} alt="burger logo"/>
    </div>
  )
}

export default Logo;