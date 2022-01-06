import React, { useState, useEffect } from 'react';

import MenuList from './components/MenuList/MenuList';

// import CartBtn from './components/cartBtn/CartBtn';

import './ProductList.scss';

function ProductList() {
  const [productList, setProductList] = useState([]);

  const [clickedMainBtn, setClickedMainBtn] = useState(0);

  const [clickedBtn, setClickedBtn] = useState(0);

  useEffect(() => {
    fetch('http://c6ec-211-106-114-186.ngrok.io/products', {
      method: 'GET',
    })
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setProductList(data.result.data)); // 원래 코드 setProductList(data)) >> 리스트 데이터는 배열로 받았는데 내가 찾는 값은 객체 안에 있어서 경로 지정 해줘야함
  }, []);

  useEffect(() => {}, [productList]);

  function onClickMainBtn(e) {
    setClickedMainBtn(e.target.dataset.key);
    // setClickedMainBtn(e.target.dataset.type);
  }

  function onClickBtn(e) {
    setClickedBtn(e.target.dataset.key);
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
      {productList.length && <MenuList productList={productList} />}
    </>
  );
}

export default ProductList;
