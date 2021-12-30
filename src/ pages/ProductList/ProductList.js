import React, { useState, useEffect } from 'react';
import MenuList from './components/MenuList/MenuList';
import SortMenu from './components/SortMenu/SortMenu';
import './ProductList.scss';

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/productData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);
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
      <SortMenu
        priceDown={productList.sort((a, b) => {
          return a.price - b.price;
        })}
      />
      <MenuList productList={productList} />
    </>
  );
}

export default ProductList;
