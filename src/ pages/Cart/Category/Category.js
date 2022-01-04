import React, { useState } from 'react';
import './Category.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { BsFillSunFill } from 'react-icons/bs';
import Item from '../Item/Item';

function Category({ packaging, cartList, items }) {
  const [selectedItems, setSelectedItems] = useState([]);

  function selectItems(item) {
    setSelectedItems([...selectedItems, item]);
  }

  return (
    <div className="categoryContainer">
      <div className="category">
        <span className="title">
          <BsFillSunFill />
          <h2>{packaging} 상품</h2>
        </span>
        <button>
          <IoIosArrowDown className="spread" />
        </button>
      </div>
      <ul className="list">
        {items.map((item, idx) => (
          <Item
            key={idx}
            item={item}
            selectedItems={selectedItems}
            selectItems={selectItems}
          />
        ))}
      </ul>
    </div>
  );
}

export default Category;
