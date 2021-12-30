import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import './Login.scss';

function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [loginBtnActive, setLoginBtnActive] = useState(false);

  const inputIdEvent = e => setInputId(e.target.value);
  const inputPwEvent = e => setInputPw(e.target.value);

  const btnActive = () => {
    setLoginBtnActive(inputId.includes('') && inputPw.length > 3);
  };

  return (
    <>
      <Nav />
      <div className="formContainer">
        <h3 className="loginTitle">로그인</h3>
        <p className="loginUserName">
          <input
            type="text"
            className="loginUser"
            placeholder="아이디를 입력해 주세요"
            onChange={inputIdEvent}
            onKeyUp={btnActive}
          />
        </p>
        <p className="loginUserPassword">
          <input
            type="password"
            className="loginUser"
            placeholder="비밀번호를 입력해 주세요"
            onChange={inputPwEvent}
            onKeyUp={btnActive}
          />
        </p>

        <div className="loginFind">
          <span> 아이디 찾기 </span>
          <span className="bar" />
          <span> 비밀번호 찾기 </span>
        </div>

        <Link to="/main">
          <button
            type="button"
            className="classSelectorTwo btnLogin"
            disabled={!loginBtnActive}
          >
            로그인
          </button>
        </Link>
        <Link to="/signup">
          <button type="button" className="classSelectorTwo btnSignUp">
            회원가입
          </button>
        </Link>
      </div>
    </>
  );
}

export default Login;
