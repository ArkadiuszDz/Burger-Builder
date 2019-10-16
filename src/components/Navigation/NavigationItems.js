import React from 'react';
import NavigationItem from './NavigationItem';
import './NavigationItems.css';

const NavigationItems = props => {
  return (
    <ul className="navigation-items">
      <NavigationItem link="/" active>Burger Builder</NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
}

export default NavigationItems;