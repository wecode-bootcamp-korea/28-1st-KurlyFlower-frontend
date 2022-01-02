import React, { useEffect, useRef, useState } from 'react';
import './Products.scss';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsCart2 } from 'react-icons/bs';

function Products({ products, productsLength, addCart, cartList, showMore }) {
  const itemRef = useRef();
  const itemListRef = useRef();
  const [page, setPage] = useState(0);
  const ITEM_WIDTH = 267;
  const SLIDE_WIDTH = 4 * ITEM_WIDTH;
  const LIST_WIDTH = ITEM_WIDTH * productsLength;
  const SLIDE_COUNT = Math.floor(LIST_WIDTH / SLIDE_WIDTH);
  const LAST_SLIDE_WIDTH = LIST_WIDTH - SLIDE_COUNT * SLIDE_WIDTH;

  useEffect(() => {
    if (page < SLIDE_COUNT) {
      itemListRef.current.style.transform = `translateX(-${
        page * SLIDE_WIDTH
      }px)`;
    } else if (page === SLIDE_COUNT) {
      itemListRef.current.style.transform = `translateX(-${
        page * LAST_SLIDE_WIDTH
      }px)`;
    } else {
      if (showMore)
        itemListRef.current.style.transform = `translateX(-${
          page * 1.5 * ITEM_WIDTH
        }px)`;
    }
  }, [page]);

  function onRightClick() {
    setPage(page => page + 1);
  }

  function onLeftClick() {
    if (page > 0) {
      setPage(page => page - 1);
    }
  }

  function onClickCart(product) {
    addCart(product);
  }

  return (
    <div className="products">
      <div className="wrap">
        <div className="container">
          <div className="list" ref={itemListRef}>
            {products.map((product, idx) => (
              <span key={idx} className="item" ref={itemRef}>
                <div className="imgContainer">
                  <img src={product.img} alt="" />
                </div>
                <p className="name">{product.name}</p>
                <p className="price">{product.price}</p>
                <div
                  className={`cartContainer ${
                    cartList.includes(product.id) ? 'clickedContainer' : ''
                  }`}
                >
                  <BsCart2
                    className={`cart ${
                      cartList.includes(product.id) ? 'clickedCart' : ''
                    }`}
                    onClick={() => onClickCart(product)}
                  />
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
          <button className={page > 0 ? '' : 'hide'}>
            <MdKeyboardArrowLeft className="prev" onClick={onLeftClick} />
          </button>

          <button
            className={
              (!showMore && page === SLIDE_COUNT) || page > SLIDE_COUNT
                ? 'hide'
                : ''
            }
          >
            <MdKeyboardArrowRight className="next" onClick={onRightClick} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
