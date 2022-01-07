import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLogo from './Navlogo';
import ProductList from '../ pages/ProductList/ProductList';
import { CSCENTERLIST } from './CSCENTERLIST';
import './Nav.scss';
import { BsCart2 } from 'react-icons/bs';

const Nav = ({ cartCount }) => {
  const [listOpen, setlistOpen] = useState(false);
  const navigate = useNavigate();
  const listToggleMenu = () => {
    setlistOpen(listOpen => !listOpen);
  };
  const [purpleSmallUis, setpurpleSmallUis] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setpurpleSmallUis(false);
    }, 20000);
  }, []);

  function goToCart() {
    navigate('/cart');
  }

  return (
    <div className="navLocation">
      <NavLogo />
      <a href="https://www.google.co.kr">
        <p className="leftInfo">
          <span className="Info"> 샛별·택배</span> 배송안내
        </p>
      </a>
      <li className="rightMenu">
        <Link to="/signup">
          <li className="rightMenuli">회원가입</li>
        </Link>
        <Link to="/">
          <li className="rightMenuli">로그인</li>
        </Link>

        <li className="rightMenuli" onClick={listToggleMenu}>
          고객센터
          <ul className={listOpen ? 'show-menu' : 'hide-menu'}>
            {CSCENTERLIST.map(CSList => {
              return (
                <li className="cscenterList" key={CSList.CScenterid}>
                  {CSList.content}
                </li>
              );
            })}
          </ul>
        </li>
      </li>

      <div className="categoriesGroup">
        <img
          src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
          className="imgCate"
          alt="categorieBtn"
        />
        <span className="categorieAll">전체 카테고리</span>
        <Link to="/productList?category_id=1">
          <span className="categorieMenuV">채소</span>
        </Link>
        <Link to="/productList?category_id=2">
          <span className="categorieMenuF">과일</span>
        </Link>

        <Link to="/productList?category_id=3">
          <span className="categorieMenuM">정육</span>
        </Link>
        <Link to="/productList?category_id=4">
          <span className="categorieMenuFi">수산</span>
        </Link>
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          className="searchField"
        />
        <button className="imgSearch">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"
            className="imgSearch"
            alt="searchBtn"
          />
        </button>
        <img
          src="https://img.icons8.com/ios/50/000000/marker--v1.png"
          className="imgLocation"
          alt="btnLocation"
        />
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/like--v2.png"
          className="imgHeart"
          alt="btnHeart"
        />
        <button className="imgCarts">
          <span className="imgCartsWrap">
            <BsCart2 className="imgCart" onClick={goToCart} />
            {cartCount > 0 && (
              <span className="cartCountContainer">
                <p className="cartCount">{cartCount}</p>
              </span>
            )}
          </span>
        </button>
        {purpleSmallUis === true ? (
          <div className="purpleSmallUi">
            <p>지금 가입하고 인기상품을 100원에 받아가세요</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
