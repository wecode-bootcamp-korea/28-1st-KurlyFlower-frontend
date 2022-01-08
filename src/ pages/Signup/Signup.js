import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TABLETH } from './TABLETH.js';
import { SIGNUPAGREES } from './SIGNUPAGREE';
import Nav from '../../components/Nav';
import BtnModal from './BtnModal.js';
import './Signup.scss';

function Signup() {
  const [inputs, setinputs] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    phone_number: '',
    address: '',
  });

  const inputBackControl = event => {
    const { name, value } = event.target;
    setinputs({
      ...inputs,
      [name]: value,
    });
  };
  // console.log('테스트');
  const userNameValid = inputs.username.length > 5;
  const passwordValid = inputs.password.length > 7;
  const emailValid = inputs.email.includes('@');
  const ActiveJoin = userNameValid && emailValid && passwordValid;
  const navigate = useNavigate();

  const signUpOk = () => {
    const { username, password, name, email, phone_number, address } = inputs;

    fetch('http://13.209.117.55/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        name,
        email,
        phone_number,
        address,
      }),
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .then(result => {
        if (result.message === 'CREATED') {
          navigate('/');
          console.log(result.message);
          alert('환영합니다!');
        } else {
          // alert('당신의 회원가입은 실패하였습니다.');
          console.log(result.message);

        }
      });
  };

  const [checkBoxs, setcheckBoxs] = useState([]); //체크박스와 관련한 state 설정
  const allCheckActive = event => {
    //체크박스 전체 선택 / 전체 선택 해제
    event.target.checked
      ? setcheckBoxs([...checkBoxs, event.target.name])
      : setcheckBoxs(checkBoxs.filter(checkEvent => !checkEvent));
  };

  const CheckBox = event => {
    //개별 체크박스
    event.target.checked
      ? setcheckBoxs(['Agree', 'Age14over', 'Info']) // name속성으로 'Agree' 'Age14over 'Info'가 배열내부로 push함
      : setcheckBoxs([]);
  };

  return (
    <div className="signUp">
      <Nav />
      <h2>회원가입</h2>
      <p className="pageSub">
        <span className="icons">*</span>
        필수입력사항
      </p>
      <table className="tableBar">
        <tbody className="mapList">
          {TABLETH.map(TABLETH => {
            return (
              <tr className="mapOne" key={TABLETH.key}>
                <th className="tableMap">
                  {TABLETH.content}
                  <span className="icons">*</span>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="tableBars">
        <tbody>
          <div>
            <input
              className="inputBackContent"
              name="username"
              type="text"
              onChange={inputBackControl}
              placeholder="영문 이나 영문 + 숫자로 입력할것"
              value={inputs.username}
            />
            <input
              className="inputBackContent"
              name="password"
              type="password"
              onChange={inputBackControl}
              placeholder="8자 이상, 1개이상 문자+ 1개이상 숫자 + 1개 이상 특수문자"
              value={inputs.password}
            />
            <input
              className="inputBackContent"
              name="name"
              type="text"
              onChange={inputBackControl}
              placeholder="이름을 입력하시오"
            />
            <input
              className="inputBackContent"
              name="email"
              type="text"
              onChange={inputBackControl}
              placeholder="이메일을 입력하시오"
              value={inputs.email}
            />
            <input
              className="inputBackContent"
              name="phone_number"
              type="text"
              onChange={inputBackControl}
              placeholder="휴대폰 번호를 입력하시오"
            />
            <input
              className="inputBackContent"
              name="address"
              type="text"
              onChange={inputBackControl}
              placeholder="주소를 입력하시오"
            />
          </div>

          <tr className="userAgreePart">
            <th className="agreePart">
              이용약관동의
              <span className="icons">*</span>
            </th>
            <div className="checkboxAll">
              <input
                type="checkbox"
                onChange={CheckBox}
                checked={checkBoxs.length === 3} //배열의 길이로 전체선택의 유/무를 결정함.
              />
              전체 동의합니다.
              <p className="checkboxAllSubText">
                선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
                이용할 수 있습니다.
              </p>
            </div>

            <div className="agreePartMap">
              {SIGNUPAGREES.map(SIGNUPAGREES => {
                return (
                  <span className="partMap" key={SIGNUPAGREES.id}>
                    {SIGNUPAGREES.content}
                    <button className="btnModal">약관보기</button>
                  </span>
                );
              })}

              <input
                type="checkbox"
                name="Agree" // 각 체크박스마다 name속성으로 1개씩 받음.
                className="partMap1"
                onChange={allCheckActive}
                checked={checkBoxs.includes('Agree')}
              />
              <input
                type="checkbox"
                name="Info"
                className="partMap2"
                onChange={allCheckActive}
                checked={checkBoxs.includes('Info')}
              />
              <input
                type="checkbox"
                name="Age14over"
                className="partMap3"
                onChange={allCheckActive}
                checked={checkBoxs.includes('Age14over')}
              />
            </div>
          </tr>
        </tbody>
        <button
          type="button"
          className="memberJoins"
          onClick={signUpOk}
          disabled={!ActiveJoin}
        >
          가입하기
        </button>
      </table>
    </div>
  );
}

export default Signup;
