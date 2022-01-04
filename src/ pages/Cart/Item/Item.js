import React from 'react';
import './Item.scss';
import { IoMdClose } from 'react-icons/io';
import { BsCheckCircle } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Item({ item, selectedItems, selectItems, deleteItems }) {
  function onClickCheck() {
    selectItems(item);
  }

  function onClickDelete() {
    deleteItems(item);
  }

  return (
    <li className="item">
      <BsCheckCircle
        onClick={onClickCheck}
        className={
          selectedItems.some(selectedItem => selectedItem.id === item.id)
            ? 'clickedCheck'
            : ''
        }
      />
      <span className="imgContainer">
        <img src={item.img} alt="itemImg" />
      </span>
      <p className="name">{item.name}</p>
      <span className="quantity">
        <AiOutlineMinus />
        <p className="number">1</p>
        <AiOutlinePlus />
      </span>
      <span className="price">{item.price}원</span>
      <button>
        <IoMdClose className="delete" onClick={onClickDelete} />
      </button>
    </li>
  );
}

export default Item;
