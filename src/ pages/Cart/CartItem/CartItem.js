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

  const isSelected = selectedItems.some(
    selectedItem => selectedItem.product_id === item.product_id
  );

  return (
    <li className="cartItem">
      <BsCheckCircle
        onClick={onClickCheck}
        className={`check ${isSelected ? 'clickedCheck' : ''}`}
      />
      <span className="imgContainer">
        <img src={item.thumbnail_url} alt="itemImg" />
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
