import React, { useState, useEffect } from 'react';
import MenuList from './component/MenuList/MenuList';
import './ProductList.scss';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const price = productList.price;
  console.log(price);

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
      <div className="soltMenu">
        <ul>
          <li>추천순</li>
          <li>판매량순</li>
          <li>낮은가격순</li>
          <li>높은가격순</li>
        </ul>
      </div>
      <MenuList productList={productList} />
    </>
  );
}

export default ProductList;
