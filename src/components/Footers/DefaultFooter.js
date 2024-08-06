/*eslint-disable*/
import React from "react";
import { Container, NavLink } from "reactstrap";
import logo from "assets/img/logo-rm_bg_white.png"
import kakao_logo from "assets/img/main/kakaotalk_logo.png"
import naver_logo from "assets/img/main/naver_logo.png"
import 'assets/css/custumCSS/footer.css';
function DefaultFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <footer className="footer footer-default">
        <nav>
          <ul style={{color:"white"}}>
            <NavLink
              to="/"
              id=""
              onClick={scrollToTop} // 클릭 시 스크롤 최상단으로 이동
              className="nav-link" // 클래스 이름 추가
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={logo} 
                alt="logo"
                className="logo-img-footer" // 클래스 이름 추가
              ></img>
            </NavLink>
            <li>
              <span
              >
                본사 12106 경기도 남양주시 순화궁로 249, M동 601호(별내파라곤스퀘어) | 대전지사 34834 대전광역시 중구 대종로 509, 선화동 5-1 소청1번가 4층
                <br /><br />
                사업자등록번호 210-81-54780
              </span>
            </li>
          </ul>
        </nav>
        <div className="footer-right">
          <div className="footer-right-first">
            <span className="footer-inquiry">상담문의</span>
            <span className="footer-phone">02 985 3126</span>
          </div>
          <div className="footer-right-btns">
              <a href="https://pf.kakao.com/_UMzpb" target="_blank" rel="noopener noreferrer">
                  <img src={kakao_logo} alt="kakao_logo" className="footer-kakao-logo" />
              </a>
              <a href="https://blog.naver.com/hdit3126" target="_blank" rel="noopener noreferrer">
                  <img src={naver_logo} alt="naver_logo" className="footer-naver-logo" />
              </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default DefaultFooter;
