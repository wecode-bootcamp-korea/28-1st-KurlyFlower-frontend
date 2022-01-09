import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav';
import Footer from '../../components/footer.js';
import './Login.scss';

function Login() {
  const idRef = useRef();
  const pwRef = useRef();
  const navigate = useNavigate();
  // const [inputId, setInputId] = useState('');
  // const [inputPw, setInputPw] = useState('');

  // const [inputsLogin, setinputsLogin] = useState({
  //   username: '',
  //   password: '',
  // });

  // const handleInputs = e => {
  //   const { name, value } = e.target;
  //   setinputsLogin({
  //     ...inputsLogin,
  //     [name]: value,
  //   });
  // };
  // const isuserNameValid = inputsLogin.username.includes('').length > 1;
  // const ispasswordValid = inputsLogin.password.includes('').length > 1;
  // const isLoginJoin = isuserNameValid && ispasswordValid;
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  function handleInput(e) {
    setId(e.target.value);
  }
  function handleInputPw(e) {
    setPw(e.target.value);
  }
  const loginOk = () => {
    // const { username, password } = inputsLogin;
    fetch('http://13.209.117.55/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      // .then(result => {
      //   if (result.message === 'CREATED') {
      //     navigate('/main');
      //     alert('환영합니다.');
      //     localStorage.setItem('access_token', result.token);
      //     console.log(localStorage);
      //   } else {
      //     alert('당신의 아이디 혹은 비밀번호가 틀립니다.');
      //   }
      // });
      .then(result => {
        sessionStorage.setItem('access_token', result.access_token);
        navigate('/main');
        console.log(sessionStorage);
        alert('로그인에 성공하였습니다!');
      });
  };
  const activeLogin = id.length >= 7 && pw.length >= 7;

  return (
    <div>
      <Nav />
      <div className="formContainer">
        <h3 className="loginTitle">로그인</h3>
        <p className="loginUserName">
          <input
            ref={idRef}
            type="text"
            className="loginUser"
            placeholder="아이디를 입력해 주세요"
            onChange={handleInput}
          />
        </p>
        <p className="loginUserPassword">
          <input
            ref={pwRef}
            type="password"
            className="loginUser"
            placeholder="비밀번호를 입력해 주세요"
            onChange={handleInputPw}
          />
        </p>

        <div className="loginFind">
          <span> 아이디 찾기 </span>|<span> 비밀번호 찾기 </span>
        </div>

        <button
          className="buttons btnLogin"
          disabled={!activeLogin}
          onClick={loginOk}
        >
          로그인
        </button>
        <Link to="/signup">
          <button className="buttons btnSignUp">회원가입</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
