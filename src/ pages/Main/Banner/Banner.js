import React, { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import './Banner.scss';

function Banner() {
  const bannerContents = [
    '/images/main/1.png',
    '/images/main/2.png',
    '/images/main/3.png',
  ];

  const ThreeTimesBannerContents = [
    ...bannerContents,
    ...bannerContents,
    ...bannerContents,
  ];

  const SLIDE_WIDTH = '1440';
  const slideRef = useRef();

  const BANNERS_COUNT = bannerContents.length;
  const TOTAL_BANNERS_COUNT = BANNERS_COUNT * 3;
  const START = (TOTAL_BANNERS_COUNT * 1) / 3 + 1; //4
  const END = (TOTAL_BANNERS_COUNT * 2) / 3;
  // const PREV_START = 1;
  const PREV_END = (TOTAL_BANNERS_COUNT * 1) / 3; //3
  const NEXT_START = (TOTAL_BANNERS_COUNT * 2) / 3 + 1; //7
  // const NEXT_END = TOTAL_BANNERS_COUNT; //9

  let [slide, setSlide] = useState({
    number: START,
    memo: 0,
  });

  useEffect(() => {
    console.log(slide.number);
    slideRef.current.style.transform = `translateX(-${
      SLIDE_WIDTH * (slide.number - 1)
    }px)`;
    console.log(NEXT_START === slide.number);
  }, [slide]);

  function onClickLeft() {
    if (slide.number === PREV_END && slide.memo === PREV_END + 1) {
      setSlide({
        number: END,
        memo: END - 1,
      });
      console.log('time to move next');
    } else {
      setSlide({
        number: slide.number - 1,
        memo: slide.number,
      });
    }
  }

  function onClickRight() {
    if (slide.number === NEXT_START && slide.memo === NEXT_START - 1) {
      setSlide({
        number: START,
        memo: START + 1,
      });
      console.log('time to move next');
    } else {
      setSlide({
        number: slide.number + 1,
        memo: slide.number,
      });
    }
  }

  return (
    <div className="banner">
      <div className="banner-wrap">
        <div className="banner-container">
          <div className="list" ref={slideRef}>
            {ThreeTimesBannerContents.map(banner => (
              <article className="item">
                <img className="item-img" src={banner} alt="" />
              </article>
            ))}
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
