import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";
import { Modal } from "react-bootstrap";
import logo from "assets/img/logo-rm_bg_white.png"
import btn_toggle from "assets/img/main/btn_1.png"
import btn_kakao from "assets/img/main/btn_2.png"
import btn_blog from "assets/img/main/btn_3.png"
import 'assets/css/custumCSS/navbar.css';

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);
  
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("navbar-solid");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg">
        <div className="navbar-translate">
          <NavLink
            to="/"
            id="logo_to_top"
            onClick={scrollToTop} // 클릭 시 스크롤 최상단으로 이동
            style={{ cursor: 'pointer' }}
          >
            <img 
              src={logo} 
              alt="logo"
              className="logo-img" // 클래스 이름 추가
            ></img>
          </NavLink>
          <button
            className="navbar-toggler navbar-toggler"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              setCollapseOpen(!collapseOpen);
            }}
            aria-expanded={collapseOpen}
            type="button"
          >
            <span className="navbar-toggler-bar top-bar"></span>
            <span className="navbar-toggler-bar middle-bar"></span>
            <span className="navbar-toggler-bar bottom-bar"></span>
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          isOpen={collapseOpen}
          navbar
        >
          <Nav navbar
            className="btn_wrapper"
          >
            <NavItem>
              <NavLink
                className="btns"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  handleModalShow();
                }}
              >
                <img src={btn_toggle} alt="toggle"></img>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                className="btns"
                href="https://pf.kakao.com/_UMzpb"
                target="_blank"
              >
                <img className="fade-image" src={btn_kakao} alt="kakao"></img>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                className="btns"
                href="https://blog.naver.com/hdit3126"
                target="_blank"
              >
                <img src={btn_blog} alt="blog"></img>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {/* 모달 컴포넌트 */}
      <Modal 
        show={showModal} 
        onHide={handleModalClose}
        dialogClassName="custom-modal" // Custom class for the modal
      >
        <Modal.Body style={{
            display: 'flex',
            flexDirection: 'column',   // 텍스트를 위아래로 배치
            alignItems: 'center',      // 수평 중앙 정렬
            justifyContent: 'center',  // 수직 중앙 정렬
            height: '100%',            // 모달의 전체 높이를 사용
            textAlign: 'center',       // 텍스트 중앙 정렬
          }}>
          {/* 특정 위치를 클릭하면 모달을 닫음 */}
          <div className="clickable-area" onClick={handleModalClose}></div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ExamplesNavbar;
