import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';
import './Layout.css';

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false
    }
    this.sideDrawerClosedHandler = this.sideDrawerClosedHandler.bind(this);
    this.sideDrawerToggleHandler = this.sideDrawerToggleHandler.bind(this);
  }

  sideDrawerClosedHandler() {
    this.setState({
      showSideDrawer: false
    });
  }

  sideDrawerToggleHandler() {
    this.setState(prevState => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    });
  }

  render() {
    return (
      <>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
        <main className="content">
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layout;