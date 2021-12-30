import React from 'react';
import Menu from '../Menu/Menu';
import './MenuList.scss';

function MenuList({ productList }) {
  //props >> productList(구조분해할당)

  return (
    <div className="menuList">
      {productList.map(menu => {
        return (
          <Menu
            key={menu.id}
            id={menu.id} //id값이 고유 값이니까 반드시 key값 적어주기
            name={menu.name}
            price={menu.price}
          />
        );
      })}
    </div>
  );
}

export default MenuList;
