import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav.js';
// import Footer from "../../components/"
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputsLogin, setinputsLogin] = useState({
    username: '',
    password: '',
  });
  const { username, password } = inputsLogin;
  const handleInputs = e => {
    const { name, value } = e.target;
    setinputsLogin({
      ...inputsLogin,
      [name]: value,
    });
  };
  const userNameValid = inputsLogin.username.includes('', '1').length > 5;
  const passwordValid = inputsLogin.password.includes('', '!', '1').length > 7;
  const LoginJoin = userNameValid && passwordValid;
  const submitLoginForms = () => {
    const { username, password } = inputsLogin;
    fetch('http://dfc1-118-32-35-58.ngrok.io/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'CREATED') {
          sessionStorage.setItem('access_token', result.token);
          navigate('/main');
        } else {
          alert('당신의 아이디 혹은 비밀번호가 틀립니다.');
        }
      });
  };

  const [loginBtnActive, setLoginBtnActive] = useState(false);
  const btnActive = () => {
    setLoginBtnActive(inputId.includes('') && inputPw.length > 3);
  };

  return (
    <div>
      <Nav />
      <div className="formContainer">
        <h3 className="loginTitle">로그인</h3>
        <p className="loginUserName">
          <input
            type="text"
            className="loginUser"
            placeholder="아이디를 입력해 주세요"
            onChange={handleInputs}
            onKeyUp={btnActive}
          />
        </p>
        <p className="loginUserPassword">
          <input
            type="password"
            className="loginUser"
            placeholder="비밀번호를 입력해 주세요"
            onChange={handleInputs}
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
            type="submit"
            className="buttons btnLogin"
            disabled={!LoginJoin}
            onClick={submitLoginForms}
          >
            로그인
          </button>
        </Link>
        <Link to="/signup">
          <button type="submit" className="buttons btnSignUp">
            회원가입
          </button>
        </Link>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Login;
