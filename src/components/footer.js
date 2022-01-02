import React from 'react';
import './footer.scss';
function Footer() {
  return (
    <footer className="wrapper">
      <div className="header">
        {' '}
        {/* 이전 footerAlls */}
        <div className="footerLefts">
          {' '}
          {/* 이전 footerLefts */}
          <h2 className="footerTitles">고객행복센터</h2>
          <div className="leftContentBox">
            <p className="callNumber">1234-5678</p>
            <div className="leftCenter">
              <p className="csCenter">365고객센터</p>
              <p className="openTime">오전 8시 ~ 오후 7시</p>
            </div>
            <div className="btns">
              <button>카카오톡 문의하기</button>
            </div>
            <div className=" leftCenter leftCenters">
              <p className="csCenter">365고객센터</p>
              <p className="openTime">오전 8시 ~ 오후 7시</p>
            </div>
            <div className="btns">
              <button>1:1 문의하기</button>
            </div>
            <div className=" leftCenter leftCenters">
              <p className="csCenter">365고객센터</p>
              <p className="openTime">오전 8시 ~ 오후 7시</p>
            </div>
            <div className="rightInfo">
              <ul className="rightList">
                <li>컬리소개</li>
                <li>소개영상</li>
                <li>인재채용</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
              </ul>
              <div className="companyIntroduceTextGroup">
                <p className="companyNameText">
                  법인명 (상호): 주식회사 KurlyFlower | 사업자 등록번호:
                  000-00-00000
                </p>
                주소 : 서울시 강남구 테헤란로 427 | 개인정보보호책임자: 홍길동
                <p className="companyEmail">
                  제휴문의 : business@kurlyflower.com | 대표이사 : 홍길동
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
