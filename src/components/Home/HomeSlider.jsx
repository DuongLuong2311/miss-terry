import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Linked } from '../../sass/styled/Styled.styled';
import Banner from '../../assets/img/slider/banner.png'; 
import Puzzle from '../../assets/img/slider/puzzle.png'
import Arrow from '../../assets/img/slider/arrow.png'

export default function HomeSlider() {

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

  return (
    <Slider className="slider" {...settings}>
      <div className="slider-1">
        <img alt="" src={Banner}/>
        <div className="cover"></div>
        <div className="content">
          <div className="puzzle">
            <img src={Puzzle} alt="" />
            <span>LOGICAL <br/> PUZZLES</span>
          </div>
          <h1>ENTER THE WORLD OF  <br/> ADVENTURE</h1>
          <p>You have one hour and your mission is : Escape !!</p>
          <Linked className="link-banner" to="">
            <img src={Arrow} alt="" />
            <button>
              Book Now
            </button>
          </Linked>
        </div>
     
      </div>


    </Slider>
  )
}