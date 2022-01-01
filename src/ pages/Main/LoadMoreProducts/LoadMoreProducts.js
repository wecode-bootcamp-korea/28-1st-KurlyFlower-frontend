import React, { useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './LoadMoreProducts.scss';

function LoadMoreProducts({ setPage }) {
  const feedEndRef = useRef();

  useEffect(() => {
    const observer = () =>
      new IntersectionObserver(entry => {
        if (entry[0].isIntersecting) {
          setPage(page => page + 1);
        }
      });
    let observerRefValue = null;

    if (feedEndRef.current) {
      observer.observe(feedEndRef.current);
      observerRefValue = feedEndRef.current;
    }
    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, []);

  return <div className="loadMoreProducts" ref={feedEndRef} />;
}
export default LoadMoreProducts;
