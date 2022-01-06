import React, { useState } from 'react';
import './Category.scss';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { BsFillSunFill, BsSnow } from 'react-icons/bs';
import { MdOutlineWaterDrop } from 'react-icons/md';
import CartItem from '../CartItem/CartItem';

function Category({
  packaging,
  deleteItems,
  selectedItems,
  selectItems,
  minusQuantity,
  plusQuantity,
  items,
}) {
  const [isOpened, setIsOpened] = useState(true);

  function toggleListOpen() {
    setIsOpened(!isOpened);
  }

  function categoryIcon(str) {
    switch (str) {
      case '냉장':
        return <MdOutlineWaterDrop className="categoryIcon" color="green" />;
      case '냉동':
        return <BsSnow className="categoryIcon" color="lightblue" />;
      case '상온':
        return <BsFillSunFill className="categoryIcon" color="orange" />;
    }
  }

  return (
    <div className="categoryContainer">
      <div className="category">
        <span className="categoryTitle">
          {categoryIcon(packaging)}
          <h2 className="categoryName">{packaging} 상품</h2>
        </span>
        <button>
          {isOpened ? (
            <IoIosArrowUp className="spread" onClick={toggleListOpen} />
          ) : (
            <IoIosArrowDown className="spread" onClick={toggleListOpen} />
          )}
        </button>
      </div>
      {isOpened && (
        <ul className="list">
          {items.map((item, idx) => (
            <CartItem
              className="item"
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
      )}
    </div>
  );
}

export default Category;
