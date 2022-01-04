import React, { useRef } from 'react';
import { useEffect } from 'react';
import './LoadMoreProducts.scss';

function LoadMoreProducts({ setPage }) {
  const feedEndRef = useRef();
  useEffect(() => {
    const callback = entry => {
      if (entry[0].isIntersecting) {
        setPage(page => page + 1);
      }
    };

    const observer = new IntersectionObserver(callback);

    let observerRefValue = null;
    if (feedEndRef.current) {
      observer.observe(feedEndRef.current);
      observerRefValue = feedEndRef.current;
    }
    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, [setPage]);

  return <section className="loadMoreProducts" ref={feedEndRef} />;
}

export default LoadMoreProducts;
