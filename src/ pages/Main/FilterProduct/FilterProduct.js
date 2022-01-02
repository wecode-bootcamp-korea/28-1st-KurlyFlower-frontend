import React, { useEffect, useState } from 'react';
import './FilterProduct.scss';
import MainProducts from '../MainProducts/MainProducts';

function FilterProduct({ addCart, cartList }) {
  const [products, setProducts] = useState();
  const [clickedCategory, setClickedCategory] = useState(0);

  async function loadFilteredProducts(categoryId) {
    const response = await fetch(`/data/main/filter${categoryId}.json`);
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    loadFilteredProducts(1);
  }, [clickedCategory]);

  function onClickCategory(e) {
    const clickedCategoryId = e.target.dataset.category;
    setClickedCategory(clickedCategoryId);
  }

  return (
    <div className="filterProduct">
      filter product
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
          정육
        </button>
        <button
          className={clickedCategory === '3' ? 'clickedCategory' : 'category'}
          data-category="3"
          onClick={onClickCategory}
        >
          과일
        </button>
        <button
          className={clickedCategory === '4' ? 'clickedCategory' : 'category'}
          data-category="4"
          onClick={onClickCategory}
        >
          수산
        </button>
      </section>
      {/* <MainProducts products={products} addCart={addCart} cartList={cartList} /> */}
    </div>
  );
}

export default FilterProduct;
