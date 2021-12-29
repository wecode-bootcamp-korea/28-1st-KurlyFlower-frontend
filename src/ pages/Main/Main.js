import React, { useEffect, useReducer, useState } from 'react';
import './Main.scss';
import MainProducts from './MainProducts/MainProducts';
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';

function Main() {
  const [productsList, setProductsList] = useState([]);
  async function fetchProductsData() {
    const response = await fetch('/data/main/MainProductList.json');
    const data = await response.json();
    setProductsList(data);
  }

  useEffect(() => {
    fetchProductsData();
    console.log(productsList);
  }, []);

  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
  // const countReducer = (state: CountStateT, action: Cou)
  const [cartNum, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="main">
      <Nav />
      {/* 테스트를 위해 임시로 만든 Nav 컴포넌트 */}
      <Banner />
      {productsList.map((products, idx) => (
        <MainProducts key={idx} products={products} />
      ))}
    </div>
  );
}

export default Main;
