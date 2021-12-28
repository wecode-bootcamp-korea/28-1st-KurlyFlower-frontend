import React from 'react';
import './Main.scss';
import Products from './Products/Products';
import Banner from './Banner/Banner';

function Main() {
  return (
    <div className="main">
      <Banner />
      <Products />
    </div>
  );
}

export default Main;
