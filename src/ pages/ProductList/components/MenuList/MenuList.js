import React from 'react';
import Menu from '../Menu/Menu';
// import CartBtn from '../cartBtn/CartBtn';
import './MenuList.scss';

function MenuList({ productList }) {
  return (
    <div className="menuList">
      {productList.map(menu => {
        return (
          <Menu
            key={menu.id} //id값이 고유 값이니까 반드시 key값 적어주기
            id={menu.id}
            category_id={menu.category_id}
            subcategory_id={menu.subcategory_id}
            name={menu.name}
            description={menu.description}
            price={menu.price}
            thumbnail_url={menu.thumbnail_url}
          />
        );
      })}
    </div>
  );
}

export default MenuList;
