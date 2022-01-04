import React from 'react';
import './Category.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { BsFillSunFill } from 'react-icons/bs';
import Item from '../Item/Item';

function Category({
  packaging,
  deleteItems,
  selectedItems,
  selectItems,
  minusQuantity,
  plusQuantity,
  items,
}) {
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
            deleteItems={deleteItems}
            minusQuantity={minusQuantity}
            plusQuantity={plusQuantity}
          />
        ))}
      </ul>
    </div>
  );
}

export default Category;
