import React, { useCallback, useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './LoadMoreProducts.scss';

function LoadMoreProducts({ setPage }) {
  const feedEndRef = useRef();

  const callback = useCallback(
    entry => {
      if (entry[0].isIntersecting) {
        setPage(page => page + 1);
      }
    },
    [setPage]
  );

  useEffect(() => {
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
  }, [callback, setPage]);

  return <section className="loadMoreProducts" ref={feedEndRef} />;
}

export default LoadMoreProducts;
