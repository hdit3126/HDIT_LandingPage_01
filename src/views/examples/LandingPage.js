import React, { useState } from 'react';
import main_1 from "assets/img/main/main_1.png";
import main_2 from "assets/img/main/main_2.png";
import main_3 from "assets/img/main/main_3.png";
import main_4 from "assets/img/main/main_4.png";
import main_5 from "assets/img/main/main_5.png";
import main_6 from "assets/img/main/main_6.png";
import main_7 from "assets/img/main/main_7.png";
import main_last from "assets/img/main/main_last.jpg";
import graph from "assets/img/main/graph.png";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import 'assets/css/custumCSS/landingPage.css';

function LandingPage() {
  const [isPaused, setIsPaused] = useState(false);
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="image-container">
          <div className='first-div'>
            <div className='img-div'>
              <img src={main_1} alt="main_1" />
            </div>
            <div className='text-div'>
              <span className='rawname'>『건축물 관리법』</span>
            </div>
          </div>
          <img src={main_2} alt="main_2" />
          <img src={main_3} alt="main_3" />
          <img src={main_4} alt="main_4" />
          <img src={main_5} alt="main_5" />
          <img src={main_6} alt="main_6" />
          <img src={main_7} alt="main_7" />
          <div className="last_wrapper">
            <img src={main_last} alt="main_last" className="main_last"/>
            <div className="last_performance"> 
              <div className="last_graph_name">
                <span>현대이미지테크 실적</span>
              </div>
              <div className="last_blank"></div>
              <div className="last_graph_wrapper">
                <div className="last_graph_row_name">
                  <div className="last_pro_name">
                    프로젝트명
                  </div>
                  <div className="last_region">
                    지역
                  </div>
                </div>
                <div 
                  className={`last_graph_data ${isPaused ? 'paused' : ''}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                > 
                  {/* 스크롤 효과가 있는 이미지 */}
                  <div className="scrolling-container">
                    <div className="scrolling-image" style={{backgroundImage: `url(${graph})`}}></div>
                    <div className="scrolling-image" style={{backgroundImage: `url(${graph})`}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;