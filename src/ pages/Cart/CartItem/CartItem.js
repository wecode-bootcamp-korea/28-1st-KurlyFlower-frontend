import React from 'react';
import './CartItem.scss';
import { IoMdClose } from 'react-icons/io';
import { BsCheckCircle } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function CartItem({
  item,
  selectedItems,
  selectItems,
  deleteItems,
  minusQuantity,
  plusQuantity,
}) {
  console.log(item);
  function onClickCheck() {
    selectItems(item);
  }

  function onClickDelete() {
    deleteItems(item);
  }

  function onClickMinus() {
    minusQuantity(item);
  }

  function onClickPlus() {
    plusQuantity(item);
  }

  return (
    <li className="cartItem">
      <BsCheckCircle
        onClick={onClickCheck}
        className={`check ${
          selectedItems.some(selectedItem => selectedItem.id === item.id)
            ? 'clickedCheck'
            : ''
        }`}
      />
      <span className="imgContainer">
        <img src={item.img} alt="itemImg" />
      </span>
      <p className="name">{item.name}</p>
      <span className="quantity">
        <AiOutlineMinus onClick={onClickMinus} />
        <p className="number">{item.quantity}</p>
        <AiOutlinePlus onClick={onClickPlus} />
      </span>
      <span className="price">{item.price * item.quantity}원</span>
      <button>
        <IoMdClose className="delete" onClick={onClickDelete} />
      </button>
    </li>
  );
}

export default CartItem;
