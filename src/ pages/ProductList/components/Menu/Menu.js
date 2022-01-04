import React from 'react';
import CartBtn from '../cartBtn/CartBtn';
import './Menu.scss';

function Menu({
  id,
  catecory_id,
  subcategory_id,
  name,
  description,
  price,
  thumbnail_url,
}) {
  return (
    <div className="menuContainer">
      <div className="imgBox">
        <img src={thumbnail_url} alt="vegetable" />

        <div className="cartBtn">
          <button>버튼</button>
        </div>
      </div>

      <div className="menuInfo">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Menu;
