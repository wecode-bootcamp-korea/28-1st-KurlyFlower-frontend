import React from 'react';
import CartBtn from '../cartBtn/CartBtn';
import SortMenu from '../SortMenu/SortMenu';
import './Menu.scss';

function Menu({ id, name, price }) {
  return (
    <div className="menuContainer">
      <div className="imgBox">
        <img
          src="https://images.unsplash.com/photo-1540420828642-fca2c5c18abe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt="vegetable"
        />
        {/* <CartBtn /> */}
      </div>

      <div className="menuInfo">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Menu;
