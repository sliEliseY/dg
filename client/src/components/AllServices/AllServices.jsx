import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import './AllServices.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AllServices = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 826, // Ширина экрана, на которой изменится количество слайдов
        settings: {
          speed: 700,
          slidesToShow: 3, // Количество слайдов при адаптации
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 768, // Ширина экрана, на которой изменится количество слайдов
        settings: {
          speed: 700,
          slidesToShow: 2, // Количество слайдов при адаптации
          slidesToScroll: 2,
          dots: false
        },
      }
    ],
  };

  return (
    <div id='allServices' className="gallery-wrapper">
      <div className="headings">
        <h1>Все наши услуги</h1>
      </div>
      <div className="gallery-content">
        <Slider {...settings}>
          {props.serviceImage.serviceImages.map((item, index) => (
            <div key={index} className="slide">
              <NavLink to={item.path}>
                <img src={item.image} alt={item.description} />
                <p className="image-description">{item.description}</p>
              </NavLink>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AllServices;