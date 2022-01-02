import React from 'react';
import Menu from '../Menu/Menu';
// import CartBtn from '../cartBtn/CartBtn';
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
            type={menu.type}
            subType={menu.subType}
            name={menu.name}
            number={menu.number}
          />
        );
      })}
    </div>
  );
}

export default MenuList;
