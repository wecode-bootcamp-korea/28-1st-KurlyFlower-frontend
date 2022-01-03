import React from 'react';
import './Cart.scss';
import { BsCheckCircle } from 'react-icons/bs';
import Category from './Category/Category';
import CartInfo from './CartInfo/CartInfo';

function Cart() {
  return (
    <div className="cart">
      <h1>장바구니</h1>
      <div className="wrap">
        <main className="cartList">
          <section className="select">
            <span className="selectAll">
              <BsCheckCircle className="check" />
              <p className="text">전체선택(1/10)</p>
            </span>
            <span className="selectToDelete">선택삭제</span>
          </section>
          <section className="list">
            <Category />
            <Category />
            <Category />
          </section>
          <section className="select">
            <span className="selectAll">
              <BsCheckCircle />
              <p className="text">전체선택(1/10)</p>
            </span>
            <span className="selectToDelete">선택삭제</span>
          </section>
        </main>
        <aside>
          <CartInfo />
        </aside>
      </div>
    </div>
  );
}

export default Cart;
