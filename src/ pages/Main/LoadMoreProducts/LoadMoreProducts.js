import React, { useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './LoadMoreProducts.scss';

function LoadMoreProducts({ setPage }) {
  const feedEndRef = useRef();
  const observer = new IntersectionObserver(entry => {
    // console.log(entry[0].intersectionRatio);
    if (entry[0].isIntersecting) {
      setPage(page => page + 1);
      // console.log('dd');
    }
  });

  useEffect(() => {
    observer.observe(feedEndRef.current);
    return () => {
      observer.unobserve(feedEndRef.current);
    };
  }, [observer]);

  return <div className="loadMoreProducts" ref={feedEndRef} />;
}
export default LoadMoreProducts;
