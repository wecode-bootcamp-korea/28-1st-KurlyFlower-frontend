import React, { useEffect, useState } from 'react';
import './Main.scss';
import Collection from './Collection/Collection';
import Banner from './Banner/Banner';
import Nav from './../../components/Nav';
import LoadMoreProducts from './LoadMoreProducts/LoadMoreProducts';
import Skeleton from './Skeleton/Skeleton';
import FilterProduct from './FilterProduct/FilterProduct';
import ProductList from '../ProductList/ProductList';

function Main() {
  const [productsList, setProductsList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProductsData = async pageNum => {
      if (pageNum < 5) {
        const response = await fetch(
          `http://13.209.117.55/products/collection/${pageNum}?offset=0&limit=5`
        );
        const data = await response.json();
        const res = await data.result;
        setProductsList(productsList => [...productsList, res]);
      }
    };
    fetchProductsData(page);
  }, [page]);

  function addCart(product) {
    setCartList([...cartList, product.id]);

    function submitAddedCartId() {
      fetch('http://13.209.117.55/products/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: sessionStorage.getItem('access_token'),
        },
        body: JSON.stringify({
          product_id: product.id,
          quantity: 1,
        }),
      });
    }
    submitAddedCartId();
  }
  return (
    <>
      <div className="main">
        <Nav cartCount={cartList.length} />
        {!productsList && <Skeleton />}
        <Banner />
        {productsList.length ? (
          productsList.map((products, idx) => (
            <Collection
              key={idx}
              products={products}
              addCart={addCart}
              cartList={cartList}
              showMore={true}
            />
          ))
        ) : (
          <Skeleton />
        )}
      </div>
      {page === 5 && (
        <FilterProduct addCart={addCart} cartList={cartList} showMore={false} />
      )}
      {productsList && page < 5 && <LoadMoreProducts setPage={setPage} />}
    </>
  );
}

export default Main;
