import React from 'react';
import { useNavigate } from 'react-router';
import './Order.scss';

function Order({ selectedItems, handleOrder }) {
  const navigate = useNavigate();
  function goToMain() {
    navigate('/main');
  }

  function closePopUp() {
    handleOrder(false);
  }

  return (
    <div className="order">
      <div className="popUp">
        <p className="message">
          {selectedItems.length
            ? '주문이 완료되었습니다'
            : '주문하실 상품을 선택해주세요!'}
        </p>
        <ul className="orderedList">
          {selectedItems.map((selectedItem, idx) => (
            <li key={idx} className="orderedItem">
              <img
                className="img"
                src={selectedItem.thumbnail_url}
                alt="ordered-item"
              />
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
        <div className="buttonWrap">
          <button className="keepShopping" onClick={goToMain}>
            계속 쇼핑하기
          </button>
          <button className="close" onClick={closePopUp}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
