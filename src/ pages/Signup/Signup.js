import React from 'react';
import Nav from '../../components/Nav.js';
import { TABLETH } from './TABLETH.js';
import { INPUTMAP } from './INPUTMAP.js';
import { SIGNUPAGREES } from './SIGNUPAGREE';
import BtnModal from './BtnModal.js';
import BtnComponent from './BtnComponent.js';
import './Signup.scss';

function Signup() {
  return (
    <div>
      <Nav />
      <h2 className="signUpTitles">회원가입</h2>
      <p className="pageSub">
        <span className="icons">*</span>
        필수입력사항
      </p>
      <table className="tableBar">
        <tbody className="mapList">
          {TABLETH.map(TABLETH => {
            return (
              <tr className="mapOne">
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
              <tr className="mapTwo">
                <td className="mapThree">
                  <input
                    key={INPUTMAP.id}
                    type={INPUTMAP.type}
                    placeholder={INPUTMAP.text}
                    className="inputTests"
                  />
                </td>
              </tr>
            );
          })}
          {/* 버튼 대략 투입 지점 */}
          <BtnComponent />
          <tr className="userAgreePart">
            <th className="agreePart">
              이용약관동의
              <span className="icons">*</span>
            </th>
            <div className="agreePartMap">
              {SIGNUPAGREES.map(SIGNUPAGREES => {
                return (
                  <span className="partMap">
                    {SIGNUPAGREES.content}
                    <input type="checkbox" />
                  </span>
                );
              })}
            </div>
            <BtnModal />
          </tr>
        </tbody>
        <button className="memberJoin">가입하기</button>
      </table>
    </div>
  );
}

export default Signup;
