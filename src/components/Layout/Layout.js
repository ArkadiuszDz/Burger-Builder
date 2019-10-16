import React from 'react';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Toolbar />
      <SideDrawer />
      <main className="content">
        {children}
      </main>
    </>
  )
}

export default Layout;