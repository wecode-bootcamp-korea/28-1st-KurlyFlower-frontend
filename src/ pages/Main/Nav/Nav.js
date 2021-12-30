import React from 'react';
import './Nav.scss';
// 테스트용 컴포넌트 입니다
function Nav({ cartCount }) {
  return <div className="cartCount">{cartCount}</div>;
}

export default Nav;
