import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems';
import DrawerToggle from './DrawerToggle';
import './Toolbar.css';

const Toolbar = props => {
  return (
    <header className='toolbar'>
      <DrawerToggle clicked={props.drawerToggleClicked}/>
      <Logo height='80%'/>
      <nav className='desktop-only'>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default Toolbar;