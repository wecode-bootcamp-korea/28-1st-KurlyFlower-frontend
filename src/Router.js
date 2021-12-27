import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './ pages/Login/Login';
import Main from './ pages/Main/Main';
import ProductList from './ pages/ProductList/ProductList';
import Signup from './ pages/Signup/Signup';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}
