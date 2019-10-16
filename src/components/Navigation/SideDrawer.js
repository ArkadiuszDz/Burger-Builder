import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems';
import './SideDrawer.css';


const SideDrawer = props => {
  
  return (
    <div className='side-drawer'>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
}

export default SideDrawer;