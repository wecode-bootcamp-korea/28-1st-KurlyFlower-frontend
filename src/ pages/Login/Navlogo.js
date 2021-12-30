import React, { useState, useEffect } from 'react';
import './Navlogo.scss';
const NavLogo = () => {
  const logoText = 'Kurly\nFlower';
  const [text, settext] = useState('');
  const [count, setcount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      settext(text + logoText[count]); //이전에 set으로 받아온것 + 다음에 받아올것
      setcount(count + 1); // 글자가 1글자씩 나오게 함.
    }, 200); // x초의 간격으로 setInterval 내부의 코드를 1글자씩 출력함.
    if (count === logoText.length) {
      // count와 txt.length가 일치할경우 interval 해제
      clearInterval(interval);
    }
    return () => clearInterval(interval); // 언마운트로 interval 해제
  });

  return <p className="logoText">{text}</p>;
};

export default NavLogo;
