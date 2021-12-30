import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../ pages/Login/Navlogo';
import { CSCENTERLIST } from './CSCENTERLIST';
import './Nav.scss';

const Nav = () => {
  const [listOpen, setlistOpen] = useState(false);
  const listToggleMenu = () => {
    setlistOpen(listOpen => !listOpen);
  };
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

        <li className="rightMenuli" onClick={() => listToggleMenu()}>
          고객센터
          <ul className={listOpen ? 'show-menu' : 'hide-menu'}>
            {CSCENTERLIST.map(CSList => {
              return (
                <li className="cscenterList" key={CSList.key}>
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
        <span className="categorieMenuV">채소</span>
        <span className="categorieMenuF">과일</span>
        <span className="categorieMenuM">정육</span>
        <span className="categorieMenuFi">수산</span>

        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          className="searchField"
        />
        <img
          src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"
          className="imgSearch"
          alt="searchBtn"
        />
      </div>
    </div>
  );
};

export default Nav;
