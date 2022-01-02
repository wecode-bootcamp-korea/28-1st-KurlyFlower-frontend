import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav';
import Footer from '../../components/footer';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  // 백엔드 로그인 관련 파트
  const [loginMember, setloginMember] = useState(true);
  const [loginsInput, setloginsInput] = useState({
    id: '',
    password: '',
  });
  const { id, password } = loginsInput;
  const handleLogins = event => {
    const { name, value } = event.target;
    setloginsInput({
      ...loginsInput,
      [name]: value,
    });
  };
  function clickLoginBtn() {
    setloginMember(false);
  }
  function changeUsers() {
    setloginMember(true);
  }
  const passwordCheck =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,}$/.test(
      password
    ); //백엔드에서 받은 비밀번호 관련 조건 : 최소 8자 이상 + 1개이상의 문자 + 1개이상의 숫자 + 1개이상의 특수문자 보유
  const idCheck = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{6,}$/.test(id); // 백엔드에서 받은조건 : 영문만 사용하거나 / 영문+숫자로 6자 이상 조건을 만족시킬것.
  const loginChecks = idCheck && passwordCheck;

  const loginCheckConst = () => {
    if (loginChecks) {
      fetch(
        /*'백엔드 주소',*/ {
          method: 'POST',
          body: JSON.stringify({
            id: id,
            password: password,
          }),
        }
      )
        .then(res => res.json())
        .then(result => {
          if (result.message === 'SUCCESS') {
            sessionStorage.setItem('token', result.token);
            console.log(result);
            navigate('/main');
          } else {
            alert('당신은 등록되지 않은 회원입니다.');
            console.log(result);
          }
        });
    } else {
      alert('회원가입을 먼저 하세요!');
    }
  };

  const [loginBtnActive, setLoginBtnActive] = useState(false);

  const inputIdEvent = e => setInputId(e.target.value);
  const inputPwEvent = e => setInputPw(e.target.value);

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
            onChange={(handleLogins, inputIdEvent)} //inputIdEvent
            onKeyUp={btnActive}
          />
        </p>
        <p className="loginUserPassword">
          <input
            type="password"
            className="loginUser"
            placeholder="비밀번호를 입력해 주세요"
            onChange={(handleLogins, inputPwEvent)} //inputPwEvent
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
            onClick={loginCheckConst}
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
      <Footer />
    </div>
  );
}

export default Login;
