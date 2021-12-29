import React from 'react';
import './Menu.scss';

function Menu({ id, name, price }) {
  return (
    <div className="menuContainer">
      <img
        src="https://images.unsplash.com/photo-1527325752894-f1b38b396f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        alt="monster"
      />
      <div className="menuInfo">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Menu;
