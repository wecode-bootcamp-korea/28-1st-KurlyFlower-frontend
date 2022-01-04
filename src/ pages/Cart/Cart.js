import React, { useEffect, useState } from 'react';
import './Cart.scss';
import { BsCheckCircle } from 'react-icons/bs';
import Category from './Category/Category';
import CartInfo from './CartInfo/CartInfo';

function Cart() {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const loadCartData = async () => {
      const response = await fetch('/data/cart/cart.json');
      const data = await response.json();
      setCartList(data);
    };
    loadCartData();
  }, []);

  return (
    <div className="cart">
      <h1>장바구니</h1>
      <div className="wrap">
        <section className="select">
          <span className="selectAll">
            <BsCheckCircle className="check" />
            <p className="text">전체선택(1/10)</p>
          </span>
          <span className="selectToDelete">선택삭제</span>
        </section>
        <div className="container">
          <main className="cartList">
            <section className="list">
              <Category
                packaging="냉장"
                cartList={cartList}
                items={cartList.filter(item => item.packaging === '냉장')}
              />
              <Category
                packaging="냉동"
                cartList={cartList}
                items={cartList.filter(item => item.packaging === '냉동')}
              />
              <Category
                packaging="상온"
                cartList={cartList}
                items={cartList.filter(item => item.packaging === '상온')}
              />
            </section>
          </main>

          <aside>
            <CartInfo />
          </aside>
        </div>
        <section className="select">
          <span className="selectAll">
            <BsCheckCircle />
            <p className="text">전체선택(1/10)</p>
          </span>
          <span className="selectToDelete">선택삭제</span>
        </section>
      </div>
    </div>
  );
}

export default Cart;
