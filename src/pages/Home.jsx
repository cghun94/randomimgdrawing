import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import background from "../images/background.jpg";
import top1 from "../images/top/1.bmp";
import top2 from "../images/top/2.bmp";
import top3 from "../images/top/3.bmp";
import top4 from "../images/top/4.bmp";
import top5 from "../images/top/5.png";

const Home = () => {
  const settings = {
    dots: false, // 개수 표시 점
    infinite: true, // 무한 캐러셀
    speed: 400, // 다음 컨텐츠 까지의 속도
    slidesToShow: 1, // 화면에 보이는 컨텐츠 수
    slidesToScroll: 1, // 스크롤 시 넘어가는 컨텐츠 수
    centerMode: true, // 현재 컨텐츠 가운데 정렬
    centerPadding: "10px", // 중앙 컨텐츠 padding 값
    autoplay: true, // 자동 캐러셀
    autoplaySpeed: 1000, // 자동 캐러셀 속도
    draggable: false, // 드래그
    fade: false, // 사라졌다 나타나는 효과
    arrows: false, // 좌,우 버튼
    vertical: true, // 세로 캐러셀
    initialSlide: 1, // 첫 컨텐츠 번호
    pauseOnFocus: true, // focus시 정지
    pauseOnHover: true, // hover시 정지
  };

  return (
    <div
      style={{
        height: 800,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#999",
          width: "90%",
          height: "80%",
        }}
      >
        <div style={{position: "relative"}}>
          {" "}
          <img src={background} alt="background" style={{}} />
          <div
            style={{
              position: "absolute",
              top: "38%",
              left: "10%",
              // backgroundColor: "black",
              width: "22.5%",
              height: "40%",
            }}
          >
            {/* <img
              src={top1}
              alt="background"
              style={{width: "100%", height: "100%"}}
            /> */}

            <Slider {...settings}>
              <div>
                <img
                  src={top1}
                  alt="background"
                  style={{width: "100%", height: "100%"}}
                />
              </div>
              <div>
                <img
                  src={top1}
                  alt="background"
                  style={{width: "100%", height: "100%"}}
                />
              </div>
              <div>
                <img
                  src={top1}
                  alt="background"
                  style={{width: "100%", height: "100%"}}
                />
              </div>
              <div>
                <img
                  src={top1}
                  alt="background"
                  style={{width: "100%", height: "100%"}}
                />
              </div>
              <div>
                <img
                  src={top1}
                  alt="background"
                  style={{width: "100%", height: "100%"}}
                />
              </div>
              <div>
                <img
                  src={top1}
                  alt="background"
                  style={{width: "100%", height: "100%"}}
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
