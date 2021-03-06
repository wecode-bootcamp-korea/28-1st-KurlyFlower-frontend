import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './FilterProduct.scss';

function FilterProduct({ addCart, cartList, showMore }) {
  const [products, setProducts] = useState([]);
  const [clickedCategory, setClickedCategory] = useState('1');

  async function loadFilteredProducts(categoryId) {
    const response = await fetch(
      `http://13.209.117.55/products?category_id=${categoryId}&offset=5&limit=5`
    );
    const data = await response.json();
    const res = await data.result.data;
    setProducts(res);
  }

  useEffect(() => {
    loadFilteredProducts(clickedCategory);
  }, [clickedCategory]);

  function onClickCategory(e) {
    const clickedCategoryId = e.target.dataset.category;
    setClickedCategory(clickedCategoryId);
  }

  return (
    <div className="filterProduct">
      <h1>MD의 추천</h1>
      <section className="categories">
        <button
          className={clickedCategory === '1' ? 'clickedCategory' : 'category'}
          data-category="1"
          onClick={onClickCategory}
        >
          야채
        </button>
        <button
          className={clickedCategory === '2' ? 'clickedCategory' : 'category'}
          data-category="2"
          onClick={onClickCategory}
        >
          과일
        </button>
        <button
          className={clickedCategory === '3' ? 'clickedCategory' : 'category'}
          data-category="3"
          onClick={onClickCategory}
        >
          정육
        </button>
        <button
          className={clickedCategory === '4' ? 'clickedCategory' : 'category'}
          data-category="4"
          onClick={onClickCategory}
        >
          수산
        </button>
      </section>
      {products.length && (
        <Products
          products={products}
          productsLength={products.length}
          addCart={addCart}
          cartList={cartList}
          showMore={showMore}
        />
      )}
    </div>
  );
}

export default FilterProduct;
