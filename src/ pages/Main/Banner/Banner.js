import React, { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import './Banner.scss';

function Banner() {
  const [banners, setBanners] = useState([]);
  async function fetchBannersData() {
    const response = await fetch('/data/main/banners.json');
    const data = await response.json();
    const updated = [...data, ...data, ...data];
    setBanners(updated);
  }

  useEffect(() => {
    fetchBannersData();
  }, []);

  const SLIDE_WIDTH = 1440;
  const slideRef = useRef();

  const BANNERS_COUNT = banners.length;
  const TOTAL_BANNERS_COUNT = BANNERS_COUNT * 3;
  const START = (TOTAL_BANNERS_COUNT * 1) / 3 + 1;
  const END = (TOTAL_BANNERS_COUNT * 2) / 3;
  const PREV_END = (TOTAL_BANNERS_COUNT * 1) / 3;
  const NEXT_START = (TOTAL_BANNERS_COUNT * 2) / 3 + 1;

  const [slide, setSlide] = useState({
    number: START,
    withMotion: true,
  });

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${
      SLIDE_WIDTH * (slide.number - 1)
    }px)`;
    slideRef.current.style.transition = slide.withMotion
      ? 'all 0.5s ease-in'
      : '';
  }, [slide, SLIDE_WIDTH]);

  function slideAfterMoveToTheEnd() {
    setSlide({
      number: END - 1,
      withMotion: true,
    });
  }

  function slideAfterMoveToTheStart() {
    setSlide({
      number: START + 1,
      withMotion: true,
    });
  }

  const passTheFirstSlide = slide.number === PREV_END;
  const passTheLastSlide = slide.number === NEXT_START;

  function onClickPrev() {
    if (passTheFirstSlide) {
      setSlide({
        number: END,
        withMotion: false,
      });
      setTimeout(() => {
        slideAfterMoveToTheEnd();
      }, 50);
    } else {
      setSlide({
        number: slide.number - 1,
        withMotion: true,
      });
    }
  }

  function onClickNext() {
    if (passTheLastSlide) {
      setSlide({
        number: START,
        withMotion: false,
      });
      setTimeout(() => {
        slideAfterMoveToTheStart();
      }, 50);
    } else {
      setSlide({
        number: slide.number + 1,
        withMotion: true,
      });
    }
  }

  return (
    <div className="banner">
      <div className="bannerWrap">
        <div className="bannerContainer">
          <div className="list" ref={slideRef}>
            {banners &&
              banners.map((banner, idx) => (
                <article key={idx} className="item">
                  <img className="itemImg" src={banner} alt="" />
                </article>
              ))}
          </div>
        </div>
        <div className="buttons">
          <button>
            <MdKeyboardArrowLeft className="prev" onClick={onClickPrev} />
          </button>
          <button />
          <MdKeyboardArrowRight className="next" onClick={onClickNext} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
