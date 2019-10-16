import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems';
import './Toolbar.css';

const Toolbar = props => {
  return (
    <header className='toolbar'>
      <div>MENU</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default Toolbar;