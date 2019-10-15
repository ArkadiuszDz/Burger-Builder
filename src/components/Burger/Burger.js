import React from 'react';
import BurgerIngredient from './BurgerIngredient';

const Burger = props => {
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top"/>
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default Burger;