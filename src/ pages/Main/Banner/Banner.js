import React, { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import './Banner.scss';

function Banner() {
  const SLIDE_WIDTH = '1440';
  const slideRef = useRef();

  let [slideNum, setSlideNum] = useState(0);

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${
      SLIDE_WIDTH * slideNum
    }px)`;
  }, [slideNum]);

  function onClickLeft() {
    setSlideNum(slideNum => slideNum - 1);
  }

  function onClickRight() {
    setSlideNum(slideNum => slideNum + 1);
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
            <MdKeyboardArrowLeft className="left" onClick={onClickLeft} />
          </button>
          <button />
          <MdKeyboardArrowRight className="right" onClick={onClickRight} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
