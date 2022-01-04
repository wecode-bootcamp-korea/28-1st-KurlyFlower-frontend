import React, { useState, useEffect } from 'react';
import MenuList from './components/MenuList/MenuList';

// import CartBtn from './components/cartBtn/CartBtn';

import './ProductList.scss';

function ProductList() {
  const [productList, setProductList] = useState([]);

  const [clickedMainBtn, setClickedMainBtn] = useState(0);

  const [clickedBtn, setClickedBtn] = useState(0);
  useEffect(() => {
    fetch('http://8ba7-211-216-118-174.ngrok.io/products', {
      method: 'GET',
    })
      .then(data => data.json())
      .then(data => setProductList(data));
  }, []);

  // useEffect(() => {}, [productList]);

  // const lowPrice = () => {
  //   setProductList(
  //     [...productList].sort(function (a, b) {
  //       //리액트는 불변성이라는 규칙 떄문에 원본 데이터는 안바뀜(복사해서 작업해야함)
  //       return a.number - b.number;
  //     })
  //   );
  // };
  // const heightPrice = () => {
  //   setProductList(
  //     [...productList].sort(function (a, b) {
  //       return b.number - a.number;
  //     })
  //   );
  // };

  function onClickMainBtn(e) {
    setClickedMainBtn(e.target.dataset.key);
    // setClickedMainBtn(e.target.dataset.type);
  }

  function onClickBtn(e) {
    setClickedBtn(e.target.dataset.key);

    // lowPrice();
    // heightPrice();
  }

  return (
    <>
      <div className="productTitle">
        <h2>채소</h2>
        <ul>
          <li
            className={clickedMainBtn === '1' ? 'filterBtnOn' : ''}
            onClick={onClickMainBtn}
            data-key="1"
          >
            전체보기
          </li>
          <li
            className={clickedMainBtn === '2' ? 'filterBtnOn' : ''}
            onClick={onClickMainBtn}
            data-key="2"
          >
            특수채소
          </li>
          <li
            className={clickedMainBtn === '3' ? 'filterBtnOn' : ''}
            onClick={onClickMainBtn}
            data-key="3"
          >
            일반채소
          </li>
        </ul>
      </div>

      <div className="soltMenu">
        <ul>
          <li
            className={clickedBtn === '4' ? 'isActive' : ''}
            onClick={onClickBtn}
            data-key="4"
          >
            추천순
          </li>
          <li
            className={clickedBtn === '5' ? 'isActive' : ''}
            onClick={onClickBtn}
            data-key="5"
          >
            판매량순
          </li>
          <li
            className={clickedBtn === '6' ? 'isActive' : ''}
            onClick={onClickBtn}
            data-key="6"
          >
            낮은가격순
          </li>
          <li
            className={clickedBtn === '7' ? 'isActive' : ''}
            onClick={onClickBtn}
            data-key="7"
          >
            높은가격순
          </li>
        </ul>
      </div>
      {/* <SortMenu
        
      /> */}

      <MenuList productList={productList} />
    </>
  );
}

export default ProductList;
