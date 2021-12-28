import React from 'react';
import './Main.scss';
import MainProducts from './MainProducts/MainProducts';
import Banner from './Banner/Banner';

function Main() {
  return (
    <div className="main">
      <Banner />
      <MainProducts />
    </div>
  );
}

export default Main;
