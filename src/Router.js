import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './ pages/Cart/Cart';
import Login from './ pages/Login/Login';
import Main from './ pages/Main/Main';
import ProductDetail from './ pages/ProductDetail/ProductDetail';
import ProductList from './ pages/ProductList/ProductList';
import Signup from './ pages/Signup/Signup';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
