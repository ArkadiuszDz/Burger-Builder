import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import './Burger.css';

const Burger = props => {

  let ingredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((e, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey}/>
    });
  }).reduce((arr, el) => {
      return arr.concat(el);
    }, []);
    if (ingredients.length === 0) {
      ingredients = <p>Please start adding ingredients.</p>
    };
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top"/>
        {ingredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default Burger;