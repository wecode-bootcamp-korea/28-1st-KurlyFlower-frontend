import React from 'react';
import './Collection.scss';

import Products from '../Products/Products';

function Collection({ products, addCart, cartList, showMore }) {
  return (
    <div className="collection">
      <h1 className="title">{products.title}</h1>
      <h3 className="subtitle">{products.subtitle}</h3>
      <Products
        products={products.products}
        productsLength={products.length}
        addCart={addCart}
        cartList={cartList}
        showMore={showMore}
      />
    </div>
  );
}

export default Collection;
