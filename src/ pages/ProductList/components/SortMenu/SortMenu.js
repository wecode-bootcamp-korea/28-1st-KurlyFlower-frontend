import React from 'react';
import './SortMenu.scss';

function SortMenu(priceDown) {
  return (
    <div className="soltMenu">
      <ul>
        <li>추천순</li>
        <li>판매량순</li>
        <li onClick={priceDown}>낮은가격순</li>
        <li>높은가격순</li>
      </ul>
    </div>
  );
}

export default SortMenu;
