import React from "react";
import './Gallery.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery.scss';

const Gallery = (props) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 826, // Ширина экрана, на которой изменится количество слайдов
        settings: {
          speed: 700,
          slidesToShow: 1, // Количество слайдов при адаптации
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  return (
    <div className="gallery-wrapper">
      <div className="headings">
        <h1>Галерея</h1>
        <h2>Больше фото в нашем <a href="https://instagram.com/detailing_garage.md?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer">Instagram</a></h2>
      </div>
      <div className="gallery-content">
        <Slider {...settings}>
          {props.galleryImage.galleryImages.map((i, index) => (
            <div key={index} className="slide">
              <img src={i.image} alt="images" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Gallery;