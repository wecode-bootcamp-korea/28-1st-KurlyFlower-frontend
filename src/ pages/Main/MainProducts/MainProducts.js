import React, { useRef, useState } from 'react';
import './MainProducts.scss';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useEffect } from 'react/cjs/react.development';
import { BsCart2 } from 'react-icons/bs';
function Products({ products }) {
  const itemListRef = useRef();
  const [items, setItems] = useState(0);
  const ITEM_WIDTH = 249;
  const PADDING = 18;
  const SLIDE_WIDTH = 4 * (ITEM_WIDTH + PADDING);

  useEffect(() => {
    if (items < 5) {
      itemListRef.current.style.transform = `translateX(-${
        items * SLIDE_WIDTH
      }px)`;
    } else {
      itemListRef.current.style.transform = `translateX(-${
        items * SLIDE_WIDTH - 3 * (ITEM_WIDTH + PADDING)
      }px)`;
    }
  }, [items]);

  function onRightClick() {
    setItems(items => items + 1);
  }

  function onLeftClick() {
    if (items > 0) {
      setItems(items => items - 1);
    }
  }

  // function clickCart() {

  // }

  return (
    <div className="mainProducts">
      <h1 className="title">{products.title}</h1>
      <h3 className="subtitle">{products.subtitle}</h3>
      <div className="wrap">
        <div className="container">
          <div className="list" ref={itemListRef}>
            {products.products.map((product, idx) => (
              <span key={idx} className="item">
                <img src={product.img} alt="" />
                <p className="name">{product.name}</p>
                <p className="price">{product.price}</p>
                <div className="cartContainer">
                  <BsCart2 className="cart" />
                </div>
              </span>
            ))}
            <span className="more">
              <MdKeyboardArrowRight className="moreButton" />
              <p className="moreText">전체보기</p>
            </span>
          </div>
        </div>
        <div className="buttons">
          <button>
            {items > 0 ? (
              <MdKeyboardArrowLeft className="prev" onClick={onLeftClick} />
            ) : (
              ''
            )}
          </button>
          <button />
          {items < 5 ? (
            <MdKeyboardArrowRight className="next" onClick={onRightClick} />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
