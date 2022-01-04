import React from 'react';
import './CartInfo.scss';
import { GrLocation } from 'react-icons/gr';

function CartInfo({ priceSum }) {
  return (
    <div className="cartInfo">
      <section className="info">
        <div className="address">
          <h3 className="title">
            <GrLocation />
            <p className="text">배송지</p>
          </h3>
          <p className="text">
            서울 ㅇㅇㅇ구 ㅇㅇ로 10(ㅇㅇ 아파트 ㅇㅇㅇ-ㅇㅇ)
          </p>
          <p className="shipping">샛별배송</p>
          <button className="edit">주소지 변경</button>
        </div>
        <div className="priceList">
          <div className="price">
            <span className="text">상품금액</span>
            <span className="price">{priceSum}원</span>
          </div>

          <div className="price">
            <span className="text">배송비</span>
            <span className="price">2500원</span>
          </div>
        </div>
        <div className="priceSum">
          <span className="text">결제예정금액</span>
          <span className="price">{priceSum + 2500}원</span>
        </div>
      </section>
      <button className="order">주문하기</button>
      <div className="notice">
        <p>쿠폰 적립금</p>
      </div>
    </div>
  );
}

export default CartInfo;
