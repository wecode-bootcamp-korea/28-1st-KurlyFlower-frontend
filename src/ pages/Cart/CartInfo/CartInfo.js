import React from 'react';
import './CartInfo.scss';
import { GrLocation } from 'react-icons/gr';

function CartInfo({ priceSum, noCartItem, handleOrder }) {
  const shippingFee = noCartItem ? 0 : 2500;

  function onClickOrderBtn() {
    handleOrder(true);
  }

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
            <span className="price">{shippingFee}원</span>
          </div>
        </div>
        <div className="priceSum">
          <span className="text">결제예정금액</span>
          <span className="price">{priceSum + shippingFee}원</span>
        </div>
      </section>
      {noCartItem ? (
        <button className="orderBtn disabled" disabled>
          상품을 담아주세요
        </button>
      ) : (
        <button className="orderBtn" onClick={onClickOrderBtn}>
          주문하기
        </button>
      )}
      <div className="notice">
        <p>쿠폰 적립금</p>
      </div>
    </div>
  );
}

export default CartInfo;
