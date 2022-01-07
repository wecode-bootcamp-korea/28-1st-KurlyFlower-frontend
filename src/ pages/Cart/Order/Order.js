import React from 'react';
import { useNavigate } from 'react-router';
import './Order.scss';

function Order({ selectedItems }) {
  const navigate = useNavigate();
  function goToMain() {
    navigate('/main');
  }

  return (
    <div className="order">
      <div className="popUp">
        <p className="message">주문이 완료되었습니다</p>
        <ul className="orderedList">
          {selectedItems.map((selectedItem, idx) => (
            <li key={idx} className="orderedItem">
              <img className="img" src={selectedItem.img} alt="ordered-item" />
              <span className="text">
                <p className="name">{selectedItem.name}</p>
                <p>{selectedItem.price}원</p>
              </span>
            </li>
          ))}
        </ul>
        <div className="priceSum">
          <p className="text">합계</p>
          <p className="price">
            <p className="number">
              {selectedItems.reduce((acc, curr) => {
                return acc + curr.quantity * curr.price;
              }, 0)}
            </p>
            <p>원</p>
          </p>
        </div>
        <button className="keepShopping" onClick={goToMain}>
          계속 쇼핑하기
        </button>
      </div>
    </div>
  );
}

export default Order;
