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
        console.log(pageNum);
        const response = await fetch(
          `http://13.209.117.55/products/collection/${pageNum}?offset=0&limit=5`
        );
        const data = await response.json();
        const res = await data.result;
        console.log(res);
        setProductsList(productsList => [...productsList, res]);
      }
    };
    fetchProductsData(page);
  }, [page]);

  // useEffect(() => {
  //   console.log(productsList);
  // }, [productsList]);

  function addCart(product) {
    setCartList([...cartList, product.id]);

    function submitAddedCartId() {
      console.log(product.id);
      fetch('http://13.209.117.55/products/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwiZ…3NzZ9.52ZpXWN_LIR4F5afnhpssoSzbjTGnEUN4ERI8JZX8Us',
        },
        body: JSON.stringify({
          product_id: product.id,
          quantity: 1,
        }),
      })
        .then(res => res.json())
        .then(data => console.log(data.result));
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
