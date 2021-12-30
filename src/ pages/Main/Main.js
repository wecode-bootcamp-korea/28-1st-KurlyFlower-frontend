import React, { useEffect, useReducer, useState } from 'react';
import './Main.scss';
import MainProducts from './MainProducts/MainProducts';
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';

function Main() {
  const [productsList, setProductsList] = useState([]);
  let [cartList, setCartList] = useState([]);

  async function fetchProductsData() {
    const response = await fetch('/data/main/MainProductList.json');
    const data = await response.json();
    setProductsList(data);
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  function addCart(product) {
    setCartList([...cartList, product.id]);
  }

  return (
    <div className="main">
      <Nav cartCount={cartList.length} />
      {/* 테스트를 위해 임시로 만든 Nav 컴포넌트 */}
      <Banner />
      {productsList.map((products, idx) => (
        <MainProducts
          key={idx}
          products={products}
          addCart={addCart}
          cartList={cartList}
        />
      ))}
    </div>
  );
}

export default Main;
