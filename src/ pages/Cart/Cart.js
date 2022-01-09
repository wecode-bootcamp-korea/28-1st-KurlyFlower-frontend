import React, { useEffect, useState } from 'react';
import './Cart.scss';
import { BsCheckCircle } from 'react-icons/bs';
import Category from './Category/Category';
import CartInfo from './CartInfo/CartInfo';
import Order from './Order/Order';
import Nav from '../../components/Nav';

function Cart() {
  const [cartList, setCartList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOrdered, setIsOrdered] = useState(false);
  // console.log(cartList[0].address);
  function selectAllItems() {
    if (selectedItems.length === cartList.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartList);
    }
  }

  function deleteItems(item) {
    const filteredCartList = cartList.filter(cartItem => {
      return cartItem.product_id !== item.product_id;
    });
    setCartList(filteredCartList);
    submitDeletedSelectedItems(item);
  }

  function deleteSelectedItems() {
    let filteredCartList = cartList;
    setSelectedItems([]);
    function run() {
      selectedItems.forEach(selectedItem => {
        filteredCartList = filteredCartList.filter(cartItem => {
          return cartItem.product_id !== selectedItem.product_id;
        });
        setCartList(filteredCartList);
      });
    }
    run();
    submitDeletedSelectedItems();
  }

  function submitDeletedSelectedItems(item) {
    let idArr = [];
    if (selectedItems.length) {
      selectedItems.forEach(selectedItem =>
        idArr.push(selectedItem.product_id)
      );
    } else {
      idArr.push(item.product_id);
    }
    fetch('http://13.209.117.55/products/cart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        product_id_list: idArr,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  }

  function selectItems(item) {
    if (
      selectedItems.some(selectedItem => {
        return selectedItem.product_id === item.product_id;
      })
    ) {
      const filteredSelectedItems = selectedItems.filter(selectedItem => {
        return selectedItem.product_id !== item.product_id;
      });
      setSelectedItems(filteredSelectedItems);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  }
  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  function minusQuantity(item) {
    const updatedCartList = [...cartList];
    updatedCartList.forEach(cartItem => {
      if (cartItem.product_id === item.product_id) cartItem.quantity--;
    });
    setCartList(updatedCartList);
    submitChangeQuantity(item.product_id, -1);
  }

  function plusQuantity(item) {
    const updatedCartList = [...cartList];
    updatedCartList.forEach(cartItem => {
      if (cartItem.product_id === item.product_id) cartItem.quantity++;
    });
    setCartList(updatedCartList);
    submitChangeQuantity(item.product_id, 1);
  }

  function submitChangeQuantity(productId, changeQuantity) {
    fetch('http://13.209.117.55/products/cart', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        product_id: productId,
        quantity: changeQuantity,
      }),
    });
  }

  function handleOrder(boolean) {
    setIsOrdered(boolean);
  }

  useEffect(() => {
    const token = sessionStorage.getItem('access_token');
    const loadCartData = async () => {
      const response = await fetch('http://13.209.117.55/products/cart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      const data = await response.json();
      const res = await data.result;
      setCartList(res);
    };
    loadCartData();
  }, []);

  function categorizeItems(packagingType) {
    return cartList.filter(item => item.packaging === packagingType);
  }

  return (
    <>
      <Nav />
      <div className="cart">
        <h1>장바구니</h1>
        <div className="wrap">
          <section className="select">
            <span className="selectAll">
              <BsCheckCircle
                className={`checkbox ${
                  selectedItems.length &&
                  selectedItems.length === cartList.length &&
                  'clickedCheck'
                }`}
                onClick={selectAllItems}
              />
              <p className="text">{`전체선택 (${selectedItems.length}/${cartList.length})`}</p>
            </span>
            <span className="selectToDelete" onClick={deleteSelectedItems}>
              선택삭제
            </span>
          </section>
          <div className="container">
            <main className="cartList">
              <section className="list">
                {categorizeItems('냉장').length ? (
                  <Category
                    packaging="냉장"
                    selectedItems={selectedItems}
                    selectItems={selectItems}
                    deleteItems={deleteItems}
                    minusQuantity={minusQuantity}
                    plusQuantity={plusQuantity}
                    items={categorizeItems('냉장')}
                  />
                ) : (
                  ''
                )}
                {categorizeItems('냉동').length ? (
                  <Category
                    packaging="냉동"
                    selectedItems={selectedItems}
                    selectItems={selectItems}
                    deleteItems={deleteItems}
                    minusQuantity={minusQuantity}
                    plusQuantity={plusQuantity}
                    items={categorizeItems('냉동')}
                  />
                ) : (
                  ''
                )}
                {categorizeItems('상온').length ? (
                  <Category
                    packaging="상온"
                    selectedItems={selectedItems}
                    selectItems={selectItems}
                    deleteItems={deleteItems}
                    minusQuantity={minusQuantity}
                    plusQuantity={plusQuantity}
                    items={categorizeItems('상온')}
                  />
                ) : (
                  ''
                )}
                {!cartList.length ? (
                  <div className="noItems">
                    <p>장바구니에 담긴 상품이 없습니다</p>
                  </div>
                ) : (
                  ''
                )}
              </section>
            </main>

            <aside>
              <CartInfo
                priceSum={selectedItems.reduce((acc, curr) => {
                  return acc + curr.quantity * curr.price;
                }, 0)}
                noCartItem={!cartList.length}
                address={
                  cartList.length
                    ? cartList[0].address
                    : '배송가능한 상품이 없습니다'
                }
                // address={cartList[0].address || '배송정보가 없습니다'}
                handleOrder={handleOrder}
              />
            </aside>
          </div>
          <section className="select">
            <span className="selectAll">
              <BsCheckCircle
                className={`check ${
                  selectedItems.length === cartList.length && 'clickedCheck'
                }`}
                onClick={selectAllItems}
              />
              <p className="text">{`전체선택 (${selectedItems.length}/${cartList.length})`}</p>
            </span>
            <span className="selectToDelete" onClick={deleteSelectedItems}>
              선택삭제
            </span>
          </section>
        </div>
        {isOrdered && (
          <Order selectedItems={selectedItems} handleOrder={handleOrder} />
        )}
      </div>
    </>
  );
}

export default Cart;
