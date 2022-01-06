import React, { useEffect, useState } from 'react';
import './Main.scss';
import Collection from './Collection/Collection';
import Banner from './Banner/Banner';
import Nav from './../../components/Nav';
import LoadMoreProducts from './LoadMoreProducts/LoadMoreProducts';
import Skeleton from './Skeleton/Skeleton';
import FilterProduct from './FilterProduct/FilterProduct';

function Main() {
  const [productsList, setProductsList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProductsData = async pageNum => {
      if (pageNum < 5) {
        const response = await fetch(
          `/data/main/MainProductList${pageNum}.json`
        );
        const data = await response.json();
        setProductsList(productsList => [...productsList, ...data]);
      }
    };
    fetchProductsData(page);
  }, [page]);

  function addCart(product) {
    setCartList([...cartList, product.id]);

    function submitAddedCartId() {
      fetch('http://9967-211-106-114-186.ngrok.io/products/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjQxOTk1NTU5LCJpYXQiOjE2NDEzOTA3NTl9.k_nT46iGKBUrXYwpRFjzejN6EvQcYpuFZuvfNZBRsK0',
        },
        body: JSON.stringify({
          product_id: product.id,
          quantity: 1,
        }),
      });
      // console.log(response);
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
