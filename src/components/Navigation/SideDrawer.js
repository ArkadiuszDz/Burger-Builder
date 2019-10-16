import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems';
import Backdrop from '../UI/Backdrop';
import './SideDrawer.css';


const SideDrawer = props => {
  
  let attachedClasses = ['side-drawer', 'closed'];
  if (props.open) {
    attachedClasses = ['side-drawer', 'open'];
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <Logo height='11%'/>
        <nav style={{marginTop: '32px'}}>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
}

export default SideDrawer;