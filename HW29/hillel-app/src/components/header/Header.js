import React from 'react';
import logo from '../../logo.svg';

import './Header.css';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <h1 className='header-title'>ReactJS</h1> 
    </header>
  );
};

export default Header;