import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_one from "../../Resources/images/slide_one.jpg";
import slide_two from "../../Resources/images/slide_two.jpg";
import slide_three from "../../Resources/images/slide_three.jpg";
const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };
  return (
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div
          className="carrousel_wrapper"
          style={{
            height: `${window.innerHeight}px`,
            overflow: "hidden",
          }}
        >
          <Slider {...settings}>
            <div className="carousel-item">
              <div
                className="carrousel_image"
                style={{
                  background: `url(${slide_one})`,
                  height: `${window.innerHeight}px`,
                
                
                }}
              ></div>
            </div>
            <div class="carousel-item">
              <div
                className="carrousel_image"
                style={{
                  background: `url(${slide_two})`,
                  height: `${window.innerHeight}px`,
                }}
              ></div>
            </div>
            <div class="carousel-item">
              <div
                className="carrousel_image"
                style={{
                  background: `url(${slide_three})`,
                  height: `${window.innerHeight}px`,
                }}
              ></div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
