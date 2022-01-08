import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navlogo.scss';
const NavLogo = () => {
  const logoText = 'Kurly\nFlower';
  const [text, SetText] = useState('');
  const navigate = useNavigate();
  function goToMain() {
    navigate('/main');
  }
  const [count, SetCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      SetText(text + logoText[count]); //text + logoText에 count로 다음에 받아올것
      SetCount(count + 1); // count + 1로 logoText가 1글자씩 나오도록함.
    }, 200); // 일정시간 간격으로 1글자씩 출력함.
    if (count === logoText.length) {
      // count와 logoText.length가 일치할경우 interval 해제
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
  return (
    <p className="logoText" onClick={goToMain}>
      {text}
    </p>
  );
};

export default NavLogo;
