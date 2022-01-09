import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../../components/Nav.js';
import { PRODUCTPAGE } from './PRODUCTPAGE.js';
import './ProductDetail.scss';

function ProductDetail() {
  const [productDetail, setProductDetail] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const [count, setCount] = useState(1);
  const plusCount = () => setCount(prevCount => prevCount + 1);
  const minusCount = () => setCount(prevCount => prevCount - 1);
  const valueControl = e =>
    isNaN(e.target.value)
      ? alert('숫자를 입력하시오')
      : setCount(Number(e.target.value));

  const pricetotal = count * productDetail.price;
  const token = sessionStorage.getItem('access_token');
  const cartPageGo = () => {
    fetch(`http://13.209.117.55/products/cart`, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        product_id: `${params.id}`,
        quantity: `${params.id}`,
      }),
    })
      .then(response => response.json())
      .then(res => {
        alert('장바구니에 상품이 추가되었어요');
        navigate('/cart');
      });
  };
  useEffect(() => {
    fetch(`http://13.209.117.55/products/${params.id}`)
      .then(res => res.json())
      .then(res => setProductDetail(res.product_detail));
  }, []);
  return (
    <>
      <Nav />
      <div className="dataleft">
        <div>
          {productDetail.detail_images &&
            productDetail.detail_images.map(images => {
              return (
                <img
                  className="productDetailImage"
                  src={images}
                  alt="받아오는이미지"
                />
              );
            })}
        </div>

        <div className="textData">
          <p className="description">{productDetail.description}</p>
          <p className="origin">{productDetail.origin}</p>
          <p className="name">{productDetail.name}</p>
          <p className="packaging">{productDetail.packaging}</p>
          <p className="price">{productDetail.price} 원</p>
          <p className="shipping">{productDetail.shipping_type}</p>
          <p className="units">{productDetail.units}</p>
          <p className="weights">{productDetail.weights}</p>
        </div>
      </div>
      <p className="memberDiscount">회원할인가</p>
      <p className="memberad">로그인 후, 회원할인가와 적립혜택이 제공됩니다.</p>
      {PRODUCTPAGE.map(PRODUCTPAGE => {
        return (
          <div className="productpagetest" key={PRODUCTPAGE.id}>
            <p className="rightcontent">{PRODUCTPAGE.content}</p>
          </div>
        );
      })}
      <div className="buyButtons">
        <button
          className="buyButtonMinus"
          onClick={minusCount}
          disabled={count < 2}
        >
          -
        </button>
        <input
          className="productQuantity"
          type="text"
          onChange={valueControl}
          value={count}
        />
        <button className="buyButtonPlus" onClick={plusCount}>
          +
        </button>
        <span className="totalPrices">
          총 상품금액 :{pricetotal.toLocaleString()} 원
        </span>
      </div>
      <div className="pointAd">
        <p className="point">적립</p>
        <p className="loginAds">로그인 후, 회원할인가와 적립혜택 제공</p>
      </div>

      <button className="cartplus" onClick={cartPageGo}>
        장바구니 담기
      </button>
    </>
  );
}
export default ProductDetail;
