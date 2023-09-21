import React from "react";
import './VideoSlider.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSlider = (props) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    ]
  };
  return (
    <div className="video-wrapper">
      <Slider {...settings}>
        {props.videoSlider.videoSlider.map((v, index) => (
          <video className="slide" key={index} src={v.video} controls autoPlay muted />
        ))}
      </Slider>
    </div>
  );
}

export default VideoSlider;