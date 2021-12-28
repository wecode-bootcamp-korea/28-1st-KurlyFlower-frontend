import React, { useRef, useState } from 'react';
import './MainProducts.scss';
import { MdKeyboardArrowLeft, MdSettingsInputAntenna } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useEffect } from 'react/cjs/react.development';

function Products() {
  const itemListRef = useRef();
  const [items, setItems] = useState(0);
  const ITEM_WIDTH = 249;
  const PADDING = 18;
  const slideWidth = 4 * (ITEM_WIDTH + PADDING);

  const productsArray = [
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
    '/images/main/carrot.jpg',
  ];

  useEffect(() => {
    if (items < 5) {
      itemListRef.current.style.transform = `translateX(-${
        items * slideWidth
      }px)`;
    } else {
      itemListRef.current.style.transform = `translateX(-${
        items * slideWidth - 3 * (ITEM_WIDTH + PADDING)
      }px)`;
    }
    console.log(items);
  }, [items]);

  function onRightClick() {
    setItems(items => items + 1);
  }

  function onLeftClick() {
    if (items > 0) {
      setItems(items => items - 1);
    }
  }

  return (
    <div className="main-products">
      <h1 className="title">인기 신상품 랭킹</h1>
      <h3 className="subtitle">가장 먼저 만나보는 인기 신상품</h3>
      <div className="wrap">
        <div className="container">
          <div className="list" ref={itemListRef}>
            {productsArray.map(product => (
              <span className="item">
                <img src={product} alt="" />
                <p className="name">[셰프키친] 신선한 당근 2kg</p>
                <p className="price">9,900원</p>
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
              <MdKeyboardArrowLeft className="left" onClick={onLeftClick} />
            ) : (
              ''
            )}
          </button>
          <button />
          {items < 5 ? (
            <MdKeyboardArrowRight className="right" onClick={onRightClick} />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
