import React, { useRef } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import './Banner.scss';

function Banner() {
  const SLIDE_WIDTH = '1440';
  const slideRef = useRef();

  function slideToLeft() {
    console.log('left');
    slideRef.current.style.transform = `translateX(${SLIDE_WIDTH}px)`;
  }

  function slideToRight() {
    console.log('right');
    slideRef.current.style.transform = `translateX(-${SLIDE_WIDTH}px)`;
  }

  return (
    <div className="banner">
      <div className="banner-wrap">
        <div className="banner-container">
          <div className="list" ref={slideRef}>
            <article className="item">
              <img className="item-img" src="/images/main/1.png" alt="" />
            </article>
            <article className="item">
              <img src="/images/main/2.png" alt="" />
            </article>
            <article className="item">
              <img src="/images/main/3.png" alt="" />
            </article>
          </div>
        </div>
        <div className="buttons">
          <button>
            <MdKeyboardArrowLeft className="left" onClick={slideToLeft} />
          </button>
          <button />
          <MdKeyboardArrowRight className="right" onClick={slideToRight} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
