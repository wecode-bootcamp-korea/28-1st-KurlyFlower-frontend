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
  const START = (TOTAL_BANNERS_COUNT * 1) / 3 + 1;
  const END = (TOTAL_BANNERS_COUNT * 2) / 3;
  const PREV_END = (TOTAL_BANNERS_COUNT * 1) / 3;
  const NEXT_START = (TOTAL_BANNERS_COUNT * 2) / 3 + 1;

  let [slide, setSlide] = useState({
    number: START,
    memo: 0,
    withMotion: true,
  });

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${
      SLIDE_WIDTH * (slide.number - 1)
    }px)`;
    slideRef.current.style.transition = slide.withMotion
      ? 'all 0.5s ease-in'
      : '';
  }, [slide]);

  function slideAfterMoveLeft() {
    setSlide({
      number: END - 1,
      memo: slide.number - 1,
      withMotion: true,
    });
  }

  function slideAfterMoveRight() {
    setSlide({
      number: START + 1,
      memo: slide.number + 1,
      withMotion: true,
    });
  }

  function onClickLeft() {
    if (slide.number === PREV_END && slide.memo === PREV_END + 1) {
      setSlide({
        number: END,
        memo: END - 1,
        withMotion: false,
      });
      setTimeout(() => {
        slideAfterMoveLeft();
      }, 50);
    } else {
      setSlide({
        number: slide.number - 1,
        memo: slide.number,
        withMotion: true,
      });
    }
  }

  function onClickRight() {
    if (slide.number === NEXT_START && slide.memo === NEXT_START - 1) {
      setSlide({
        number: START,
        memo: START + 1,
        withMotion: false,
      });
      setTimeout(() => {
        slideAfterMoveRight();
      }, 50);
    } else {
      setSlide({
        number: slide.number + 1,
        memo: slide.number,
        withMotion: true,
      });
    }
  }

  return (
    <div className="banner">
      <div className="bannerWrap">
        <div className="bannerContainer">
          <div className="list" ref={slideRef}>
            {ThreeTimesBannerContents.map(banner => (
              <article className="item">
                <img className="itemImg" src={banner} alt="" />
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
