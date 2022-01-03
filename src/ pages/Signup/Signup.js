import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav.js';
import { TABLETH } from './TABLETH.js';
import { INPUTMAP } from './INPUTMAP.js';
import { SIGNUPAGREES } from './SIGNUPAGREE';
import BtnModal from './BtnModal.js';

import './Signup.scss';

function Signup() {
  /* ----------------------백엔드 통신 시작 부분 ------------------- */
  const navigate = useNavigate();
  const [inputs, setinputs] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    phone_number: '',
    address: '',
    //회원가입에 필요한 모든 요소를 여기에 몰아버렸고, 명칭은 사전에 백엔드 담당자에게 받은 명칭을 그대로 준수하였음.
  });
  const { username, password, name, email, phone_number, address } = inputs;
  // inputs state는 이 값들을 모두 보유한다.

  const inputBackControl = event => {
    const { value, name } = event.target;
    setinputs({
      ...inputs,
      [name]: value,
    });
  };
  const usernameCheck = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{6,}$/.test(username); // 백엔드에서 받은조건 : 영문만 사용하거나 / 영문+숫자로 6자 이상 조건을 만족시킬것.
  const passwordCheck =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,}$/.test(
      password //백엔드에서 받은 비밀번호 관련 조건 : 최소 8자 이상 + 1개이상의 문자 + 1개이상의 숫자 + 1개이상의 특수문자 보유
    );
  const emailCheck =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{5,}$/.test(
      email
    ); // 백엔드로 부터 받은 별도의 조건 없음 : 백엔드와 협의된 목표는 최하단 가입하기 버튼을 클릭할경우 (이메일 중복+이메일 유효값+아이디 유효값+아이디 중복체크+패스워드 유효값) 모든조건을 동시 수행하도록 할것.
  const memberJoinCheck = usernameCheck && passwordCheck && emailCheck; // id+pw+email에 대한 체크 시작
  const signUpOk = memberJoinCheck => {
    fetch('http://227d-118-32-35-58.ngrok.io/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: username, //백엔드와의 명칭 통일
        password: password,
        name: name,
        email: email,
        phone_number: phone_number,
        address: address,
      }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.message === 'CREATED') {
          alert('당신의 회원가입을 환영합니다!');
          console.log(res);
          navigate('/main');
        } else {
          alert('당신의 회원가입은 실패하였습니다.');
          console.log(res);
        }
      });
  };

  /* ----------------------백엔드 통신 대부분 마무리 부분 ------------ */
  /* ----------------------체크박스 시작 부분----------------------  */
  // 전체동의합니다 선택시 모든 체크박스 활성화
  const [checkBoxs, setcheckBoxs] = useState([]); // 최초 state에 빈 배열을 부여함.
  const allCheckActive = event => {
    event.target.checked
      ? setcheckBoxs([...checkBoxs, event.target.name])
      : setcheckBoxs(checkBoxs.filter(checkEvent => !checkEvent)); //filter로 체크해제시 배열에서 해당버튼 명 제외.
  };
  // 전체동의합니다 선택시 전체선택 또는 전체해체
  const allCheckBox = event => {
    event.target.checked
      ? setcheckBoxs(['Agree', 'AgeUp', 'Info']) //클릭시 얘네가 배열내부로 push되어 들어감.
      : setcheckBoxs([]);
  };

  return (
    <div>
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
          {INPUTMAP.map(INPUTMAP => {
            return (
              <tr className="mapTwo" key={INPUTMAP.id}>
                <td className="mapThree">
                  <input
                    type={INPUTMAP.type}
                    placeholder={INPUTMAP.text}
                    onChange={inputBackControl}
                    className="inputTests"
                  />
                </td>
              </tr>
            );
          })}

          <tr className="userAgreePart">
            <th className="agreePart">
              이용약관동의
              <span className="icons">*</span>
            </th>
            <div className="checkboxAll">
              <input
                type="checkbox"
                onChange={allCheckBox}
                checked={checkBoxs.length === 3} // 배열의 길이로 전체버튼 선택 유/무 결정
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
                  </span>
                );
              })}

              <input
                type="checkbox"
                name="Agree"
                className="partMap1"
                onChange={allCheckActive}
                checked={checkBoxs.includes('Agree')} //name의 값과 checkBoxs 내부에 있는 요소가 같으면 체크이벤트를 활성화
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
            <BtnModal />
          </tr>
        </tbody>
        <button className="memberJoin" onClick={signUpOk}>
          가입하기
        </button>
      </table>
    </div>
  );
}

export default Signup;
