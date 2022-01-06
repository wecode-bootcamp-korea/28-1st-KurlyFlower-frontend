import React from 'react';
import './Skeleton.scss';

function Skeleton() {
  return (
    <div className="skeleton">
      <div className="shine" />
      <div className="banner" />
      <h1 className="title" />
      <div className="products">
        <span className="product" />
        <span className="product" />
        <span className="product" />
        <span className="product" />
      </div>
    </div>
  );
}

export default Skeleton;
