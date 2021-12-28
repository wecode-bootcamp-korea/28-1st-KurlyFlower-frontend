import React from 'react';
import './Products.scss';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

function Products() {
  return (
    <div className="main-products">
      <h1 className="title">인기 신상품 랭킹</h1>
      <h3 className="subtitle">가장 먼저 만나보는 인기 신상품</h3>
      <div className="wrap">
        <div className="container">
          <div className="list">
            <span className="item">
              <img src="/images/main/carrot.jpg" alt="" />
              <p className="name">[셰프키친] 신선한 당근 2kg</p>
              <p className="price">9,120원</p>
            </span>
            <span className="item">
              <img src="/images/main/carrot.jpg" alt="" />
              <p className="name">[셰프키친] 신선한 당근 2kg</p>
              <p className="price">10,200원</p>
            </span>
            <span className="item">
              <img src="/images/main/carrot.jpg" alt="" />
              <p className="name">[셰프키친] 신선한 당근 2kg</p>
              <p className="price">9,900원</p>
            </span>
            <span className="item">
              <img src="/images/main/carrot.jpg" alt="" />
              <p className="name">[셰프키친] 신선한 당근 2kg</p>
              <p className="price">9,900원</p>
            </span>
            <span className="item">
              <img src="/images/main/carrot.jpg" alt="" />
              <p className="name">[셰프키친] 신선한 당근 2kg</p>
              <p className="price">9,900원</p>
            </span>
            <span className="item">
              <img src="/images/main/carrot.jpg" alt="" />
              <p className="name">[셰프키친] 신선한 당근 2kg</p>
              <p className="price">9,900원</p>
            </span>
            <span className="item">
              <img src="/images/main/carrot.jpg" alt="" />
              <p className="name">[셰프키친] 신선한 당근 2kg</p>
              <p className="price">9,900원</p>
            </span>
          </div>
        </div>
        <div className="buttons">
          <button>
            <MdKeyboardArrowLeft className="left" />
          </button>
          <button />
          <MdKeyboardArrowRight className="right" />
        </div>
      </div>
    </div>
  );
}

export default Products;
