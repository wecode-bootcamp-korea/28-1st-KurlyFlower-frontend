import React, { useState } from 'react';
import MenuList from '../MenuList/MenuList';
import ProductList from '../../ProductList';
import './SortMenu.scss';

function SortMenu(productList) {
  return (
    <div className="soltMenu">
      <ul>
        <li>추천순</li>
        <li>판매량순</li>
        <li>낮은가격순</li>
        <li>높은가격순</li>
      </ul>
    </div>
  );
}

export default SortMenu;
