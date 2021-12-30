import React, { useState, useEffect } from 'react';
import MenuList from './components/MenuList/MenuList';
import SortMenu from './components/SortMenu/SortMenu';
import Menu from './components/Menu/Menu';
import './ProductList.scss';

function ProductList() {
  const [productList, setProductList] = useState([]);

  const onClick = () => {
    setProductList(
      productList.sort((a, b) => {
        return a.price - b.price;
      })
    );
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/productData.json', {
      method: 'GET', //GET 메쏘는는 생략해도됨 지워도 정상 동작함
    })
      .then(res => res.json())
      // .then((result) => console.log(result)); //console로 데이터 10개 들어 온거 확인
      .then(data => setProductList(data));
  }, []); //  useEffect 에서 한 번만 랜더링함
  return (
    <>
      <div className="productTitle">
        <h2>채소</h2>
        <ul>
          <li>전체보기</li>
          <li>선택1</li>
          <li>선택2</li>
        </ul>
      </div>
      <SortMenu productList={productList} />
      <MenuList productList={productList} />
    </>
  );
}

export default ProductList;
