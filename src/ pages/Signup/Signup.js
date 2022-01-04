import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TABLETH } from './TABLETH.js';
import { SIGNUPAGREES } from './SIGNUPAGREE';
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

  const userNameValid = inputs.username.length > 5;
  const passwordValid = inputs.password.length > 7;
  const emailValid = inputs.email.includes('@');
  const ActiveJoin = userNameValid && emailValid && passwordValid;
  const navigate = useNavigate();

  const signUpOk = () => {
    const { username, password, name, email, phone_number, address } = inputs;
    fetch('http://dfc1-118-32-35-58.ngrok.io/users/signup', {
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
      .then(result => {
        if (result.message === 'CREATED') {
          navigate('/main');
        } else {
          alert('당신의 회원가입은 실패하였습니다.');
        }
      });
  };

  const [checkBoxs, setcheckBoxs] = useState([]);
  const allCheckActive = event => {
    event.target.checked
      ? setcheckBoxs([...checkBoxs, event.target.name])
      : setcheckBoxs(checkBoxs.filter(checkEvent => !checkEvent));
  };

  const allCheckBox = event => {
    event.target.checked
      ? setcheckBoxs(['Agree', 'AgeUp', 'Info'])
      : setcheckBoxs([]);
  };

  return (
    <div>
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
                onChange={allCheckBox}
                checked={checkBoxs.length === 3}
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
                name="Agree"
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
                name="AgeUp"
                className="partMap3"
                onChange={allCheckActive}
                checked={checkBoxs.includes('AgeUp')}
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
