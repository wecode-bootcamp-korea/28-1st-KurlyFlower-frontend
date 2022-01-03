import React from 'react';
import './Category.scss';
import { IoIosArrowDown, IoMdClose } from 'react-icons/io';
import { BsCheckCircle, BsFillSunFill } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
function Category() {
  return (
    <div className="categoryContainer">
      <div className="category">
        <span className="title">
          <BsFillSunFill />
          <h2>상온 상품</h2>
        </span>
        <button className="spread">
          <IoIosArrowDown />
        </button>
      </div>
      <ul className="list">
        <li className="item">
          <BsCheckCircle className="check" />
          <img
            src="https://images.unsplash.com/photo-1558234608-ae0b60563965?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
          <p className="name">제품 이름ddddd</p>
          <span className="quantity">
            <AiOutlineMinus />
            <p className="number">1</p>
            <AiOutlinePlus />
          </span>
          <span className="price">1200원</span>
          <button>
            <IoMdClose className="delete" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Category;
