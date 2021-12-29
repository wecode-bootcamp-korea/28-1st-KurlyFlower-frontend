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
        <div className="leftInfo">
          <span className="Info"> 샛별·택배</span> 배송안내
        </div>
      </a>
      <li className="rightMenu">
        <Link to="/signup">
          <li className="rightMenuli" id="rightList">
            회원가입
          </li>
        </Link>
        <Link to="/">
          <li className="rightMenuli" id="rightList">
            로그인
          </li>
        </Link>

        <li
          className="rightMenulist"
          id="rightList"
          onClick={() => listToggleMenu()}
        >
          고객센터
          <ul className={listOpen ? 'show-menu' : 'hide-menu'}>
            {CSCENTERLIST.map(CSList => {
              <div>{CSList.id}</div>;
              return <li className="listTest">{CSList.content}</li>;
            })}
          </ul>
        </li>
      </li>
      <div className="navFooter">
        <div className="categoriesGroup">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
            className="imgCate"
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
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
