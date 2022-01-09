import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from 'react-router';
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
  const navigate = useNavigate();
  function goToDetail(id) {
    navigate(`/products/${id}`);
  }

  return (
    <div className="menuContainer">
      <div className="imgBox">
        <img
          src={thumbnail_url}
          alt="vegetable"
          onClick={() => goToDetail(id)}
        />

        <div className="cartBtn">
          <BsCart2 className="cartBtn" />
        </div>
        <div className="cartBtn" />
      </div>
      <div className="menuInfo">
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default Menu;
